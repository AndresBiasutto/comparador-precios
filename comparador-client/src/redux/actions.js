import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CARREFOUR = "GET_CARREFOUR";
export const GET_COTO = "GET_COTO";
export const GET_DIA = "GET_DIA";
export const SORT_PRODS_CARR = "SORT_PRODS_CARR";
export const SORT_PRODS_COTO = "SORT_PRODS_COTO";
export const SORT_PRODS_DIA = "SORT_PRODS_DIA";
export const FAVORITES = "FAVORITES";

export const CLEAN_DETAIL = "CLEAN_DETAIL";

//const server= "https://back-end-dogs-ok.onrender.com/dogs"
const local = "http://localhost:3001/user/";

export const getSearch = (searchTerm) => {
  return async (dispatch) => {
    const products = await axios.get(`${local}${searchTerm}`);
    dispatch({ type: GET_PRODUCTS, payload: products.data });
  };
};
export const getCarrefourProds = (searchTerm) => {
  return async (dispatch) => {
    const products = await axios.get(`http://localhost:3001/search/carrefour/${searchTerm}`);
    dispatch({ type: GET_CARREFOUR, payload: products.data });
  };
};
export const getCotoProds = (searchTerm) => {
  return async (dispatch) => {
    const products = await axios.get(`http://localhost:3001/search/coto/${searchTerm}`);
    dispatch({ type: GET_COTO, payload: products.data });
  };
};
export const getDiaProds = (searchTerm) => {
  return async (dispatch) => {
    const products = await axios.get(`http://localhost:3001/search/dia/${searchTerm}`);
    dispatch({ type: GET_DIA, payload: products.data });
  };
};
export const sortCarrefourProds = (prods) => {
  return async (dispatch) => {
    dispatch({ type: SORT_PRODS_CARR, payload: prods });
  };
};
export const sortCotoProds = (prods) => {
  return async (dispatch) => {
    dispatch({ type: SORT_PRODS_COTO, payload: prods });
  };
};
export const sortDiaProds = (prods) => {
  return async (dispatch) => {
    dispatch({ type: SORT_PRODS_DIA, payload: prods });
  };
};
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL , payload: {}};
};
