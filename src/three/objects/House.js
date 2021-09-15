import {  Mesh, MeshStandardMaterial, PMREMGenerator,UnsignedByteType, RepeatWrapping, TextureLoader,  
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
 import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
// import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { isDevice } from "../../../utils/isDevice";
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class House extends Mesh{

    constructor(loaderManager,renderer){
        super();
        this.renderer =renderer
        this.ismobileDevice= isDevice();
        let loader = new GLTFLoader(loaderManager); 

        const pmremGenerator = new PMREMGenerator( this.renderer );
		pmremGenerator.compileEquirectangularShader();
			new RGBELoader(loaderManager)
			.setDataType( UnsignedByteType )
			.load( 'models3D/enviroment/Enviroment_Interior.hdr',  ( texture ) => {
				
				this.envMap = pmremGenerator.fromEquirectangular( texture ).texture;		
				loader.load('models3D/house-v1/scene.gltf',(gltf)=>{
                    // this.liquid = gltf.scene.children[0].getObjectByName('Liquid_Beer_Liquid_0');
                    this.add(gltf.scene); 
                    // console.log(console.log( gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb')))
                    this.pisoSala = gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb_MT_Piso_C_Int_Sala_UVb_0')
                    this.pisoCosina = gltf.scene.children[0].getObjectByName("Piso_C_Int_Cocina_UVb_MT_Piso_C_Int_Cocina_UVb_0")
                    this.pisoComedor = gltf.scene.children[0].getObjectByName("Piso_C_Int_Comedor_UVb_MT_Piso_C_Int_Comedor_UVb_0")
                    this.pisoFachada =  gltf.scene.children[0].getObjectByName("Piso_C_Ext_Cochera_UVb_MT_Piso_C_Ext_Cochera_UVb_0")
                    this.pisoPasillo = gltf.scene.children[0].getObjectByName("Piso_C_Ext_Pasillo_UVb_MT_Piso_C_Ext_Pasillo_UVb_0")
                    this.pisoBanio = gltf.scene.children[0].getObjectByName("Piso_C_Int_Banio_UVb_MT_Piso_C_Int_Banio_UVb_0")
                    // muros "Muro_C_Int_Comedor_Front_UVa_MT_Muro_C_Int_Comedor_Front_UVa_0"
                    this.muroComedorA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Atras_UVa_MT_Muro_Base_General_UVa_0")
                    this.muroComedorB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Front_UVa_MT_Muro_C_Int_Comedor_Front_UVa_0")
                    this.muroSalaA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Front2_UVa_MT_Losa_Base_Int_General_UVb_0")
                    this.muroSalaB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Der_UVa_MT_Muro_C_Int_Sala_Der_UVa_0")
                    this.muroSalaC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Front_UVa_MT_Muro_C_Int_Sala_Front_UVa_0")
                    this.muroFachadaA =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Arriba_UVa_MT_Muro_C_Ext_Patio_Arriba_UVa_0")
                    this.muroFachadaB =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Front_UVa_MT_Muro_C_Ext_Patio_Front_UVa_0")
                    this.muroFachadaC =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Izq_UVa_MT_Muro_C_Ext_Patio_Izq_UVa_0")
                    this.muroFachadaD =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Atras_UVa_MT_Muro_C_Ext_Patio_Atras_UVa_0")
                    this.muroFachadaE =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Der_UVa_MT_Muro_C_Ext_Patio_Der_UVa_0")
                    this.muroCocinaA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Izq_UVa_MT_Muro_C_Int_Cocina_Izq_UVa_0")
                    this.muroCocinaB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Front_UVa_MT_Muro_C_Int_Cocina_Front_UVa_0")
                    this.muroCocinaC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Der_UVa_MT_Muro_C_Int_Cocina_Der_UVa_0")
                    this.muroCocinaD =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Pasillo_Izq_UVa_MT_Muro_C_Int_Pasillo_Izq_UVa_0")
                    this.muroBanioA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq2_UVa_MT_Muro_C_Int_Banio_Izq2_UVa_0")
                    this.muroBanioB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq1_UVa_MT_Muro_C_Int_Banio_Izq1_UVa_0")
                    this.muroBanioC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq3_UVa_MT_Muro_C_Int_Banio_Izq3_UVa_0")
                    this.muroBanioD =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Der2_UVa_MT_Muro_C_Int_Banio_Der2_UVa_0")
                    this.muroBanioE =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Der_UVa_MT_Muro_C_Int_Banio_Der_UVa_0")
        
                    // 
                    // 
                    let loader =   new TextureLoader(loaderManager);
                    const textures = Promise.all([
                    loader.load('models3D/house-v1/light_maps/UV_a.jpg'),
                    loader.load('models3D/house-v1/light_maps/UV_b.jpg'),
                    loader.load('models3D/house-v1/light_maps/UV_c.jpg'),
                    loader.load('models3D/house-v1/light_maps/UV_d.jpg'),
                    loader.load('models3D/house-v1/light_maps/UV_e.jpg'),
                    loader.load('models3D/house-v1/light_maps/UV_f.jpg'),
                ],(resolve)=>{
                        resolve(textures)
                    }).then(texturesLoades=>{
                        
                        gltf.scene.traverse((child) =>{
                            if (child.isMesh) {     
                                child.renderOrder = -5                   
                                this.putLigthMap(child,texturesLoades)
                            }
                        })
                        Observer.on(EVENTS.SENDPRODUCT,(productSelected,areaSelected,typeOfAplication,nameMuroAplication)=>{
                            
                            // TODO: eliminar el norma? optimizr descarga? version 1 optimizado
                            const textures=[]
                            loader.load(productSelected.albedo,(texture)=>{
                                textures.push(texture)
                            loader.load(productSelected.normal,(text)=>{
                               textures.push(text)
                               textures[0].wrapS = RepeatWrapping;
                               textures[0].wrapT = RepeatWrapping;
                               let stringSized = (productSelected.sized).toLowerCase() 
                               let dimenciones = stringSized.split('x')
                               const tailinW = 100/(parseInt(dimenciones[0])*parseInt(productSelected.textureWidth))
                               const tailinH = 100/(parseInt(dimenciones[1])*parseInt(productSelected.textureHeight))
                               textures[0].repeat.set(tailinW,tailinH);
                               Observer.emit(EVENTS.ENDCHARGINPRODUCT);
                               if(typeOfAplication===0){
                                    console.log("aplicado a piso")
                                    this.updatePisoMaterial(textures,areaSelected,productSelected.roughness)
                                }
                                else{
                                    console.log("aplicado a muro")
                                    this.updateMuroMaterial(textures,nameMuroAplication,productSelected.roughness)
                                }
                            })
                        })
                        })
                    })
                    // 
                    this.scale.x=10;
                    this.scale.y=10;
                    this.scale.z=10;
                    this.position.x=72;
                    this.position.z=-74;
                    this.position.y=-17;
                    this.rotation.y=3.14
                    // var wwq = new GUI();
                    // var qmuro = wwq.addFolder('casa');            
                    // qmuro.add(this.position, 'x', -80.0, 80.0).listen();
                    // qmuro.add(this.position, 'y', -80.0, 80.0).listen();
                    // qmuro.add(this.position, 'z', -80.0, 80.0).listen();               
                    // qmuro.open();
                },
                ()=>{
                    // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );   
                },
                function ( error ) {
                    console.log( error );
                }
                )	
			})
            
        
    }
    update(){
        
    }

    ligthMapToUpdateMaterial(){

    }

    putLigthMap(child ,texturesLoades){
         let uva = texturesLoades[0]
        let uvb = texturesLoades[1]
        let uvc = texturesLoades[2]
        let uvd = texturesLoades[3]
        let uve = texturesLoades[4]
        let uvf = texturesLoades[5]

        // helpers
        // if(child.name === "Amb_Base_Cocina_frascos_UVf_Amb_Base_Cocina_frascos_UVf_0"){
        //     child.material.envMap =  this.envMap
        //     var ww = new GUI();
        //     var macetas = ww.addFolder('vidrio limon');
        //     console.log(child)
        //     macetas.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     macetas.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     macetas.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     macetas.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     macetas.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     macetas.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     macetas.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     macetas.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     macetas.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     macetas.open();
        // }
        // if(child.name === "Amb_Base_Cocina_Olla_UVf_Amb_Base_Cocina_Olla_UVf_0"){
        //     var ss = new GUI();
        //     var asdadsasdasd = ss.addFolder('Olla');
        //     asdadsasdasd.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     asdadsasdasd.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     asdadsasdasd.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     asdadsasdasd.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     asdadsasdasd.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     asdadsasdasd.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     asdadsasdasd.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     asdadsasdasd.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     asdadsasdasd.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     asdadsasdasd.open();
        // }
        // if(child.name === "Mob_Base_Cocina_Lamparas_UVe_MT_Mob_Base_Cocina_Lamparas_UVe_0"){
        //     var ass = new GUI();
        //     var yuiop = ass.addFolder('lamparas');
        //     console.log(child)
        //     yuiop.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     yuiop.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     yuiop.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     yuiop.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     yuiop.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     yuiop.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     yuiop.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     yuiop.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     yuiop.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     yuiop.open();
        // }
        // if(child.name === "Amb_Base_General_Vasos_UVf_Material_#3204_Slot_#1_0"){
        //     var fffff = new GUI();
        //     var tyuiog = fffff.addFolder('vasos banio/cocina');
        //     console.log(child)
        //     tyuiog.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     tyuiog.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     tyuiog.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     tyuiog.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     tyuiog.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     tyuiog.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     tyuiog.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     tyuiog.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     tyuiog.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     tyuiog.open();
        // }
        // if(child.name === "Amb_Base_Banio_Lavabo_UVf_MT_Amb_Base_Banio_Lavabo_UVf_0"){
        //     var ghghgh = new GUI();
        //     var werfgvj = ghghgh.addFolder('lvabo');
        //     console.log(child)
        //     werfgvj.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     werfgvj.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     werfgvj.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     werfgvj.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     werfgvj.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     werfgvj.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     werfgvj.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     werfgvj.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     werfgvj.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     werfgvj.open();
        // }
        // if(child.name === "Muro_C_Int_Banio_Izq2_UVa_MT_Muro_C_Int_Banio_Izq2_UVa_0"){
        //     var dfsdfsdfsfd = new GUI();
        //     var popijk = dfsdfsdfsfd.addFolder('luz bano');
        //     console.log(child)
        //     popijk.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
        //     popijk.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
        //     popijk.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
        //     popijk.add(child.material, 'depthFunc', -2.0, 5.0).listen();
        //     popijk.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
        //     popijk.add(child.material, 'roughness', -1.0, 1.0).listen();                
        //     popijk.add(child.material, 'metalness', -1.0, 1.0).listen();                
        //     popijk.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     popijk.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
        //     popijk.open();
        // }

        // 
        // solo movil
        // if(this.ismobileDevice){
            if(child.name === "Amb_Base_vidriotransparente_UVc_MT_Amb_Base_vidriotransparente_UVc_0"){
                // child.material.envMap =  this.envMap
                child.material.opacity = 0.2
                child.material.rougness = 1
                child.material.metalness=1
                child.material.envMapIntensity=1
                child.material.side=0
                return 
            }
            if(child.name === "Amb_Base_Comedor_Centromesa_UVf_MT_Amb_Base_Comedor_Centromesa_UVf_0"){
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Amb_Base_Cocina_Olla_UVf_Amb_Base_Cocina_Olla_UVf_0"){
                child.material.envMap = this.envMap
            child.material.lightMap=uvf
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=0.7
            child.material.refractionRatio=0.98         
            child.material.roughness=0.25
            child.material.metalness=0.3
            return
            }
            if(child.name === "Amb_Base_Cocina_frascos_UVf_Amb_Base_Cocina_frascos_UVf_0"){
                child.material.envMap =  this.envMap
                child.material.metalness=-1
                child.material.rougness = 0
                child.material.refractionRatio = 1
                child.material.opacity = 0.3
                child.material.envMapIntensity=0.1
                return 
            }
            if(child.name === "Amb_Base_General_Jarrones_UVf_MT_Amb_Base_General_Jarrones_UVf_0"){                
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Mob_Base_Cocina_Refrigerador_UVd_MT_Mob_Base_Cocina_Refrigerador_UVd_0"){
                child.material.envMap =  this.envMap
                child.material.envMapIntensity=0.2
                return 
            }
            if(child.name === "Amb_Base_Canceleria_UVc_MT_Amb_Base_Cocina_Campana_UVd_0"){
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Mob_Base_Cocina_Fregaderoyestufa_UVd_Mob_Base_Cocina_Fregaderoyestufa_UVd_0"){
                child.material.envMap =  this.envMap
                child.material.lightMap=uvd
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=0.7
            child.material.refractionRatio=0.98         
            child.material.roughness=0
            child.material.metalness=0.4
                return 
            }
            if(child.name === "Mob_Base_Cocina_Microondas_UVe_MT_Mob_Base_Cocina_Microondas_UVe_0"){
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Amb_Base_Cocina_Cubiertos_UVf_MT_Amb_Base_Cocina_Cubiertos_UVf_0"){
                child.position.z+=1
                child.material.envMap =  this.envMap
                child.material.metalness=1
                return 
            }
            if(child.name === "Amb_Base_Banio_Toallas_UVf_MT_Amb_Base_Banio_Toallas_UVf_0"){
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Amb_Base_Banio_Lavabo_UVf_MT_Amb_Base_Banio_Lavabo_UVf_0"){
                child.material.envMap =  this.envMap
            child.material.lightMap=uvf
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=0.7
            child.material.refractionRatio=0.98         
            child.material.roughness=0
            child.material.metalness=1
            return  
            }
            if(child.name === "Amb_Base_vidrioopaco_UVc_MT_Amb_Base_vidrioopaco_UVc_0"){
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Amb_Base_General_Vasos_UVf_Material_#3204_Slot_#1_0"){
                child.material.roughness = 0.24
                child.material.metalness = 1
                child.material.envMap =  this.envMap
                return 
            }
            if(child.name === "Amb_Base_Banio_Jabon_UVf_Amb_Base_Banio_Jabon_UVf_0"){
                child.material.envMap =  this.envMap
                return 
            }
        //     if(child.name === "Amb_Base_General_Jarrones_UVf_MT_Amb_Base_General_Jarrones_UVf_0"){
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0x777777,
        //             lightMap:uvf,       
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_Canceleria_UVc_MT_Amb_Base_Cocina_Campana_UVd_0"){
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0x777777,
        //             lightMap:uvc,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_Cocina_Cubiertos_UVf_MT_Amb_Base_Cocina_Cubiertos_UVf_0"){
        //         child.position.z+=2
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0x777777,
        //             lightMap:uvf,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Mob_Base_Cocina_Refrigerador_UVd_MT_Mob_Base_Cocina_Refrigerador_UVd_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvd,
        //             lightMapIntensity:20,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Mob_Base_Cocina_Fregaderoyestufa_UVd_Mob_Base_Cocina_Fregaderoyestufa_UVd_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvd,
        //             lightMapIntensity:1,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Mob_Base_Cocina_Microondas_UVe_MT_Mob_Base_Cocina_Microondas_UVe_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uve,
        //             lightMapIntensity:1,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_Banio_Toallas_UVf_MT_Amb_Base_Banio_Toallas_UVf_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvf,
        //             lightMapIntensity:2,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_Banio_Lavabo_UVf_MT_Amb_Base_Banio_Lavabo_UVf_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvf,
        //             lightMapIntensity:2,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name ==="Amb_Base_vidrioopaco_UVc_MT_Amb_Base_vidrioopaco_UVc_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvc,
        //             lightMapIntensity:2,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_General_Vasos_UVf_Material_#3204_Slot_#1_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvf,
        //             lightMapIntensity:1,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }
        //     if(child.name === "Amb_Base_Banio_Jabon_UVf_Amb_Base_Banio_Jabon_UVf_0"){                
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0xffffff,
        //             lightMap:uvf,
        //             lightMapIntensity:1,      
        //             map:child.material.map,
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        //     }

            
        // }
        // 
        // especiales
        if(child.name === "Muro_C_Int_Comedor_Front_UVa_MT_Muro_C_Int_Comedor_Front_UVa_0"){
            const materialWhitLigthmap = new MeshStandardMaterial({
                color: 0x777777,
                envMapIntensity:0,
                lightMap:uvb,
                map:child.material.map,
                lightMapIntensity:7.2
            })
            child.material = materialWhitLigthmap
                return     
        }
        if(child.name === "Amb_Base_Canceleria_UVc_MT_Amb_Base_Cocina_Campana_UVd_0"){
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return      
        }
        if(child.name === "Mob_Base_Macetas_UVe_MT_Mob_Base_Macetas_UVe_0"){
            child.material.lightMap=uve
            child.material.lightMapIntensity=2.5
            child.material.envMapIntensity=0
            child.material.emissiveIntensity=0
            child.material.refractionRatio=0.98            
            child.material.roughness=0.7
            child.material.metalness=0
            // var ww = new GUI();
            // var macetas = ww.addFolder('macetas');
            // console.log(child)
            // macetas.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
            // macetas.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
            // macetas.add(child.material, 'aoMapIntensity', -2.0, 5.0).listen();
            // macetas.add(child.material, 'depthFunc', -2.0, 5.0).listen();
            // macetas.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
            // macetas.add(child.material, 'roughness', -1.0, 1.0).listen();                
            // macetas.add(child.material, 'metalness', -1.0, 1.0).listen();                
            // macetas.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
            // macetas.add(child.material, 'emissiveIntensity', -1.0, 5.0).listen();                
            // macetas.open();
            return 
        }
        if(child.name === "Amb_Base_Banio_Toallas_UVf_MT_Amb_Base_Banio_Toallas_UVf_0"){
            child.material.lightMap=uve
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return 
        }
        if(child.name === "Amb_Base_Banio_WC_UVf_MT_Amb_Base_Banio_WC_UVf_0"){
            console.log("Banio")
            console.log(child.material)
            child.material.lightMap=uvf
            child.material.lightMapIntensity=2.1
            child.material.envMapIntensity=0.3
            child.material.refractionRatio=1         
            child.material.roughness=0.2
            child.material.metalness=0.45
            return 
        }
        if(child.name === "Mob_Base_Cocina_Refrigerador_UVd_MT_Mob_Base_Cocina_Refrigerador_UVd_0"){
            child.material.lightMap=uvd
            child.material.lightMapIntensity=2.1
            child.material.envMapIntensity=0.3
            child.material.refractionRatio=1         
            child.material.roughness=0.2
            child.material.metalness=0.35
            return 
        }
        if(child.name === "Mob_Base_Cocina_Campana_UVd_MT_Amb_Base_Cocina_Campana_UVd_0"){
            child.material.lightMap=uvd
            child.material.lightMapIntensity=2
            child.material.envMapIntensity=1
            child.material.refractionRatio=0.98         
            child.material.roughness=0.49
            child.material.metalness=0
            return 
        }
        if(child.name === "Amb_Base_Cocina_Ollas2_UVf_Amb_Base_Cocina_tabla_UVf_0"){
            child.material.envMap = this.envMap
            child.material.lightMap=uvf
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=0.7
            child.material.refractionRatio=0.98         
            child.material.roughness=0.25
            child.material.metalness=0.3
            return 
        }
        if(child.name === "Mob_Base_Cocina_Microondas_UVe_MT_Mob_Base_Cocina_Microondas_UVe_0"){
            child.material.lightMap=uve
            child.material.lightMapIntensity=6
            child.material.envMapIntensity=0.6
            child.material.refractionRatio=0.84         
            child.material.roughness=0.09
            child.material.metalness=1
            return 
        }
        if(child.name === "Amb_Base_Cocina_Limas_UVf_MT_Amb_Base_Cocina_Limas_UVf_0"){
            child.material.lightMap=uvf
            child.material.lightMapIntensity=6
            child.material.envMapIntensity=0.6
            return 
        }
        if(child.name === "Amb_Base_General_Vasos_UVf_Material_#3204_Slot_#1_0"){
            child.material.lightMap=uvf
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=5
            child.material.refractionRatio=0.98         
            child.material.roughness=0.96
            child.material.metalness=0
            return 
        }
        if(child.name === "Amb_Base_vidrioopaco_UVc_MT_Amb_Base_vidrioopaco_UVc_0"){
            child.material.lightMap=uvc
            child.material.lightMapIntensity=1
            child.material.envMapIntensity=0.5
            child.material.refractionRatio=0.98         
            child.material.roughness=0.087
            child.material.metalness=0.35
            return 
        }
        if(child.name === "Amb_Base_Banio_Jabon_UVf_Amb_Base_Banio_Jabon_UVf_0"){
            child.material.lightMap=uvf
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            child.material.refractionRatio=0.98         
            child.material.roughness=0.96
            child.material.metalness=0
            return 
        }
        // 
        // 
        // 
        if(child.name === "Amb_Base_Comedor_Centromesa_UVf_MT_Amb_Base_Comedor_Centromesa_UVf_0"){
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            console.log(child)
            // child.layers.set(5)
            // this.add(child)
                return    
        }
        if(child.name === "Amb_Base_Banio_Jabon_UVf_Amb_Base_Banio_Jabon_UVf_0"){
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return      
        }
        if(child.name === "Amb_Base_General_Jarrones_UVf_MT_Amb_Base_General_Jarrones_UVf_0"){
            // const materialWhitLigthmap = new MeshStandardMaterial({
            //     color: 0x777777,
            //     envMapIntensity:1,       
            //     map:child.material.map,
            // })
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
                return     
        }
        if(child.name === "Amb_Base_Cocina_Cubiertos_UVf_MT_Amb_Base_Cocina_Cubiertos_UVf_0"){
            child.position.z+=40
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return    
        }
        if(child.name === "Piso_Base_Ext_Grava_UVb_MT_Piso_Base_Ext_Grava_UVb_0"){
            const materialWhitLigthmap = new MeshStandardMaterial({
                color: 0x777777,
                envMapIntensity:2,       
                map:child.material.map,
            })
            child.material = materialWhitLigthmap
                     
        }
        if(child.name === "Mob_Base_Sala_Sillon_UVe_MT_Mob_Base_Sala_Sillon_UVe_0"){
            const materialWhitLigthmap = new MeshStandardMaterial({
                color: 0x777777,
                envMapIntensity:0,  
                lightMap:uve,   
                lightMapIntensity:15,
                map:child.material.map,
            })
            child.material = materialWhitLigthmap
               return      
        }
        // end especiales
        if(child.name.includes("UVa")){
            if(child.name === "Muro_C_Int_Cocina_Front_UVa_MT_Muro_C_Int_Cocina_Front_UVa_0" 
            || child.name=== "Muro_C_Int_Cocina_Der_UVa_MT_Muro_C_Int_Cocina_Der_UVa_0"){
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uva,                
                    map:child.material.map,
                    lightMapIntensity:6
                })
                child.material = materialWhitLigthmap
                
                return
            }
            if(child.name === "Muro_C_Ext_Patio_Atras_UVa_MT_Muro_C_Ext_Patio_Atras_UVa_0"){
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uva,                
                    map:child.material.map,
                    lightMapIntensity:6
                })
                child.material = materialWhitLigthmap
                return
            }
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uva,                
                    map:child.material.map,
                    lightMapIntensity:10
                })
                child.material = materialWhitLigthmap
                    return 
        }
        if(child.name.includes("UVb")){
           
                child.material.lightMap=uvb
                child.material.lightMapIntensity=4
                child.material.envMapIntensity=0
                // var ww = new GUI();
                // var muro = ww.addFolder('pisos');
                // console.log(child)
                // muro.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
                // muro.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
                // muro.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
                // muro.add(child.material, 'roughness', -1.0, 1.0).listen();                
                // muro.add(child.material, 'metalness', -1.0, 1.0).listen();                
                // muro.open();
                    // const materialWhitLigthmap = new MeshStandardMaterial({
                    //     color: 0x777777,
                    //     envMapIntensity:1,
                    //     lightMap:uvb,
                    //     map:child.material.map,
                    //     lightMapIntensity:4
                    // })
                    // child.material = materialWhitLigthmap
                    
                    // return 
        }
        if(child.name.includes("UVc")){
            if(
                child.name==="Mob_Base_Cocina_Campana_UVd_MT_Amb_Base_Canceleria_UVc_0"||
                child.name==="Amb_Base_vidrioopaco_UVc_MT_Amb_Base_vidrioopaco_UVc_0"
             ){
                // child.material.lightMap=uvd
                // child.material.lightMapIntensity=4
                child.material.envMapIntensity=0.5
            }
            else{
                child.material.lightMap=uvc
                child.material.lightMapIntensity=6
                child.material.envMapIntensity=0
            }
            // console.log(child.name)
            //     const materialWhitLigthmap = new MeshStandardMaterial({
            //         color: 0x777777,
            //         envMapIntensity:1,
            //         lightMap:uvc,
            //         transparent:true,
            //         map:child.material.map,
            //         lightMapIntensity:4
            //     })
            //     child.material = materialWhitLigthmap
            //     return 
        }
        if(child.name.includes("UVd")){
            
            if(child.name==="Mob_Base_Cocina_Alacenas_UVd_MT_Mob_Base_Cocina_Alacenas_UVd_0"){
                child.material.lightMap=uvd
                child.material.lightMapIntensity=2.9
                child.material.envMapIntensity=0.01
                return 
            }
            child.material.lightMap=uvd
            child.material.lightMapIntensity=6
            child.material.envMapIntensity=0
                // const materialWhitLigthmap = new MeshStandardMaterial({
                //     color: 0x777777,
                //     envMapIntensity:1,
                //     // lightMap:uvd,
                //     map:child.material.map,
                //     // lightMapIntensity:4
                // })
                // child.material = materialWhitLigthmap
                // return 
        }
        if(child.name.includes("UVe")){
            child.material.lightMap=uve
            child.material.lightMapIntensity=6
            child.material.envMapIntensity=0
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0x777777,
        //             envMapIntensity:0,
        //             lightMap:uve,
        //             map:child.material.map,
        //             lightMapIntensity:4
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        }
        if(child.name.includes('UVf')){
            child.material.lightMap=uvf
            // console.log(uvf)            
            child.material.lightMapIntensity=6
            child.material.envMapIntensity=0
        }        
    }

    updatePisoMaterial(materialUpdated,pisoSelected,rougness){
        console.log(rougness)
        switch (pisoSelected) {
            case "sala":
                this.pisoSala.material.map = materialUpdated[0]
                this.pisoSala.material.normalMap = materialUpdated[1]
                break;
            case "fachada":
                this.pisoFachada.material.map = materialUpdated[0]
                this.pisoFachada.material.normalMap = materialUpdated[1]
                break;
            case "comedor":
                this.pisoComedor.material.map = materialUpdated[0]
                this.pisoComedor.material.normalMap = materialUpdated[1]
                break;
            case "cocina":
                this.pisoCosina.material.map = materialUpdated[0]
                this.pisoCosina.material.normalMap = materialUpdated[1]
                break;
            case "banio":
                this.pisoBanio.material.map = materialUpdated[0]
                this.pisoBanio.material.normalMap = materialUpdated[1]
                break;
        
            default:
                break;
        }
    }

    updateMuroMaterial(materialUpdated,nameMuro){
        switch (nameMuro) {
            case "Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0":
                this.muroComedorA.material.map = materialUpdated[0]
                this.muroComedorA.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0":
                this.muroComedorB.material.map = materialUpdated[0]
                this.muroComedorB.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0":
                this.muroSalaB.material.map = materialUpdated[0]
                this.muroSalaB.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0":
                this.muroSalaC.material.map = materialUpdated[0]
                this.muroSalaC.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0":
                this.muroSalaA.material.map = materialUpdated[0]
                this.muroSalaA.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0":
                this.muroFachadaA.material.map = materialUpdated[0]
                this.muroFachadaA.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0":
                this.muroFachadaB.material.map = materialUpdated[0]
                this.muroFachadaB.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0":
                this.muroFachadaC.material.map = materialUpdated[0]
                this.muroFachadaC.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0":
                this.muroFachadaD.material.map = materialUpdated[0]
                this.muroFachadaD.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0":
                this.muroFachadaE.material.map = materialUpdated[0]
                this.muroFachadaE.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0":
                this.muroCocinaA.material.map = materialUpdated[0]
                this.muroCocinaA.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0":
                this.muroCocinaB.material.map = materialUpdated[0]
                this.muroCocinaB.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0":
                this.muroCocinaC.material.map = materialUpdated[0]
                this.muroCocinaC.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0":
                this.muroCocinaD.material.map = materialUpdated[0]
                this.muroCocinaD.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0":
                this.muroBanioA.material.map = materialUpdated[0]
                this.muroBanioA.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0":
                this.muroBanioB.material.map = materialUpdated[0]
                this.muroBanioB.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0":
                this.muroBanioC.material.map = materialUpdated[0]
                this.muroBanioC.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0":
                this.muroBanioD.material.map = materialUpdated[0]
                this.muroBanioD.material.normalMap = materialUpdated[1]
                break;
            case "Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0":
                this.muroBanioE.material.map = materialUpdated[0]
                this.muroBanioE.material.normalMap = materialUpdated[1]
                break;
            default:
                break;
        }

    }

}