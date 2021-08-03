import { baseUrl } from "../../../types/data";


export const getProducts = async ({commit,getters}) =>{
  console.log("llamado a productos")
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

export const filterProducts = ({commit,getters})=>{
  let temp=getters.getAllProductsComplete
  getters.getFiltersAplicates.forEach(element => {
    let finalArray = []
    temp.forEach(product =>{
    if(product[element.camp]===element.data){
      finalArray.push(product)
    }
  })
   temp = finalArray
  commit("setProductsFilter",finalArray)
});
}


export const filterProductsForString=({commit,getters},{word=""})=>{
  word= normalizeText(word)
  const result = getters.getAllProductsComplete.filter(product =>
    normalizeText(product.name).includes(word) 
    )  
  commit("setProductsFilter",result)
}

const normalizeText=(text)=>{
  return text.toUpperCase().normalize('NFD')
  .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
  .normalize();
}