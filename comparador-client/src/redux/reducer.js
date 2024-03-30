import {
  GET_PRODUCTS,
  GET_CARREFOUR,
  GET_COTO,
  GET_DIA,
  CLEAN_DETAIL,
  SORT_PRODS_CARR,
  SORT_PRODS_COTO,
  SORT_PRODS_DIA,
  ADD_PRODUCT,
  CLEAR_LIST,
} from "./actions";

const initialState = {
  products: [],
  carrefourProducts: {},
  cotoProducts: {},
  diaProducts: {},
  selectedProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_CARREFOUR:
      return { ...state, carrefourProducts: action.payload };
    case GET_COTO:
      return { ...state, cotoProducts: action.payload };
    case GET_DIA:
      return { ...state, diaProducts: action.payload };
      case CLEAR_LIST:
        return {
          ...state,
          selectedProducts: [],
        };
    case ADD_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    case SORT_PRODS_CARR:
      return {
        ...state,
        carrefourProducts: {
          ...state.carrefourProducts,
          products: action.payload,
        },
      };
    case SORT_PRODS_COTO:
      return {
        ...state,
        cotoProducts: {
          ...state.cotoProducts,
          products: action.payload,
        },
      };
    case SORT_PRODS_DIA:
      return {
        ...state,
        diaProducts: {
          ...state.diaProducts,
          products: action.payload,
        },
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        diaProducts: action.payload,
        carrefourProducts: action.payload,
        cotoProducts: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
