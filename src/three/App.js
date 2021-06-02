import { PerspectiveCamera,  WebGLRenderer, sRGBEncoding  } from 'three';
import Scene1 from './scenes/Scene1';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


export class App {
	constructor(container) {
		this.container = container;

		this.scene = new Scene1();

		// ## Camera's config
		this.camera = new PerspectiveCamera(35, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		this.camera.position.set(60, 10, 0);
		// this.camera.lookAt(0, 0, 0);
		this.control = new OrbitControls(this.camera, this.container);
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
		document.onclick=(e)=>{
			e.preventDefault();			
			this.scene.onDocumentMouseDown(e.clientX, e.clientY, this.renderer, this.camera);
		}
		// document.querySelector("#scene").addEventListener("click",(e)=>{
		// 	console.log("click dentro????????")
		// 	console.log(e)
		// })
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


		this.renderer.render(this.scene, this.camera);
		this.control.update();
		// Updates here
		this.scene.update(); 


		this.renderer.setAnimationLoop(() => this.render());
	}
}
