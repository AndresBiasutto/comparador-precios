import axios from "axios";

export const GET_PRODUCTS= "GET_PRODUCTS";
export const CLEAN_DETAIL="CLEAN_DETAIL"

//const server= "https://back-end-dogs-ok.onrender.com/dogs"
const local= "http://localhost:3001/user/"

// export const getSearch = ()=> {
//     return async (dispatch)=>{
//         const apiData= (await axios.get(`${local}`)).data
//         dispatch({type: GET_PRODUCTS, payload: apiData})
//     }
// }
export const getSearch = (searchTerm) => {
    return async (dispatch) => {
  
        // Realizar la solicitud al backend con el término de búsqueda como parámetro
        const products = await axios.get(`${local}=${searchTerm}`);
  
        // Despachar la acción de éxito con los datos recibidos
        dispatch({ type: GET_PRODUCTS, payload: products.data });

      
    };
  };
export const cleanDetail=()=>{
    return {type:CLEAN_DETAIL}
}