import { Switch, Route } from "react-router-dom";
import React from "react";
import auth from "hoc/auth";
import HomeScreen from "containers/home";
import Layout from "hoc/layout";
import Login from "containers/login";
const Router = () => {
   return (
      <Layout>
         <Switch>
            <Route path="/" exact component={auth(HomeScreen, false, true)} />
            <Route path="/login" exact component={Login} />
         </Switch>
      </Layout>
   );
};
export default Router;
