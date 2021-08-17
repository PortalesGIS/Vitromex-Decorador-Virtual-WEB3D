import {  Mesh,
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class Hovers extends Mesh{

    constructor(){
        super();
        let loader = new GLTFLoader(); 
        loader.load('models3D/hovers/scene.gltf',(gltf)=>{
            gltf.scene.traverse(function(child) {
                if (child.isMesh) {
                  child.material.envMapIntensity=4
                  child.material.opacity=0.003,
                  child.material.transparent=true,
                  child.renderOrder =-1
                //   if(child.name.includes("Hover_Muro"))
                //   console.log(child.name)
                }
            })  
            Observer.on(EVENTS.CLEARHOVER, () => {
                gltf.scene.traverse(function(child) {
                    if (child.isMesh) {
                      child.material.opacity=0.003
                    }
                }) 
            });
            this.add(gltf.scene); 
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