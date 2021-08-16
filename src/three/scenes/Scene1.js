import {  AxesHelper, Color, DirectionalLight, HemisphereLight, PerspectiveCamera,  Raycaster, Scene, Vector2 ,
	// Math,

} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import {Cube } from '../objects/Cube'
import { House } from '../objects/House';
import { TrakerMouse } from '../objects/MouseTraker';
import { PlaneTraking } from '../objects/Plane';
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
		this.cube = new Cube(1,"orangered");
		this.cube.position.y=2;
		// this.add(this.cube);
		// 
		this.traker = new TrakerMouse()
		this.add(this.traker)
		// planes for traking
		// 															w	h a	z  x
		this.planeDetectorMouseCocina = new PlaneTraking("cocina-1",55,55,2,-80,58)
		this.add(this.planeDetectorMouseCocina)
		this.planeDetectorCocinaB = new PlaneTraking("cocina-1",13,21,2,-119,36.5)
		this.add(this.planeDetectorCocinaB)
		this.planeDetectorMouseSala = new PlaneTraking("cocina-1",42,55,0.5,-80,106)
		this.add(this.planeDetectorMouseSala)

		var gui = new GUI();
		var cam = gui.addFolder('sala-1');
		cam.add(this.planeDetectorMouseSala.scale, 'x', -2,2 ).listen();
		cam.add(this.planeDetectorMouseSala.scale, 'y', -2,2 ).listen();
		cam.add(this.planeDetectorMouseSala.scale, 'z', -2,2 ).listen();
		// cam.add(this.planeDetectorMouseSala.position, 'y', -100.0, 100.0).listen();
		cam.add(this.planeDetectorMouseSala.position, 'x', 70.0, 120.0).listen();
		cam.add(this.planeDetectorMouseSala.position, 'z', -80.0, -70.0).listen();
		cam.open();
		// 
		this.house = new House()
		this.add(this.house)
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
		this.light =  new DirectionalLight(0xffffff,1);
		// this.add(	this.abientLight );
		// this.add(this.light)
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
			if(intersects[0].object.name === "cocina-1"){
				this.control.enable = false
				// intersects[ 0 ].object.material.color.set( 0xff00ff );
				// console.log(this.control.target);
				// this.camera.position.x = intersects[0].point.x;
				// this.camera.position.z = intersects[0].point.z;
				// this.control.target.set(intersects[0].point.x/1.1,this.camera.position.y/1.1, intersects[0].point.z/1.1)
				this.camera.position.set(intersects[0].point.x,23,intersects[0].point.z)
				this.camera.lookAt(intersects[0].point.x,23,intersects[0].point.z)
				// this.camera.lookAt(100,100,100)
				this.control.target.set(intersects[0].point.x/1.0001,this.camera.position.y/1.0001, intersects[0].point.z/1.0001)
				// this.control.enable = true
				// this.control.update()

			}
			console.log(intersects)
		}
	}
	onDocumentMouseMove=(clientX, clientY, renderer, camera)=>{
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse,camera );
		var intersects = raycaster.intersectObjects( this.children ); 
		if(intersects[0]){
			if(intersects[0].object.name==="cocina-1"){
				// console.log("Lugar: "+intersects[0].point.x +" - "+ intersects[0].point.z)
			this.traker.position.set(intersects[0].point.x ,intersects[0].point.y-0.1,intersects[0].point.z)
			}
		}
	}
	update(){
		
		this.cube.rotation.x +=0.001;
		this.cube.rotation.y +=0.001;
	}
}

export default Scene1;
