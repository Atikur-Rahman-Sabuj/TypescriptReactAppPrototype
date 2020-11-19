import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "sweetalert/dist/sweetalert.css";

const Layout = (props: any) => {
   return (
      <div>
         <header></header>
         <div>
            <Container>
               <div>{props.children}</div>
            </Container>
         </div>
         <footer></footer>
         <ToastContainer />
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
