import { BoxBufferGeometry,  MathUtils, Mesh,  MeshStandardMaterial } from "three";

export class PlaneT extends Mesh{
    constructor(){
        super();
        this.geometry = new BoxBufferGeometry(100,200,0.1);
        console.log(this)
        this.material = new MeshStandardMaterial({
          opacity:0.0001,
         transparent:true,
        })
        this.name =`plane-t`
        this.rotation.x = 90 *  MathUtils.DEG2RAD;
        this.renderOrder =-1;
        this.position.y=2
        this.position.z=-7
        this.position.x=30
        this.renderOrder=1
    }
} 