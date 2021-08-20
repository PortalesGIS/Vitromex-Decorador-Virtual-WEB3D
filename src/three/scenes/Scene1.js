import {  AxesHelper, Color,  DirectionalLight, HemisphereLight, 
	PerspectiveCamera,  Raycaster, Scene, Vector2 ,
	// Math,

} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
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
		this.muroSelected=""
		this.background = new Color("skyblue").convertSRGBToLinear();
		this.create();
	}
	create(){
	// this.background = new CubeTextureLoader()
	// 	.setPath( 'models3D/enviroment/' )
	// 	.load( [
	// 		'px.jpg',
	// 		'nx.jpg',
	// 		'py.jpg',
	// 		'ny.jpg',
	// 		'pz.jpg',
	// 		'nz.jpg'
	// 	] );
		// 
		this.traker = new TrakerMouse()
		this.add(this.traker)

		this.house = new House()
		this.add(this.house)
		
		this.hovers = new Hovers()
		this.add(this.hovers)

		
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
		Observer.emit(EVENTS.TEST,"hola estamos dentro del 3D");

		Observer.on(EVENTS.MOVETOAREASELECTMENU, (payload) => {
			this.moveCameraToPosition(this.camera,this.control,payload)
		});
		Observer.on(EVENTS.SENDPRODUCT,()=>{
			this.muroSelected=""
			Observer.emit(EVENTS.CLEARHOVER,this.muroSelected);
		})
	}
	onDocumentMouseDown = (clientX, clientY, renderer, camera  ) =>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse,camera );
		let intersects = raycaster.intersectObjects( this.children[2].children,true); 
		if ( intersects.length > 0 ) {
			// if(intersects[0].object.callback){
			// 	intersects[0].object.callback();
			// }
			if(this.pisoIncludesForTraking(intersects)){
				// this.muroSelected=""
				// Observer.emit(EVENTS.CLEARHOVER,this.muroSelected);
				this.onMoveToAreaSelected(intersects)
				this.control.enable = false
				this.camera.position.set(intersects[0].point.x,17,intersects[0].point.z)
				this.camera.lookAt(intersects[0].point.x,17,intersects[0].point.z)
				this.control.target.set(intersects[0].point.x/1.0001,this.camera.position.y/1.0001, intersects[0].point.z/1.0001)
			}
			if(intersects[0].object.name.includes('Muro')){
				this.muroSelected = intersects[0].object.name
				Observer.emit(EVENTS.SELECTMURO,intersects[0].object.name);	
				Observer.emit(EVENTS.CLEARHOVER,this.muroSelected);	
			}
		}
	}
	onDocumentMouseMove=(clientX, clientY, renderer, camera)=>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse,camera );
		let intersects = raycaster.intersectObjects(this.children[2].children,true); 
		Observer.emit(EVENTS.CLEARHOVER,this.muroSelected);
		if(intersects[0]){
			if(this.pisoIncludesForTraking(intersects)){
			this.traker.position.set(intersects[0].point.x ,intersects[0].point.y+0.2,intersects[0].point.z)
			}
			if(intersects[0].object.name.includes('Muro')){
				intersects[0].object.material.opacity=0.5
			}
		}
	}
	pisoIncludesForTraking(intersects){
		let isFind=false
		switch (intersects[0].object.name) {
			case "Hover_Piso_C_Ext_Pasillo_UVb_MT_Hover_Piso_C_Ext_Pasillo_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Int_Comedor_UVb_MT_Hover_Piso_C_Int_Comedor_UVb_0":
				isFind=true	
			break;
			case "Hover_Piso_C_Ext_Cochera_UVb_MT_Hover_Piso_C_Ext_Cochera_UVb_0":
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
				camera.position.set(-79,17,1)
				camera.lookAt(-79,17,1)
				control.target.set(-79/1.0001,17/1.0001,1/1.0001)
				break;
			case "sala":
				camera.position.set(-122,17,91)
				camera.lookAt(-122,17,91)
				control.target.set(-122/1.0001,17/1.0001,91/1.0001)
				break;
			case "cocina":
				camera.position.set(-25,17,100)
				camera.lookAt(-25,17,100)
				control.target.set(-25/1.0001,17/1.0001,100/1.0001)
				break;
			case "comedor":
				camera.position.set(-79,17,93)
				camera.lookAt(-79,17,93)
				control.target.set(-79/1.0001,17/1.0001,93/1.0001)
				break;
			case "banio":
				camera.position.set(-23,17,127)
				camera.lookAt(-23,17,127)
				control.target.set(-23/1.0001,17/1.0001,127/1.0001)
				break;
		
			default:
				break;
		}
	}

	update(){
	}
}

export default Scene1;
