import { Mesh, MeshStandardMaterial,  BoxBufferGeometry, TextureLoader, RepeatWrapping } from 'three';

export class Cube extends Mesh {
	constructor(size ) {
		super();
		this.geometry = new BoxBufferGeometry(size, size, size);
			let mapDB =   new TextureLoader();
			mapDB.load('https://testimgvitro.blob.core.windows.net:443/imagenes/e1aa96be-0197-4a24-888a-949fd775818fVITROMEX_CADEREYTA_CAFE_36X36CM_BR_Albedo.jpg',(textureMap)=>{
				textureMap.wrapS = RepeatWrapping;
				textureMap.wrapT = RepeatWrapping;
				textureMap.repeat.set(0.69444,0.69444 );
					const uploadMaterial = new MeshStandardMaterial({
						color: 0x777777,
						// lightMap:texture,
						map:textureMap,
						lightMapIntensity:5
					})
					this.material = uploadMaterial
			})
		this.name =`cube-${size}`
		this.renderOrder = 0;
	}
}

