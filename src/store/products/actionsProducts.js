import { baseUrl } from "../../../types/data";


export const getProducts = async ({commit,getters}) =>{
    let platform="vitromex"
    if(getters.getPageState){
        platform = "arko"
    }
    let myHeaders = new Headers();
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    //   body:  JSON.stringify({}),
    };
    fetch(`${baseUrl}/api/product/${platform}`, requestOptions)
      .then(response => response.json())
      .then(result =>  commit("setProductsList",result.products))
      .catch(error => console.log('error', error));
     
}