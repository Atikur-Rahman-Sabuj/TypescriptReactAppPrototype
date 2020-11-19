import { IUser } from "models/iUser";
import userDataAccess from "dataAccess/userDataAccess";
const typesPrefix = "USER_";
const types = {
   logout: typesPrefix + "LOGOUT",
   login: typesPrefix + "LOGIN",
   auth: typesPrefix + "AUTH",
   refreshUser: typesPrefix + "REFRESH_USER",
};

export const actions = {
   auth: () => {
      const user = userDataAccess.auth();
      return { type: types.auth, payload: user };
   },
   login: (user: IUser) => {
      return { type: types.login, user };
   },
   logout() {
      return { type: types.logout };
   },
   refreshUser(user: IUser) {
      return { type: types.refreshUser, user };
   },
};

const initialState = {
   user: { authorization: "loading" },
};

export const reducer = (state: any = initialState, action: any) => {
   const { type, payload } = action;
   const initialStateForLogout = {
      user: null,
      token: null,
      isLogOut: true,
   };
   switch (type) {
      case types.logout:
         return Object.assign({}, initialStateForLogout);
      case types.login:
         return { ...state, user: payload };
      case types.auth:
         return { ...state, user: payload };
      case types.refreshUser:
         return { ...state, user: payload };
      default:
         return state;
   }
};
