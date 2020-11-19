import { apiPrefix, apiUrl } from "common/config";
import Axios, { AxiosError, AxiosResponse } from "axios";
class documentDataAccess {
   getAllDocuments = () => {
      return Axios.get(apiUrl + apiPrefix + "document")
         .then((response: AxiosResponse) => {
            return response.data.data;
         })
         .catch((error: AxiosError) => {
            throw new Error(error.message);
         });
   };
}
export default new documentDataAccess();
