import React, { useEffect, useState } from "react";
import UpdateBlogComponent from "../../component/updateBlogComponent/UpdateBlogComponent";
import { useHistory } from "react-router";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchBlog, updateBlog } from "../../redux/actions";
import AlertDialogComponent from "../../component/AlertDialogComponent";

const id = getID();

function UpdateBlogContainer({ ...props }) {
  const [title, settitle] = useState(props.blogs.blogs.title);
  const [description, setdescription] = useState(props.blogs.blogs.description);
  const [author, setauthor] = useState(props.blogs.blogs.author);
  const [picture, setpicture] = useState(null);
  const [pictureName, setpictureName] = useState("image.png");
  const [base64Image, setbase64Image] = useState(props.blogs.blogs.image);
  const [openModal, setopenModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    props.fetchBlog(id);
  }, []);

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

  function onSubmitForm() {
    if (base64Image && title && description && author) {
      props
        .updateBlog({
          title: title,
          description: description,
          author: author,
          image: base64Image,
          id: id,
        })
        .then(() => {
          history.push("/");
        });
    } else {
      setopenModal(true);
    }
  }
  // console.log(props.blogs.blogs.status);
  // console.log(props);
  return (
    <div>
      <UpdateBlogComponent
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
      ></UpdateBlogComponent>
      <Backdrop
        style={{ color: "#fff", zIndex: 100 }}
        open={props.blogs.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <AlertDialogComponent
        title="Fill out all the details"
        content="Please fill out all the details before submitting the form"
        onClick={() => {
          setopenModal(false);
        }}
        openModal={openModal}
        buttonText="Ok"
      ></AlertDialogComponent>
    </div>
  );
}

function getID() {
  const url = window.location.href;
  const elem = url.split("/");
  return elem[elem.length - 2];
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    updateBlog: ({
      title: title,
      description: description,
      author: author,
      image: base64Image,
      id: id,
    }) =>
      dispatch(
        updateBlog({
          title: title,
          description: description,
          author: author,
          image: base64Image,
          id: id,
        })
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateBlogContainer);
