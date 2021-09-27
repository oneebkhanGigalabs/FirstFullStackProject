import React, { useState } from "react";
import CreateBlogsComponent from "../../component/createBlog/CreateBlogsComponent";
import { useHistory } from "react-router";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { createBlogRequest } from "../../redux/actions";
import { connect } from "react-redux";
import { createBlog } from "../../redux/actions";

function CreateBlogContainer({ ...props }) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [author, setauthor] = useState("");
  const [picture, setpicture] = useState(null);
  const [pictureName, setpictureName] = useState("Select an image");
  const [base64Image, setbase64Image] = useState(null);
  const history = useHistory();

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
      setpicture(e.target.files[0]);
      setpictureName(e.target.files[0].name);
      console.log(e.target.files[0].name + " selected");
      getBase64(e.target.files[0]);
    }
  }

  async function postFormData() {
    props.createBlog({
      title: title,
      description: description,
      author: author,
      image: base64Image,
    });
  }

  function onSubmitForm() {
    if (base64Image && title && description && author) {
      postFormData();

      if (props.blogs.loading === false) {
        history.push("/");
      }
    } else {
      console.log("enter all the data");
    }
  }
  //console.log(props);
  return (
    <div>
      <CreateBlogsComponent
        base64Image={base64Image}
        pictureName={pictureName}
        picture={picture}
        author={author}
        description={description}
        title={title}
        getBase64={(e) => {
          getBase64(e);
        }}
        onImageSelect={(e) => {
          onImageSelect(e);
        }}
        setdescription={(e) => {
          setdescription(e);
        }}
        setpicture={(e) => {
          setpicture(e);
        }}
        setpictureName={(e) => {
          setpictureName(e);
        }}
        settitle={(e) => {
          settitle(e);
        }}
        setbase64Image={(e) => {
          setbase64Image(e);
        }}
        setauthor={(e) => {
          setauthor(e);
        }}
        onSubmitForm={() => {
          onSubmitForm();
        }}
      ></CreateBlogsComponent>
      <Backdrop
        style={{ color: "#fff", zIndex: 100 }}
        open={props.blogs.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: ({
      title: title,
      description: description,
      author: author,
      image: base64Image,
    }) =>
      dispatch(
        createBlog({
          title: title,
          description: description,
          author: author,
          image: base64Image,
        })
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBlogContainer);
