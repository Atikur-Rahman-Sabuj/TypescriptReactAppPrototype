import { apiPrefix, apiUrl } from "common/config";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { keys } from "common/constants";
import { IUser } from "models/iUser";
class userDataAccess {
   auth = () => {
      return Axios.get(apiUrl + apiPrefix + "user/me", {
         headers: {
            Authorization: `Token ${localStorage.getItem(keys.authorization)}`,
         },
      })
         .then((response: AxiosResponse) => {
            return { ...response.data.data, authorization: "authorized" };
         })
         .catch((error: AxiosError) => {
            console.log(error.response.data);
            return { authorization: "not_authorized" };
         });
   };

   login = (userLoginInfo: IUser) => {
      return Axios.post(apiUrl + apiPrefix + "auth/signin", userLoginInfo)
         .then((response: AxiosResponse) => {
            localStorage.setItem(keys.authorization, response.data.token);
            return response.data;
         })
         .catch((error: AxiosError) => {
            throw new Error(error.response.data.message);
         });
   };

   register = (user: IUser) => {
      Axios.post(apiUrl + apiPrefix + "auth/signup", user)
         .then((response: AxiosResponse) => {
            return response.data;
         })
         .catch((error: AxiosError) => {
            return {};
         });
   };
}
export default new userDataAccess();
