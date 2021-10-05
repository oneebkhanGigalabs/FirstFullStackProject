# Blogs backend (Nestjs)

## Introduction

The following is a backend for the 'Blogs' application. The backend is written in nestjs and typescript. The main things that the backend is responsible for are as follows:

- Create, Read, Delete, Update blogs (CRUD operations)
- Uses mongodb cloud as the database
- Authorization with jwt tokens
- Protected routes (Only authorized users can access certain actions. Like a user can edit their own blog but can't edit somebodies blog)
- Nested comments (users can reply to eachothers comments and the comments are infinately nested)

## File Structure

- [auth/](.\src\auth)
  - [dto/](.\src\auth\dto)
    - [auth.dto.ts](.\src\auth\dto\auth.dto.ts)
  - [interfaces/](.\src\auth\interfaces)
    - [auth.interface.ts](.\src\auth\interfaces\auth.interface.ts)
  - [schemas/](.\src\auth\schemas)
    - [auth.schema.ts](.\src\auth\schemas\auth.schema.ts)
  - [strategy/](.\src\auth\strategy)
    - [jwt.strategy.ts](.\src\auth\strategy\jwt.strategy.ts)
  - [auth.controller.ts](.\src\auth\auth.controller.ts)
  - [auth.module.ts](.\src\auth\auth.module.ts)
  - [auth.service.ts](.\src\auth\auth.service.ts)
- [blogs/](.\src\blogs)
  - [dto/](.\src\blogs\dto)
    - [blogs.dto.ts](.\src\blogs\dto\blogs.dto.ts)
    - [comments.dto.ts](.\src\blogs\dto\comments.dto.ts)
  - [interfaces/](.\src\blogs\interfaces)
    - [blogs.interfaces.ts](.\src\blogs\interfaces\blogs.interfaces.ts)
    - [comments.interfaces.ts](.\src\blogs\interfaces\comments.interfaces.ts)
  - [schemas/](.\src\blogs\schemas)
    - [blogs.schema.ts](.\src\blogs\schemas\blogs.schema.ts)
    - [defaltImage.ts](.\src\blogs\schemas\defaltImage.ts)
  - [blogs.controller.ts](.\src\blogs\blogs.controller.ts)
  - [blogs.module.ts](.\src\blogs\blogs.module.ts)
  - [blogs.service.ts](.\src\blogs\blogs.service.ts)
- [app.controller.ts](.\src\app.controller.ts)
- [app.module.ts](.\src\app.module.ts)
- [app.service.ts](.\src\app.service.ts)
- [main.ts](.\src\main.ts)

## Links for the API end points

| Function                | API EndPoints                                                  | Request Type |
| :---------------------- | :------------------------------------------------------------- | :----------- |
| Get all blogs           | `localhost:<portNumber>/api/blogs`                             | **GET**      |
| Create blog             | `localhost:<portNumber>/api/blogs`                             | **POST**     |
| Get blog with id        | `localhost:<portNumber>/api/blogs/:id`                         | **GET**      |
| Update blog with id     | `localhost:<portNumber>/api/blogs/:id`                         | **PUT**      |
| Delete blog with id     | `localhost:<portNumber>/api/blogs/:id/:token`                  | **DELETE**   |
| -                       | -                                                              | -            |
| Favorite a blog with id | `localhost:<portNumber>/api/blogs/:id/favorite`                | **PUT**      |
| -                       | -                                                              | -            |
| Get all comments        | `localhost:<portNumber>/api/blogs/:id/comments`                | **GET**      |
| Create a comment        | `localhost:<portNumber>/api/blogs/:id/comments`                | **POST**     |
| Reply to a comment      | `localhost:<portNumber>/api/blogs/:id/comments/:blogId`        | **POST**     |
| Update a comment        | `localhost:<portNumber>/api/blogs/:id/comments/:blogId/:token` | **PUT**      |
| Delete a comment        | `localhost:<portNumber>/api/blogs/:id/comments/:blogId/:token` | **DELETE**   |
| -                       | -                                                              | -            |
| Signup                  | `localhost:<portNumber>/api/auth/singup`                       | **POST**     |
| Login                   | `localhost:<portNumber>/api/auth/login`                        | **POST**     |

> **Note**: This application is a work in progress right now. To use the application provide your own database link. Make a .env file in the base directory and supply the follwing SECRET_KEY, DB_USER, DB_PASSWORD
