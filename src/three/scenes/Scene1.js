import {  AxesHelper, Color, DirectionalLight, HemisphereLight, Raycaster, Scene, Vector2 } from 'three';
import {Cube } from '../objects/Cube'
import { Plane } from '../objects/Plane';
import Observer, { EVENTS } from '../Observer';
var raycaster = new Raycaster();
var mouse = new Vector2();
class Scene1 extends Scene {
	constructor(){
		super();
		this.background = new Color("skyblue").convertSRGBToLinear();
		this.create();
	}
	create(){
		this.cube = new Cube(3);
		this.cube.position.y=2;
		this.add(this.cube);
		this.abientLight = new HemisphereLight(0xffffffbb, 0x080820,0.5)
		this.light =  new DirectionalLight(0xffffff,1.0);
		this.add(this.abientLight, this.light);
		this.piso =new Plane(55,50);
		this.add(this.piso);
		// helpers
		this.axesHelper = new AxesHelper(5);
		this.add(this.axesHelper);
		// 
		Observer.emit(EVENTS.TEST,"hola estamos dentro del 3D");
	}
	onDocumentMouseDown(clientX, clientY, renderer, camera  ) {
		mouse.x = ( clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( clientY / renderer.domElement.clientHeight ) * 2 + 1;
	
		raycaster.setFromCamera( mouse,camera );
	
		var intersects = raycaster.intersectObjects( this.children ); 
		if ( intersects.length > 0 ) {
			// if(intersects[0].object.callback){
			// 	intersects[0].object.callback();
			// }
			intersects[ 0 ].object.material.color.set( 0xff00ff );
			console.log(intersects[0].object.name)
			
			
		}
	
	}
	update(){
		this.cube.rotation.x +=0.01;
		this.cube.rotation.y +=0.01;
	}
}

export default Scene1;
