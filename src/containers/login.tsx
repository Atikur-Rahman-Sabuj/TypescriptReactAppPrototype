import React from "react";
import { connect } from "react-redux";
import userDataAccess from "dataAccess/userDataAccess";
import { Field, reduxForm } from "redux-form";
import { InputField } from "components/form/inputRenderes";
import { required } from "services/validators";
import { Button } from "react-bootstrap";
import { actions } from "@redux/userRedux";
export const Login = (props: any) => {
   const login = (model) => {
      userDataAccess
         .login(model)
         .then((data) => {
            console.log(props);
            console.log(data);
            actions.login(data.user);
            props.history.push("/");
         })
         .catch((error: Error) => {
            alert(error.message);
         });
   };
   return (
      <div>
         <h1>Please login to continue</h1>
         <form onSubmit={props.handleSubmit((data) => login(data))}>
            <Field name="email" component={InputField} label="Email" validate={required} />
            <Field name="password" type="password" component={InputField} label="Password" validate={required} />
            <Button type="submit">Login</Button>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const LoginForm = reduxForm({
   form: "LoginForm",
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
