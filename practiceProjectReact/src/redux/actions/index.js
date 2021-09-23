import axios from "axios";

export function GetBlogs() {
  return (dispatch) => {
    const res = axios
      .get("http://localhost:3000/api/blogs")
      .then((response) => {
        dispatch(getAllBlogs(response.data));
      });
  };
}

export function getAllBlogs(blogs) {
  return {
    type: "GET_ALL_BLOGS",
    blogs: blogs,
  };
}
