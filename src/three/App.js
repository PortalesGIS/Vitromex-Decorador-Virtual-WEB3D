import { PerspectiveCamera,  WebGLRenderer, sRGBEncoding, Math,   } from 'three';
import Scene1 from './scenes/Scene1';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export class App {
	constructor(container) {
		this.container = container;

		
		// ## Camera's config
		this.camera = new PerspectiveCamera(35, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		this.camera.position.set(60, 10, 0);
		// this.camera.lookAt(0, 0, 0);
		
		
		this.control = new OrbitControls(this.camera, this.container);
		this.control.target.set(this.camera.position.x/1.1,this.camera.position.y/1.1,this.camera.position.z/1.1);
		this.control.enableDamping=true
		this.control.rotateSpeed=-0.2
		this.control.enableZoom = false
		this.control.maxPolarAngle = 100 * Math.DEG2RAD
		this.control.minPolarAngle = 50 * Math.DEG2RAD
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
		document.onpointerdown = () => {
			drag=true;
		}		
		document.onpointermove = (e)=>{
			e.preventDefault();	
			drag = false;
			// TODO: accion pesada al sistema????
		}
		document.onpointerup = (e)=> {
			e.preventDefault();
			if(drag){
				this.scene.onDocumentMouseDown(e.clientX, e.clientY, this.renderer, this.camera);
			}				
		}
		// document.querySelector("#scene").addEventListener("click",(e)=>{
			// 	console.log("click dentro????????")
			// 	console.log(e)
			// })
			// 
		
		this.scene = new Scene1(this.camera,this.control,);
		// this.cameraHelper = new CameraHelper(this.camera)
		// this.scene.add(this.cameraHelper)

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


		this.renderer.render(this.scene, this.camera);
		// this.control.update();
		// Updates here
		this.scene.update(); 


		this.renderer.setAnimationLoop(() => this.render());
	}
}
