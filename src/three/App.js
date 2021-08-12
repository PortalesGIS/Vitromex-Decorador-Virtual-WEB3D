import { PerspectiveCamera,  WebGLRenderer, sRGBEncoding, 
	// Math,
   } from 'three';
import Scene1 from './scenes/Scene1';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export class App {
	constructor(container) {
		this.container = container;

		
		// ## Camera's config
		this.camera = new PerspectiveCamera(70, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		// initial test
		// this.camera.position.set(123, 22,-60);
		// initial sala
		this.camera.position.set(69, 23,-96);

		// this.camera.position.set(0,3.5,0);
		this.camera.rotation.set(-1.9,-1.19,-1.19)
		// this.camera.lookAt(0, 0, 0);
		
		
		this.control = new OrbitControls(this.camera, this.container);
		this.control.target.set(this.camera.position.x/1.0001,this.camera.position.y/1.0001,this.camera.position.z/1.00001);
		this.control.enableDamping=true
		this.control.rotateSpeed=-0.2
		// this.control.enableZoom = false
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
		this.container.onpointerdown = () => {
			drag=true;
		}		
		this.container.onpointermove = (e)=>{
			e.preventDefault();	
			drag = false;
			// TODO: accion pesada al sistema????
		}
		this.container.onpointerup = (e)=> {
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
		// Helpersss
		var gui = new GUI();

		var cam = gui.addFolder('Camera');
		cam.add(this.camera.position, 'y', -50.0, 50.0).listen();
		cam.add(this.camera.position, 'x', -50.0, 50.0).listen();
		cam.add(this.camera.position, 'z', -50.0, 50.0).listen();
		cam.add(this.camera.rotation, 'x', 0, 2).listen();
		cam.add(this.camera.rotation, 'y', 0, 2).listen();
		cam.add(this.camera.rotation, 'z', 0, 2).listen();
		cam.open();

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
