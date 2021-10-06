import React from "react";
import { useEffect, useState } from "react";
import SignupComponent from "../../component/AuthComponents/SignupComponent";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { signup } from "../../redux/auth/actions";

function SignUpContainer({ ...props }) {
  const history = useHistory();
  const [checkedSignup, setcheckedSignup] = useState(true);
  const [condition, setcondition] = useState(false);
  const [emailSignup, setemailSignup] = useState("");
  const [passwordSignup, setpasswordSignup] = useState("");
  const [username, setusername] = useState("");
  const [image, setimage] = useState(null);
  const [base64Image, setbase64Image] = useState(null);
  const [imageName, setimageName] = useState("Select Image");

  useEffect(() => {
    if (localStorage["token"]) {
      history.push("/");
    }
  });

  function submitFunctionSignup() {
    if (username && emailSignup && passwordSignup && base64Image) {
      props.signup(emailSignup, passwordSignup, username, base64Image);
      setcheckedSignup(false);
      setTimeout(() => {
        setcondition(true);
      }, 500);
      if (localStorage["token"]) {
        setTimeout(() => {
          history.push("/");
        }, 1500);
      }
    }
  }

  function loginFunction() {
    setcheckedSignup(false);
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  }

  function getBase64(file) {
    let document = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      document = reader.result;
      setbase64Image(document);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function onImageSelect(e) {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
      setimageName(e.target.files[0].name);
      console.log(e.target.files[0].name + " selected");
      getBase64(e.target.files[0]);
    }
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
        <SignupComponent
          checkedSignup={checkedSignup}
          emailSignup={emailSignup}
          passwordSignup={passwordSignup}
          username={username}
          image={image}
          imageName={imageName}
          base64Image={base64Image}
          setcheckedSignup={(e) => {
            setcheckedSignup(e);
          }}
          setemailSignup={(e) => {
            setemailSignup(e);
          }}
          setpasswordSignup={(e) => {
            setpasswordSignup(e);
          }}
          setusername={(e) => {
            setusername(e);
          }}
          setimage={(e) => {
            setimage(e);
          }}
          setbase64Image={(e) => {
            setbase64Image(e);
          }}
          setimageName={(e) => {
            setimageName(e);
          }}
          submitFunctionSignup={() => {
            submitFunctionSignup();
          }}
          loginFunction={() => {
            loginFunction();
          }}
          onImageSelect={(e) => {
            onImageSelect(e);
          }}
        ></SignupComponent>
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
    signup: (email, password, username, base64Image) =>
      dispatch(signup(email, password, username, base64Image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
