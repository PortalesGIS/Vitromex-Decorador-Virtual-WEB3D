import {  AxesHelper, Color, DirectionalLight, HemisphereLight, PerspectiveCamera, Raycaster, Scene, Vector2 ,
	// Math,

} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {Cube } from '../objects/Cube'
// import { Plane } from '../objects/Plane';
import { PlaneTest } from '../objects/PlaneTest';
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
		this.cube = new Cube(3,"orangered");
		this.cube.position.y=2;
		this.add(this.cube);
		// 
		// test - plane
		this.test = new PlaneTest()
		this.add(this.test)
		// 
		this.cube2 = new Cube(3,"blue");
		this.cube2.position.x=100;
		this.add(this.cube2);
		this.cube3 = new Cube(3,"green");
		this.cube3.position.x=-100;
		this.add(this.cube3);
		this.cube4 = new Cube(3,"yellow");
		this.cube4.position.z=100;
		this.add(this.cube4);
		this.cube5 = new Cube(3,"purple");
		this.cube5.position.z=-100;
		this.add(this.cube5);
		// 
		this.abientLight = new HemisphereLight(0xffffffbb, 0x080820,0.5)
		this.light =  new DirectionalLight(0xffffff,1.0);
		this.add(this.abientLight, this.light);
		// this.piso =new Plane(155,150);
		// this.add(this.piso);
		// helpers
		this.axesHelper = new AxesHelper(5);
		this.add(this.axesHelper);
		// 
		Observer.emit(EVENTS.TEST,"hola estamos dentro del 3D");
	}
	onDocumentMouseDown = (clientX, clientY, renderer, camera  ) =>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
	
		raycaster.setFromCamera( mouse,camera );
	
		var intersects = raycaster.intersectObjects( this.children ); 
		if ( intersects.length > 0 ) {
			// if(intersects[0].object.callback){
			// 	intersects[0].object.callback();
			// }
			if(intersects[0].object.name === "plane-155x150"){
				this.control.enable = false
				// intersects[ 0 ].object.material.color.set( 0xff00ff );
				// console.log(this.control.target);
				// this.camera.position.x = intersects[0].point.x;
				// this.camera.position.z = intersects[0].point.z;
				// this.control.target.set(intersects[0].point.x/1.1,this.camera.position.y/1.1, intersects[0].point.z/1.1)
				this.camera.position.set(intersects[0].point.x,10,intersects[0].point.z)
				this.camera.lookAt(intersects[0].point.x,10,intersects[0].point.z)
				// this.camera.lookAt(100,100,100)
				this.control.target.set(intersects[0].point.x/1.1,this.camera.position.y/1.1, intersects[0].point.z/1.1)
				// this.control.enable = true
				// this.control.update()

			}
			console.log(intersects)
			
		}
	
	}
	update(){
		
		this.cube.rotation.x +=0.01;
		this.cube.rotation.y +=0.01;
	}
}

export default Scene1;
