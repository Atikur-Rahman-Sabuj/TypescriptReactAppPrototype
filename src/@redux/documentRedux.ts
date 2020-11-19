import { IDocument } from "models/iDocument";
import documentDataAccess from "dataAccess/documentDataAccess";
import { Dispatch } from "redux";
const typesPrefix = "TOPIC_";
const types = {
   addToList: typesPrefix + "ADD_TO_LIST",
   failed: typesPrefix + "FAILED",
   loading: typesPrefix + "LOADING",
};

export const actions = {
   getDocuments: () => (dispatch: Dispatch) => {
      dispatch({ type: types.loading });
      documentDataAccess
         .getAllDocuments()
         .then((documents: Array<IDocument>) => {
            dispatch({
               type: types.addToList,
               payload: documents,
            });
         })
         .catch((error: Error) => {
            dispatch({
               type: types.failed,
               payload: error.message,
            });
         });
   },
};

const initialState = {
   documents: [],
   isLoading: false,
   isError: false,
   errorMessage: "",
};
interface Action {
   type: string;
   payload: any;
}
export const reducer = (state: any = initialState, action: Action) => {
   switch (action.type) {
      case types.addToList:
         return { ...state, isLoading: false, errMess: null, documents: action.payload };

      case types.loading:
         return { ...state, isLoading: true, isError: false };

      case types.failed:
         return { ...state, isLoading: false, isError: true, errorMessage: action.payload };

      default:
         return state;
   }
};
