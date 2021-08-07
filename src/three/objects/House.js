import {  Mesh,  
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Observer, { EVENTS } from "../Observer";
export class House extends Mesh{

    constructor(){
        super();

        let loader = new GLTFLoader(); 
        loader.load('models3D/house-v1/scene.gltf',(gltf)=>{
            this.add(gltf.scene); 
            console.log(gltf.scene)
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