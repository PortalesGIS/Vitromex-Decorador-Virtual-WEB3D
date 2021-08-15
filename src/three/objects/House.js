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
            // console.log(console.log( gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb')))
            this.piso = gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb_MT_Piso_C_Int_Sala_UVb_0')
            this.pisoCosina = gltf.scene.children[0].getObjectByName("Piso_C_Int_Cocina_UVb_MT_Piso_C_Int_Cocina_UVb_0")
            this.pisoComedor = gltf.scene.children[0].getObjectByName("Piso_C_Int_Comedor_UVb_MT_Piso_C_Int_Comedor_UVb_0")
                      
            // 
            let lightMap =   new TextureLoader();
            lightMap.load('models3D/house-v1/light_maps/Lightmap_b.jpg',(texture)=>{
                const lamber = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.piso.material.map,
                    // lightMapIntensity:10
                })
                this.piso.material = lamber

                const laberCocina = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.pisoCosina.material.map,
                    // lightMapIntensity:10
                })
                this.pisoCosina.material = laberCocina

                const laberComedor = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.pisoComedor.material.map,
                    // lightMapIntensity:10
                })
                this.pisoComedor.material = laberComedor

                Observer.on(EVENTS.SENDPRODUCT,(payload)=>{
                    // console.log(payload)
                    let mapDB =   new TextureLoader();
                    mapDB.load(payload.albedo,(textureMap)=>{
                        textureMap.wrapS = RepeatWrapping;
                        textureMap.wrapT = RepeatWrapping;
                        textureMap.repeat.set(0.69444 ,0.69444 );
                        mapDB.load(payload.normal,(textureNormal)=>{
                            const uploadMaterial = new MeshStandardMaterial({
                                color: 0x777777,
                                lightMap:texture,
                                map:textureMap,
                                normalMap:textureNormal,
                                lightMapIntensity:5
                            })
                            this.piso.material = uploadMaterial
                        })
                    })
                    
                })
            },undefined,( err )=> {
                console.error( err );
            })
            // 
            
            

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