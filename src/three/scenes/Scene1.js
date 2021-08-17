import {  AxesHelper, Color, DirectionalLight, HemisphereLight, PerspectiveCamera,  Raycaster, Scene, Vector2 ,
	// Math,

} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { House } from '../objects/House';
import { Hovers } from '../objects/hovers';
import { TrakerMouse } from '../objects/MouseTraker';
// import { PlaneTest } from '../objects/PlaneTest';
import Observer, { EVENTS } from '../Observer';
var raycaster = new Raycaster();
var mouse = new Vector2();
class Scene1 extends Scene {
	constructor(camera = PerspectiveCamera,control= OrbitControls){
		super();
		this.camera = camera;
		this.control = control;
		this.background = new Color("skyblue").convertSRGBToLinear();
		this.create();
	}
	create(){
		// 
		this.traker = new TrakerMouse()
		this.add(this.traker)

		this.house = new House()
		this.add(this.house)
		
		this.hovers = new Hovers()
		this.add(this.hovers)

		var gui = new GUI();
		var cam = gui.addFolder('sala-1');
		cam.open();
		// 
		
		// 
		// 
		this.abientLight = new HemisphereLight(0xffffffbb, 0x080820,0.5)
		this.light =  new DirectionalLight(0xffffff,1);
		// this.add(	this.abientLight );
		// this.add(this.light)
		// helpers
		this.axesHelper = new AxesHelper(5);
		this.add(this.axesHelper);
		// 
		console.log(this.children)
		Observer.emit(EVENTS.TEST,"hola estamos dentro del 3D");

		Observer.on(EVENTS.MOVETOAREASELECTMENU, (payload) => {
			this.moveCameraToPosition(this.camera,this.control,payload)
		});
	}
	onDocumentMouseDown = (clientX, clientY, renderer, camera  ) =>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse,camera );
		let intersects = raycaster.intersectObjects( this.children[2].children,true); 
		console.log(intersects)
		if ( intersects.length > 0 ) {
			// if(intersects[0].object.callback){
			// 	intersects[0].object.callback();
			// }
			if(intersects[0].object.name.includes('Piso')){
				this.onMoveToAreaSelected(intersects)
				this.control.enable = false
				this.camera.position.set(intersects[0].point.x,17,intersects[0].point.z)
				this.camera.lookAt(intersects[0].point.x,17,intersects[0].point.z)
				this.control.target.set(intersects[0].point.x/1.0001,this.camera.position.y/1.0001, intersects[0].point.z/1.0001)
			}
			if(intersects[0].object.name.includes('Muro')){
				console.log(intersects[0].object.name)			
			}
		}
	}
	onDocumentMouseMove=(clientX, clientY, renderer, camera)=>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse,camera );
		let intersects = raycaster.intersectObjects(this.children[2].children,true); 
		Observer.emit(EVENTS.CLEARHOVER);
		if(intersects[0]){
			if(intersects[0].object.name.includes('Piso')){
			this.traker.position.set(intersects[0].point.x ,intersects[0].point.y+0.2,intersects[0].point.z)
			}
			if(intersects[0].object.name.includes('Muro')){
				intersects[0].object.material.opacity=1
			}
		}
	}
	pisoIncludesForTraking(intersects){
		let isFind=false
		switch (intersects[0].object.name) {
			case "Hover_Piso_C_Int_Banio2_UVb_MT_Hover_Piso_C_Int_Banio2_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Ext_Pasillo_UVb_MT_Hover_Piso_C_Ext_Pasillo_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Int_Comedor_UVb_MT_Hover_Piso_C_Int_Comedor_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Ext_Cochera_UVb_MT_Hover_Piso_C_Ext_Cochera_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Ext_Terraza_UVb_MT_Hover_Piso_C_Ext_Terraza_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Int_Banio_UVb_MT_Hover_Piso_C_Int_Banio_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Int_Sala_UVb_MT_Hover_Piso_C_Int_Sala_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Int_Cocina_UVb_MT_Hover_Piso_C_Int_Cocina_UVb_0":
				isFind=true	
			break;
			default:
				isFind= false;
		}
			return isFind;
	}
	onMoveToAreaSelected(intersects){
		switch (intersects[0].object.name) {
			case "Hover_Piso_C_Int_Banio2_UVb_MT_Hover_Piso_C_Int_Banio2_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"banio");	
			break;
			case "Hover_Piso_C_Ext_Pasillo_UVb_MT_Hover_Piso_C_Ext_Pasillo_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"fachada");	
			break;
			case "Hover_Piso_C_Int_Comedor_UVb_MT_Hover_Piso_C_Int_Comedor_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"comedor");	
			break;
			case "Hover_Piso_C_Ext_Cochera_UVb_MT_Hover_Piso_C_Ext_Cochera_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"fachada");	
			break;
			case "Hover_Piso_C_Ext_Terraza_UVb_MT_Hover_Piso_C_Ext_Terraza_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"fachada");	
			break;
			case "Hover_Piso_C_Int_Banio_UVb_MT_Hover_Piso_C_Int_Banio_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"banio");	
			break;
			case "Hover_Piso_C_Int_Sala_UVb_MT_Hover_Piso_C_Int_Sala_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"sala");	
			break;
			case "Hover_Piso_C_Int_Cocina_UVb_MT_Hover_Piso_C_Int_Cocina_UVb_0":
				Observer.emit(EVENTS.MOVETOAREA,"cocina");	
			break;
			default:
				Observer.emit(EVENTS.MOVETOAREA,"sala");	
		}
	}

	muroIncludesForTraking(intersects){
		let isFind=false
		switch (intersects[0].object.name) {
			case "Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0":
				isFind=true	
			break;
			case "Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0":
				isFind=true	
			break;
			default:
				isFind= false;
		}
			return isFind;
	}

	moveCameraToPosition(camera,control,nameArea){
		switch (nameArea) {
			case "fachada":
				camera.position.set(68,17,11)
				camera.lookAt(68,17,11)
				control.target.set(68/1.0001,17/1.0001,11/1.0001)
				break;
			case "sala":
				camera.position.set(123,17,-95)
				camera.lookAt(123,17,-95)
				control.target.set(123/1.0001,17/1.0001,-95/1.0001)
				break;
			case "cocina":
				camera.position.set(21,17,-103)
				camera.lookAt(21,17,-103)
				control.target.set(21/1.0001,17/1.0001,-103/1.0001)
				break;
			case "comedor":
				camera.position.set(82,17,-104)
				camera.lookAt(82,17,-104)
				control.target.set(82/1.0001,17/1.0001,-104/1.0001)
				break;
			case "banio":
				camera.position.set(23,17,-125)
				camera.lookAt(23,17,-125)
				control.target.set(23/1.0001,17/1.0001,-125/1.0001)
				break;
		
			default:
				break;
		}
	}

	update(){
	}
}

export default Scene1;
