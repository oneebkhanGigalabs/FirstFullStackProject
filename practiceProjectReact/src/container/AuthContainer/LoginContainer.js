import React from "react";
import LoginComponent from "../../component/AuthComponents/LoginComponent";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/auth/actions";

function LoginContainer({ ...props }) {
  useEffect(() => {
    if (localStorage["token"]) {
      history.push("/");
    }
  });

  //login fields
  const history = useHistory();
  const [checked, setchecked] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [condition, setcondition] = useState(false);

  function submitFunction() {
    if (email && password) {
      setchecked(false);
      setTimeout(() => {
        setcondition(true);
      }, 500);
      props.login(email, password);
      if (localStorage["token"]) {
        setTimeout(() => {
          history.push("/");
        }, 1500);
      }
    }
  }

  function signupFunction() {
    setchecked(false);
    setTimeout(() => {
      history.push("/signup");
    }, 1000);
  }

  return (
    <div>
      <div
        style={{
          //alignContent: "center",
          justifyContent: "center",
          //justifyItems: "center",
          alignItems: "center",
          margin: "auto auto",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: condition ? "white" : "#74b9ff",
          transition: "all 1s ease",
          WebkitTransition: "all 1s ease",
          MozTransition: "all 1s ease",
        }}
      >
        <LoginComponent
          checked={checked}
          email={email}
          password={password}
          setchecked={(e) => {
            setchecked(e);
          }}
          setemail={(e) => {
            setemail(e);
          }}
          setpassword={(e) => {
            setpassword(e);
          }}
          submitFunction={() => {
            submitFunction();
          }}
          signupFunction={() => {
            signupFunction();
          }}
        ></LoginComponent>
      </div>
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
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
