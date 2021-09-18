import { PerspectiveCamera,  WebGLRenderer, sRGBEncoding,  LoadingManager, 
	// Math,
   } from 'three';
import Scene1 from './scenes/Scene1';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import {isDevice} from '../../utils/isDevice'
import Observer, { EVENTS } from './Observer';
export class App {
	constructor (container) {
		this.container = container;
		let antirebote =0 		
		// loader
		const loaderManager = new LoadingManager();
		loaderManager.onLoad =()=>{
			Observer.emit(EVENTS.LOADINGFFINISH);
		}
		loaderManager.onProgress = (fileUrl,itemsloaded, itemsTotal) =>{
			const percentage = itemsloaded / itemsTotal;
			Observer.emit(EVENTS.LOADING,percentage,fileUrl);
		}
		
		// ## Camera's config
		this.camera = new PerspectiveCamera(60, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		this.camera.layers.enable(0)
		// this.camera.layers.enable(5)
		// initial test
		// this.camera.position.set(123, 22,-60);
		// this.camera.position.set(0,4,0);
		// initial comedor
		// this.camera.position.set(69, 23,-96);
		// initial sala
		this.camera.position.set(38,0,10);

		// this.camera.position.set(0,3.5,0);
		this.camera.rotation.set(-1.9,-1.19,-1.19)
		// this.camera.lookAt(0, 0, 0);
		
		
		this.control = new OrbitControls(this.camera, this.container);
		this.control.target.set(this.camera.position.x/1.0001,this.camera.position.y/1.0001,this.camera.position.z/1.00001);
		this.control.enableDamping=true
		if(isDevice()){
			this.control.rotateSpeed=-0.4
		}
		else{
			this.control.rotateSpeed=-0.2
		}
		this.control.enableZoom = false
		// this.control.maxPolarAngle = 100 * Math.DEG2RAD
		// this.control.minPolarAngle = 50 * Math.DEG2RAD
		// ## Renderer's config
		
		this.renderer = new WebGLRenderer({
			antialias: true,
		})
		this.renderer.setPixelRatio(window.devicePixelRatio);
		// sRGBEncoding
		this.renderer.outputEncoding = sRGBEncoding;
		// ## Light's config
		this.renderer.physicallyCorrectLights = true;
		this.container.appendChild(this.renderer.domElement);
		
		// raycaster
		let drag = false;

		if(isDevice()){
			this.container.addEventListener("touchstart",()=>{
				antirebote=0
				drag=true;
			})	
			this.container.addEventListener("touchmove", (e)=>{
				antirebote++
				e.preventDefault();	
				drag = false;
				this.scene.onDocumentMouseMove(e.touches[0].clientX, e.touches[0].clientY, this.renderer, this.camera)
				// TODO: accion pesada al sistema????
			})
			this.container.addEventListener("touchend", (e)=> {
				e.preventDefault();
				if(drag && antirebote<30){
					this.scene.onDocumentMouseDown(e.changedTouches[0].clientX, e.changedTouches[0].clientY, this.renderer, this.camera);
				}				
			})
		}
		else { 
			this.container.onpointerdown = () => {
				antirebote=0
				drag=true;
			}		
			this.container.onpointermove = (e)=>{
				e.preventDefault();
				antirebote++	
				drag = false;
				this.scene.onDocumentMouseMove(e.clientX, e.clientY, this.renderer, this.camera)
				// TODO: accion pesada al sistema????
			}
			this.container.onpointerup = (e)=> {
				e.preventDefault();
				if(drag && antirebote<10){
					this.scene.onDocumentMouseDown(e.clientX, e.clientY, this.renderer, this.camera);
				}				
			}
		}
		
		this.scene = new Scene1(loaderManager,this.camera,this.control,this.renderer);
		this.stats = Stats()
		document.body.appendChild(this.stats.dom)
		// 

		this.control.update();
		this.onResize();
		this.render();

		
	}
	
	

	onResize() {
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
		this.camera.updateProjectionMatrix();
	}

	render() {

		this.stats.update()
		this.renderer.render(this.scene, this.camera);
		this.control.update();
		// Updates here
		this.scene.update(); 


		this.renderer.setAnimationLoop(() => this.render());
	}
}
