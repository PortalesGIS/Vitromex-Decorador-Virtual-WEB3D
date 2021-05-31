import { Scene, Color, DirectionalLight, HemisphereLight } from 'three';
import { Cube } from '../objects/Cube';
import Observer, { EVENTS } from '../Observer';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {
		this.brick = new Cube(2, new Color('rgb(255,0,0)'));
		this.add(this.brick);
		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, .5);
		const light = new DirectionalLight(0xffffff, 1.0);
		this.add(light, ambientLight);
		Observer.emit(EVENTS.TEST,"Test del event emmiter");
	}

	update() {
		this.brick.rotation.x += 0.01;
		this.brick.rotation.y += 0.01;
	}
}

export default Scene1;
