import {   Color,  
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
import gsap from 'gsap/gsap-core';
import { FalseLights } from '../objects/FalseLigth';
var raycaster = new Raycaster();
var mouse = new Vector2();
class Scene1 extends Scene {
	constructor(loaderManager,camera = PerspectiveCamera,control= OrbitControls){
		super();
		this.loaderManager = loaderManager;
		this.camera = camera;
		this.control = control;
		this.muroSelected=""
		this.background = new Color("#00aae4").convertSRGBToLinear();
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

		this.house = new House(this.loaderManager)
		this.add(this.house)
		
		this.hovers = new Hovers()
		this.add(this.hovers)

		this.falseLights = new FalseLights()
		this.add(this.falseLights)
		// 
		
		// 
		// 
		
		// helpers
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
		let intersects = raycaster.intersectObjects(this.children[2].children,true); 
		// console.log(intersects)
		if ( intersects.length > 0 ) {
			// if(intersects[0].object.callback){
			// 	intersects[0].object.callback();
			// }
			if(this.pisoIncludesForTraking(intersects)){
				Observer.emit(EVENTS.CHANGEAREATOAPLICATEPRODUCT,0)
				// this.muroSelected=""
				// Observer.emit(EVENTS.CLEARHOVER,this.muroSelected);
				this.onMoveToAreaSelected(intersects)
				console.log(intersects[0].point)
				let pointx=intersects[0].point.x
				let pointz=intersects[0].point.z
				if(intersects[0].point.x>0){
					if(intersects[0].point.x>this.camera.position.x){
						pointx+=0.1
					}else{
						pointx-=0.1
					}
				}
				else{
					if(intersects[0].point.x>this.camera.position.x){
						pointx+=0.1
					}else{
						pointx-=0.1
					}
				}
				if(intersects[0].point.z<0){
					if(intersects[0].point.z>this.camera.position.z){
						pointz+=0.1
					}else{
						pointz-=0.1
					}
				}
				else{
					if(intersects[0].point.z>this.camera.position.z){
						pointz+=0.1
					}else{
						pointz-=0.1
					}
				}
				console.log(''+pointx +'---'+ pointz)
				// this.control.dispose()
				this.control.target.set((pointx/1.00000000001),0, (pointz/1.00000000001))
				// this.camera.position.set(intersects[0].point.x,0,intersects[0].point.z)
				let animations = gsap.timeline()
				animations.to(this.camera.position,{
					// duration:0,
					duration:1,
					x:intersects[0].point.x,
					y:0,
					z:intersects[0].point.z,
					onUpdate:()=>{
						this.control.update()
					},
				},)
				.to("#scene",{
					duration:0.45,
					opacity:0,
				},"-=0.6")
				.to("#scene",{
					duration:0.5,
					opacity:1,
				})
				
			}
			if(intersects[0].object.name.includes('Muro')){
				Observer.emit(EVENTS.CHANGEAREATOAPLICATEPRODUCT,1)
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
		const muros = [
			"Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0",
			"Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0",
			"Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0",
			"Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0",
			"Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0",
			"Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0",
			"Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0",
			"Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0",
			"Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0",
			"Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0",
			"Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0",
			"Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0",
			"Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0",
			"Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0",
			"Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0",
			"Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0",
			"Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0",
			"Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0",
			"Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0",
		]
		muros.find(muro =>{
			if(muro===intersects[0].object.name){
				isFind=true;
			}
		})
			return isFind;
	}

	moveCameraToPosition(camera,control,nameArea){
		switch (nameArea) {
			case "fachada":
				camera.position.set(58,0,-100)
				camera.lookAt(58,0,-100)
				control.target.set(58/1.0001,0/1.0001,-100/1.0001)
				break;
			case "sala":
				camera.position.set(-37,0,4)
				camera.lookAt(-37,0,4)
				control.target.set(-37/1.0001,0/1.0001,4/1.0001)
				break;
			case "cocina":
				camera.position.set(63,0,3)
				camera.lookAt(63,0,3)
				control.target.set(63/1.0001,0/1.0001,3/1.0001)
				break;
			case "comedor":
				camera.position.set(38,0,24)
				camera.lookAt(38,0,24)
				control.target.set(38/1.0001,0/1.0001,24/1.0001)
				break;
			case "banio":
				camera.position.set(57,0,53)
				camera.lookAt(57,0,53)
				control.target.set(57/1.0001,0/1.0001,53/1.0001)
				break;
		
			default:
				break;
		}
	}

	update(){
	}
}

export default Scene1;
