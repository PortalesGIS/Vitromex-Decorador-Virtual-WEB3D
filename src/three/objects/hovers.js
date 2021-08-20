import {  Mesh, RepeatWrapping, TextureLoader,
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
            let mapDB =   new TextureLoader();
             mapDB.load('models3D/hovers/textures/Dots.png',(textureMap)=>{
                textureMap.wrapS = RepeatWrapping;
                textureMap.wrapT = RepeatWrapping;
                textureMap.repeat.set(1,1 );
                        gltf.scene.traverse(function(child) {
                            if (child.isMesh) {
                                child.material.map=textureMap
                                child.material.envMapIntensity=4,
                                child.material.opacity=0.003,
                                child.material.transparent=true,
                                child.renderOrder =-1
                //   if(child.name.includes("Hover_Muro"))
                //   console.log(child.name)
            }
        })  
    })
            Observer.on(EVENTS.CLEARHOVER, (nameSelected) => {
                gltf.scene.traverse(function(child) {
                    if (child.isMesh) {
                        if(nameSelected!==child.name){
                            child.material.opacity=0.003
                            child.material.color.setHex( 0xffffff );
                        }
                        else{
                            child.material.color.setHex( 0xffffff );
                            child.material.opacity=1
                        }
                    }
                }) 
            });
            this.add(gltf.scene); 
            this.scale.x=10;
			this.scale.y=10;
			this.scale.z=10;
            this.rotation.y=3.14
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