import { baseUrl } from "../../../types/data";


export const getSeries= async ({commit,getters}) =>{
  console.log("llamado a series")
    let platform=""
    if(getters.getPageState){
        platform = "arko"
    }
    let myHeaders = new Headers();
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    //   body:  JSON.stringify({}),
    };
    fetch(`${baseUrl}/api/series/${platform}`, requestOptions)
      .then(response => response.json())
      .then(result =>  commit("setSeriesList",result.serie))
      .catch(error => console.log('error', error));
}