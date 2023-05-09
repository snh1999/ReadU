# ReadU-final
our online school project for software lab (incomplete)

Chat module repository - https://github.com/snh1999/ReadU-chat

the API documentation can be found here- https://explore.postman.com/api/8013/readu


Project Documentation
This documentation provides an overview of the API endpoints and operations available in the project. It describes the routes, request methods, and functionalities associated with each endpoint. The project includes functionality for managing posts, users, authentication, and comments.

# Table of Contents
- Posts

  - GET View Post
  - GET View All Posts
  - POST Add Post
PATCH Edit Post
DELETE Delete Post
Users (Admin Only)

GET View User
GET View All Users
PATCH Edit User
DELETE Delete User
Authentication + User

PATCH Update Profile
POST Sign Up
POST Login
POST Forgot Password
PATCH Reset Password
PATCH Update Password
GET My Profile
DELETE Delete Request by User
Comments

GET View All Comments (Admin Only)
POST Add Comment (Not in Use)
POST Add Comment on Post
GET All Comments on a Post
DELETE Delete Comment
PATCH Edit Comment
GET Comment by ID (Admin Only)
Posts <a name="posts"></a>
GET View Post <a name="get-view-post"></a>
This route is used to view a particular post by its _id in the database. It can be accessed using the following URL:

bash
Copy code
{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0
In the rendered website, the route is renamed as {{URL}}/:post-slug.

GET View All Posts <a name="get-view-all-posts"></a>
This route is used to view all posts. It can be accessed using the following URL:

bash
Copy code
{{URL}}api/v1/posts
POST Add Post <a name="post-add-post"></a>
This route is used to add a new post. It is reserved for users with the role of 'admin' or 'moderator'. The URL to add a post is:

bash
Copy code
{{URL}}api/v1/posts
PATCH Edit Post <a name="patch-edit-post"></a>
This route is used to edit an existing post. It is reserved for users with the role of 'admin' or 'moderator'. The URL to edit a post is:

bash
Copy code
{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0
DELETE Delete Post <a name="delete-delete-post"></a>
This route is used to delete a post. It is reserved for users with the role of 'admin' or 'moderator'. The URL to delete a post is:

bash
Copy code
{{URL}}api/v1/posts/5f5e45c8719e940
