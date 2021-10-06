# Blogs front-end (Reactjs)

## Introduction

The following is the front-end for the 'Blogs' application. It is written in javascript with react and material UI as the main component library. The application is, in practice just a blog site. Basic CRUD opearations work with the backend apis for creating, reading, updating and deleting blogs. There is also authentication built-in to ensure that only the authorized user can change their blogs. The main functionality of the project is as follows:

### Blogs

- Basic CRUD opeartions
- Protected routes (Only user that created the blog can delete and edit it)
- Nested Comments
- Favorite blogs

### Auth

- User can login and signup
- Users favorite blogs are saved on the cloud and will be synced whenever the user logs in

### Misc

- Responsive UI
- Animations for a better user experience

## File Structure

- [component/](.\src\component)
  - [AuthComponents/](.\src\component\AuthComponents)
    - [LoginComponent.css](.\src\component\AuthComponents\LoginComponent.css)
    - [LoginComponent.js](.\src\component\AuthComponents\LoginComponent.js)
    - [SignupComponent.js](.\src\component\AuthComponents\SignupComponent.js)
  - [blogDetails/](.\src\component\blogDetails)
    - [BlogDetailsLoading.js](.\src\component\blogDetails\BlogDetailsLoading.js)
    - [BlogDetailsSpaceComponent.js](.\src\component\blogDetails\BlogDetailsSpaceComponent.js)
    - [BlogsBottomContentComponent.js](.\src\component\blogDetails\BlogsBottomContentComponent.js)
    - [TopPictureBarComponent.js](.\src\component\blogDetails\TopPictureBarComponent.js)
    - [TopPictureBarStyle.css](.\src\component\blogDetails\TopPictureBarStyle.css)
  - [createBlog/](.\src\component\createBlog)
    - [CreateBlogsComponent.js](.\src\component\createBlog\CreateBlogsComponent.js)
    - [TextFieldComponent.js](.\src\component\createBlog\TextFieldComponent.js)
  - [dashboard/](.\src\component\dashboard)
    - [AppbarComponent.js](.\src\component\dashboard\AppbarComponent.js)
    - [AppbarComponentStyle.css](.\src\component\dashboard\AppbarComponentStyle.css)
    - [CardComponent.js](.\src\component\dashboard\CardComponent.js)
    - [CardComponentStyle.css](.\src\component\dashboard\CardComponentStyle.css)
    - [DashboardContentComponent.js](.\src\component\dashboard\DashboardContentComponent.js)
    - [FooterComponent.js](.\src\component\dashboard\FooterComponent.js)
    - [FooterComponentStyle.css](.\src\component\dashboard\FooterComponentStyle.css)
    - [FullImageCard.js](.\src\component\dashboard\FullImageCard.js)
    - [SkeletonLoadingBottomContent.js](.\src\component\dashboard\SkeletonLoadingBottomContent.js)
  - [splash/](.\src\component\splash)
    - [SplashComponent.js](.\src\component\splash\SplashComponent.js)
    - [SplashComponentStyle.css](.\src\component\splash\SplashComponentStyle.css)
  - [updateBlogComponent/](.\src\component\updateBlogComponent)
    - [UpdateBlogComponent.js](.\src\component\updateBlogComponent\UpdateBlogComponent.js)
  - [AlertDialogComponent.js](.\src\component\AlertDialogComponent.js)
  - [ConfirmationDialog.js](.\src\component\ConfirmationDialog.js)
- [container/](.\src\container)
  - [AuthContainer/](.\src\container\AuthContainer)
    - [LoginContainer.js](.\src\container\AuthContainer\LoginContainer.js)
    - [SignUpContainer.js](.\src\container\AuthContainer\SignUpContainer.js)
  - [blogDetails/](.\src\container\blogDetails)
    - [BlogDetailsContainer.js](.\src\container\blogDetails\BlogDetailsContainer.js)
    - [BlogsBottomContentContainer.js](.\src\container\blogDetails\BlogsBottomContentContainer.js)
    - [TopPictureBarContainer.js](.\src\container\blogDetails\TopPictureBarContainer.js)
  - [createBlogs/](.\src\container\createBlogs)
    - [CreateBlogContainer.js](.\src\container\createBlogs\CreateBlogContainer.js)
  - [dashboard/](.\src\container\dashboard)
    - [AppbarContainer.js](.\src\container\dashboard\AppbarContainer.js)
    - [bottomContent.css](.\src\container\dashboard\bottomContent.css)
    - [BottomContentContainer.js](.\src\container\dashboard\BottomContentContainer.js)
    - [CardContainer.js](.\src\container\dashboard\CardContainer.js)
  - [splash/](.\src\container\splash)
    - [SplashContainer.js](.\src\container\splash\SplashContainer.js)
  - [updateBlog/](.\src\container\updateBlog)
    - [UpdateBlogContainer.js](.\src\container\updateBlog\UpdateBlogContainer.js)
- [pages/](.\src\pages)
  - [CreateBlog.js](.\src\pages\CreateBlog.js)
  - [Dashboard.js](.\src\pages\Dashboard.js)
  - [DetailedBlog.js](.\src\pages\DetailedBlog.js)
  - [Login.js](.\src\pages\Login.js)
  - [SignUp.js](.\src\pages\SignUp.js)
  - [Splash.js](.\src\pages\Splash.js)
  - [UpdateBlog.js](.\src\pages\UpdateBlog.js)
- [redux/](.\src\redux)
  - [auth/](.\src\redux\auth)
    - [actions/](.\src\redux\auth\actions)
      - [index.js](.\src\redux\auth\actions\index.js)
    - [constants/](.\src\redux\auth\constants)
      - [authConstants.js](.\src\redux\auth\constants\authConstants.js)
    - [reducers/](.\src\redux\auth\reducers)
      - [index.js](.\src\redux\auth\reducers\index.js)
  - [blogs/](.\src\redux\blogs)
    - [actions/](.\src\redux\blogs\actions)
      - [index.js](.\src\redux\blogs\actions\index.js)
    - [constants/](.\src\redux\blogs\constants)
      - [blogContstants.js](.\src\redux\blogs\constants\blogContstants.js)
    - [reducers/](.\src\redux\blogs\reducers)
      - [index.js](.\src\redux\blogs\reducers\index.js)
  - [rootReducer.js](.\src\redux\rootReducer.js)
  - [store.js](.\src\redux\store.js)
- [App.js](.\src\App.js)
- [index.css](.\src\index.css)
- [index.js](.\src\index.js)
- [pic.jpg](.\src\pic.jpg)
- [reportWebVitals.js](.\src\reportWebVitals.js)

> **Note**: This application is a work in progress right now and some functionality ma not work
