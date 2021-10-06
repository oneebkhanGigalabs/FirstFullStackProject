import React from "react";
import AppbarContainer from "./AppbarContainer";
import BottomContentContainer from "./BottomContentContainer";
import FooterComponent from "../../component/dashboard/FooterComponent";
import { useEffect } from "react";
import { getUser } from "../../redux/auth/actions";
import { connect } from "react-redux";

function DashboardContainer({ ...props }) {
  useEffect(() => {
    props.getUser(localStorage["token"]);
  }, []);
  return (
    <div>
      <AppbarContainer props={props.data} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BottomContentContainer props={props.data} />
      <FooterComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => dispatch(getUser(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
