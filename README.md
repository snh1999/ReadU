# ReadU-final
our online school project for software lab (incomplete)

Chat module repository - https://github.com/snh1999/ReadU-chat

the API documentation can be found here- https://explore.postman.com/api/8013/readu


Project Documentation
This documentation provides an overview of the API endpoints and operations available in the project. It describes the routes, request methods, and functionalities associated with each endpoint. The project includes functionality for managing posts, users, authentication, and comments.

# Project: ReadU
The API documentation for the final project of ReadU
# 📁 Collection: posts 


## End-point: view post
This route is used to view a particular post by its _id (on database)
It is renamed as "{{URL}}/:post-slug" in the rendered website.
### Method: GET
>```
>{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: view all posts
This route is used to view all post form database. Data filter, query is also allowed here.
It is renamed as "{{URL}}/" (the homepage) in the rendered website
### Method: GET
>```
>{{URL}}api/v1/posts
>```
### Query Params

|Param|value|
|---|---|
||null|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add post
This route is used to add a new post. [Right Now that is only reserved for ADMIN]
### Method: POST
>```
>{{URL}}api/v1/posts
>```
### Body (**raw**)

```json
{
  "title": "abccc",
  "videoLength": 14,
  "videoQuality": 8,
  "category": "difficult",
  "ratingAverage": 4.7,
  "comments": 23,
  "views": 2997,
  "summary": "ssdhfhdsufh"
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: edit post
This route is used to edit a already post. [Right Now that is only reserved for ADMIN]
### Method: PATCH
>```
>{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0
>```
### Body (**raw**)

```json
{
    "title": "abc"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete post
This route is used to remove a post. [Right Now that is only reserved for ADMIN]
### Method: DELETE
>```
>{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: users (for admin) 


## End-point: view user
This route is used to show a particular user. [only reserved for ADMIN]
It is renamed as "{{URL}}/:id" in the rendered website
### Method: GET
>```
>{{URL}}api/v1/users/5f5e47057ba0ef4784bff1d8
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: view all user
This route is used to view all users. [only reserved for ADMIN]
It is renamed as "{{URL}}/users" in the rendered website
### Method: GET
>```
>{{URL}}api/v1/users
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: edit user
This route is used to edit data about a user (except password). [only reserved for ADMIN]
### Method: PATCH
>```
>{{URL}}api/v1/users/5f5e47117ba0ef4784bff1d9
>```
### Body (**raw**)

```json
{
    "name": "adminstrator"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete user (by admin)
This route is used to remove a user. [only reserved for ADMIN]
### Method: DELETE
>```
>{{URL}}api/v1/users/5f5eefbdd7e3c333c882f79d
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: authentication+ user (for users) 


## End-point: updateProfile
This route is used by user to update the profile. 
It is renamed as "{{URL}}/me" in the rendered website
### Method: PATCH
>```
>{{URL}}api/v1/users/updateMe
>```
### Body (**raw**)

```json
{
    "email": "snhdfgd@gmail.com",
    "name": "nahin",
    "role": "admin"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: signup
This route is used by user to register. 
It is renamed as "{{URL}}/" in the rendered website
### Method: POST
>```
>{{URL}}api/v1/users/signup
>```
### Body (**raw**)

```json
{
    "name": "nahin",
    "email": "snh@gmail.com",
    "password": "pass1234",
    "passwordConfirm": "pass1234",
    "handle": "snh1999"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
This route is used to login. 
It is renamed as "{{URL}}/login" in the rendered website
### Method: POST
>```
>{{URL}}api/v1/users/login
>```
### Body (**raw**)

```json
{
    "email": "snh@gmail.com",
    "password": "pass1234"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: forgot Password
This route is used by user to find the profile by email to approach password reset token.
### Method: POST
>```
>{{URL}}api/v1/users/forgotPassword
>```
### Body (**raw**)

```json
{
    "email": "snhdfgd@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: reset password
This route is used by user to send password reset token to user email. It is renamed as "{{URL}}/resetpassword" in the rendered website
### Method: PATCH
>```
>{{URL}}api/v1/users//resetPassword/asfaFADS
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update password
This route is used by user to update the password (given that it is not forgotten). It is renamed as "{{URL}}/me" in the rendered website
### Method: PATCH
>```
>{{URL}}api/v1/users/updatePassword
>```
### Body (**raw**)

```json
{
    "passwordCurrent": "pass1234" ,
    "password": "pass1234",
    "passwordConfirm": "pass1234"

}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: my profile
This route is used by user to view own profile. It is renamed as "{{URL}}/me" in the rendered website
### Method: GET
>```
>{{URL}}api/v1/users/me
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete Request by User
This route is used by user change the active status.
### Method: DELETE
>```
>{{URL}}api/v1/users/deleteMe
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: comments 


## End-point: view all Comments (for admin)
This route is used to view all comments(irrespective of post). [only reserved for ADMIN]
### Method: GET
>```
>{{URL}}api/v1/comments
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add comment (not in use)
### Method: POST
>```
>{{URL}}api/v1/comments
>```
### Body (**raw**)

```json
{
    "comment": "random text",
    "rating": 5,
    "post": "5f5e463e7ba0ef4784bff1d7",
    "user": "5f5e47057ba0ef4784bff1d8"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add comment on post
This route is used to add a comment on a post. It is renamed as "{{URL}}/" in the rendered website
### Method: POST
>```
>{{URL}}api/v1/posts/5f5f3d4eedef823a98a08f02/comments
>```
### Body (**raw**)

```json
{
    "comment": "nice",
    "rating": 5
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: all comments on a post
This route is used to view comments on a particular post. It is renamed as "{{URL}}/:post-slug" in the rendered website
### Method: GET
>```
>{{URL}}api/v1/posts/5f5e45c8719e9403e4a5b9a0/comments
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete comment
This route is used to remove a comment. Used as a button in the rendered website
### Method: DELETE
>```
>{{URL}}api/v1/comments/5f5facbc2c35da4d809c8566
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: edit Comment
This route is used to edit a particular comment [Reserved for ADMIN+ the user].
### Method: PATCH
>```
>{{URL}}api/v1/comments/5f5f750da3de8e2fdcbd70e5
>```
### Body (**raw**)

```json
{
    "rating": 4.1
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: comment by ID (for Admin)
This route is used by admin to search a particular comment
### Method: GET
>```
>{{URL}}api/v1/comments/5f5f0d5ab4e2c72540f3c8a0
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{jwt}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
