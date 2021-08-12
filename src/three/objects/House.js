import {  Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader,  
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class House extends Mesh{

    constructor(){
        super();

        let loader = new GLTFLoader(); 
        loader.load('models3D/house-v1/scene.gltf',(gltf)=>{
            // this.liquid = gltf.scene.children[0].getObjectByName('Liquid_Beer_Liquid_0');
            this.add(gltf.scene); 
            console.log(console.log( gltf.scene.children[0].getObjectByName('Object049')))
            this.piso = gltf.scene.children[0].getObjectByName('Object049_mt_piso_base_0')
            
            Observer.on(EVENTS.SENDPRODUCT,(payload)=>{
                console.log(payload)
                let mapDB =   new TextureLoader();
                mapDB.load(payload.albedo,(textureMap)=>{
                    textureMap.wrapS = RepeatWrapping;
                    textureMap.wrapT = RepeatWrapping;
                    textureMap.repeat.set(0.69444 ,0.69444 );
                    mapDB.load(payload.normal,(textureNormal)=>{
                        const uploadMaterial = new MeshStandardMaterial({
                            color: 0x777777,
                            // lightMap:texture,
                            map:textureMap,
                            normalMap:textureNormal,
                            lightMapIntensity:5
                        })
                        this.piso.material = uploadMaterial
                    })
                })
                
            })

            this.scale.x=10;
			this.scale.y=10;
			this.scale.z=10;
        },
        (xhr)=>{
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );   
        },
        function ( error ) {
            console.log( error );
        }
        )
    }
    update(){
        
    }

}