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

export const filterSeriesForString=({commit,getters},{word=""})=>{
  word= normalizeText(word)
  const result = getters.getAllSeriesComplete.filter(product =>
    normalizeText(product.name).includes(word) 
    )  
  commit("setSeriesFilter",result)
}

const normalizeText=(text)=>{
  return text.toUpperCase().normalize('NFD')
  .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
  .normalize();
}