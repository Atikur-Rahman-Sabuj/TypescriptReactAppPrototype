import React, { Component } from "react";
import { connect, DispatchProp } from "react-redux";
import { IUser } from "models/iUser";
import { actions } from "@redux/userRedux";
import SpinnerLocal from "components/spinner";

export default function (TargetComponent, isLoginRegister: boolean, isOpen: boolean = false) {
   interface Props extends DispatchProp {
      user: any;
   }

   class auth extends Component<Props, object> {
      constructor(props) {
         super(props);
         this.state = {
            loading: true,
         };
      }
      componentDidMount() {
         this.props.dispatch(actions.auth());
      }

      static getDerivedStateFromProps(props, state) {
         if (isOpen) {
            return {};
         }
         if (props.user.user.authorization === "not_authorized" && !isLoginRegister) {
            props.history.push("/login");
         }
         if (props.user.user.authorization === "authorized" && isLoginRegister) {
            props.history.push("/");
         }
         return {};
      }

      render() {
         if (this.props.user.user.authorization === "loading" && !isOpen) {
            return <SpinnerLocal />;
         }
         return <TargetComponent {...this.props} user={this.props.user} />;
      }
   }

   const mapStateToProps = ({ user }: { user: IUser }) => ({
      user,
   });

   return connect(mapStateToProps)(auth);
}
