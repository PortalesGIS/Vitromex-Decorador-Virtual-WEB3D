import { BoxBufferGeometry,  MathUtils, Mesh,  MeshStandardMaterial } from "three";

export class PlaneTraking extends Mesh{
    constructor(name,width,height,y,z,x){
        super();
        this.geometry = new BoxBufferGeometry(width,height,0.01);
        this.material = new MeshStandardMaterial({
         color: 0xff0000,
        //  opacity:0.0001,
         opacity:0.1,
         transparent:true,
        })

        this.name =name
        this.rotation.x = 90 *  MathUtils.DEG2RAD;
        this.renderOrder =-1;
        this.position.y=y
        this.position.z=z
        this.position.x=x
        this.renderOrder=1
        console.log(this)
    }
} 