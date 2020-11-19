import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
   return (
      <div>
         <h2>Welcome</h2>
      </div>
   );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Home);
