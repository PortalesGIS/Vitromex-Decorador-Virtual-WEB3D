import {  Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader,  
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class House extends Mesh{

    constructor(loaderManager){
        super();

        let loader = new GLTFLoader(loaderManager); 
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
            // muros
            this.muroComedorA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Atras_UVa_MT_Muro_Base_General_UVa_0")
            this.muroComedorB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Front_UVa_MT_Losa_Base_Int_General_UVb_0")
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
                        this.putLigthMap(child,texturesLoades)
                    }
                })
                Observer.on(EVENTS.SENDPRODUCT,(productSelected,areaSelected,typeOfAplication,nameMuroAplication)=>{
                    let mapDB =   new TextureLoader();
                    // TODO: eliminar el norma? optimizr descarga?
                    const texturesToUpdate = Promise.all([
                        loader.load(productSelected.albedo),
                        loader.load(productSelected.normal),
                    ],(resolve)=>{
                        resolve(texturesToUpdate)
                    }).then(textures=>{
                        textures[0].wrapS = RepeatWrapping;
                        textures[0].wrapT = RepeatWrapping;
                        let dimenciones = productSelected.sized.split('X')
                        const tailinW = parseInt(dimenciones[0])/100
                        const tailinH = parseInt(dimenciones[1])/100
                        textures[0].repeat.set(tailinW,tailinH);
                        console.log(`${tailinW},${tailinH}`)
                        mapDB.load(productSelected.normal,()=>{
                            const uploadMaterial = new MeshStandardMaterial({
                                color: 0x777777,
                                lightMap:(typeOfAplication===1)?texturesLoades[0]:texturesLoades[1],
                                map:textures[0],
                                normalMap:[1],
                                // normalMap:textureNormal,
                                lightMapIntensity:4
                            })
                            Observer.emit(EVENTS.ENDCHARGINPRODUCT);
                            if(typeOfAplication===0){
                                console.log("aplicado a piso")
                                this.updatePisoMaterial(uploadMaterial,areaSelected)
                            }
                            else{
                                console.log("aplicado a muro")
                                this.updateMuroMaterial(uploadMaterial,nameMuroAplication)
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

    ligthMapToUpdateMaterial(){

    }

    putLigthMap(child ,texturesLoades){
         let uva = texturesLoades[0]
        let uvb = texturesLoades[1]
        let uvc = texturesLoades[2]
        let uvd = texturesLoades[3]
        let uve = texturesLoades[4]
        let uvf = texturesLoades[5]
        // especiales
        if(child.name === "Muro_C_Int_Comedor_Front_UVa_MT_Muro_C_Int_Comedor_Front_UVa_0"){
            const materialWhitLigthmap = new MeshStandardMaterial({
                color: 0x777777,
                envMapIntensity:0,
                lightMap:uvb,                
                map:child.material.map,
                lightMapIntensity:6
            })
            child.material = materialWhitLigthmap
                return     
        }
        if(child.name === "Amb_Base_Canceleria_UVc_MT_Amb_Base_Cocina_Campana_UVd_0"){
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return      
        }
        if(child.name === "Mod_Base_Skybox_MT_Mod_Base_Skybox_0"){
             var ww = new GUI();
                var muro = ww.addFolder('pisos');
                console.log(child)
                muro.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
                muro.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();
                muro.add(child.material, 'refractionRatio', -1.0, 1.0).listen();
                muro.add(child.material, 'roughness', -1.0, 1.0).listen();                
                muro.add(child.material, 'metalness', -1.0, 1.0).listen();                
                muro.open();
            // child.material.lightMapIntensity=0
            // child.material.envMapIntensity=0
            return      
        }
        if(child.name === "Amb_Base_Comedor_Centromesa_UVf_MT_Amb_Base_Comedor_Centromesa_UVf_0"){
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
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return    
        }
        if(child.name === "Mob_Base_Cocina_Refrigerador_UVd_MT_Mob_Base_Cocina_Refrigerador_UVd_0"){
            child.material.lightMapIntensity=0
            child.material.envMapIntensity=1
            return      
        }
        if(child.name === "Mob_Base_Cocina_Fregaderoyestufa_UVd_Mob_Base_Cocina_Fregaderoyestufa_UVd_0"){
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
        // end especiales
        if(child.name.includes("UVa")){
            
                // child.material.lightMap=uva
                // child.material.lightMapIntensity=4
                // child.material.envMapIntensity=0
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
                var gui = new GUI();
                var cam = gui.addFolder('cocina');
                cam.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
                cam.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();                
                cam.open();
                child.material.lightMap=uvd
            child.material.lightMapIntensity=3.9
            child.material.envMapIntensity=0.5
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
            if(child.name==="Amb_Base_Comedor_Centromesa_UVf_MT_Amb_Base_Comedor_Centromesa_UVf_0"){
                var wer = new GUI();
                var objectsCocina = wer.addFolder('objetos');
                objectsCocina.add(child.material, 'lightMapIntensity', -2.0, 5.0).listen();
                objectsCocina.add(child.material, 'envMapIntensity', -2.0, 5.0).listen();                
                objectsCocina.add(child.material, 'roughness', 0, 2).listen();                
                objectsCocina.add(child.material, 'refractionRatio', 0, 2).listen();                
                objectsCocina.add(child.material, 'metalness', 0, 2).listen();                
                objectsCocina.open();
            }
        }        
    }

    updatePisoMaterial(materialUpdated,pisoSelected){
        switch (pisoSelected) {
            case "sala":
                this.pisoSala.material = materialUpdated
                break;
            case "fachada":
                this.pisoFachada.material = materialUpdated
                // this.pisoPasillo.material = materialUpdated
                break;
            case "comedor":
                this.pisoComedor.material = materialUpdated
                var qww = new GUI();
                var asads = qww.addFolder('select');
                asads.add(this.pisoComedor.material, 'lightMapIntensity', -2.0, 5.0).listen();
                asads.add(this.pisoComedor.material, 'envMapIntensity', -2.0, 5.0).listen();
                asads.add(this.pisoComedor.material, 'refractionRatio', -1.0, 1.0).listen();
                asads.add(this.pisoComedor.material, 'roughness', -1.0, 1.0).listen();                
                asads.add(this.pisoComedor.material, 'metalness', -1.0, 1.0).listen();                
                asads.open();
                break;
            case "cocina":
                this.pisoCosina.material = materialUpdated
                break;
            case "banio":
                this.pisoBanio.material = materialUpdated
                break;
        
            default:
                break;
        }
    }

    updateMuroMaterial(materialUpdated,nameMuro){
        switch (nameMuro) {
            case "Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0":
                this.muroComedorA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0":
                this.muroComedorB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0":
                this.muroSalaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0":
                this.muroSalaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0":
                this.muroSalaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0":
                this.muroFachadaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0":
                this.muroFachadaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0":
                this.muroFachadaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0":
                this.muroFachadaD.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0":
                this.muroFachadaE.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0":
                this.muroCocinaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0":
                this.muroCocinaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0":
                this.muroCocinaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0":
                this.muroCocinaD.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0":
                this.muroBanioA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0":
                this.muroBanioB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0":
                this.muroBanioC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0":
                this.muroBanioD.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0":
                this.muroBanioE.material = materialUpdated
                break;
            default:
                break;
        }

    }

}