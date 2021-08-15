import { Mesh, MeshStandardMaterial,  BoxBufferGeometry, TextureLoader, RepeatWrapping } from 'three';

export class TrakerMouse extends Mesh {
	constructor( ) {
		super();
		this.geometry = new BoxBufferGeometry(6, 0.0001,6);
			let mapDB =   new TextureLoader();
			mapDB.load('/models3D/img/cursor.png',(textureMap)=>{
				textureMap.wrapS = RepeatWrapping;
				textureMap.wrapT = RepeatWrapping;
				textureMap.repeat.set(1,1);
					const uploadMaterial = new MeshStandardMaterial({
						color: 0xffffff,
						// lightMap:texture,
						map:textureMap,
                        transparent:true,
						lightMapIntensity:5,
                        envMapIntensity:50
					})
					this.material = uploadMaterial                    
			})        
		this.name =`traker`
		this.renderOrder = 0;
	}
}

