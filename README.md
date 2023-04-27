# BarfaeAssignment
The assignment is to write a GET API and a POST API. Use stack of your choice. Use DB of your choice. GET api should read any data from DB, and POST api should save any data into the DB. Make sure you understand gateway, routes, controllers etc. Use language of your choice. Also, route and controller files should be present.

# Setup guide
1. clone repo
2. In the root directory run command "npm i" to install required dependencies.
3. Create .env file in root directory which contains these field : PORT and DBURL refer to sample image attached in this readme.
4. run command "node index.js" in root directory to start.

# sample .env

![alt text](https://github.com/harshgupta-1705/BarfaeAssignment/blob/main/sample_format_env.png?raw=true)

# API's URL format for Get
http://localhost:[port]/get

![alt text](https://github.com/harshgupta-1705/BarfaeAssignment/blob/main/sample_get.png?raw=true)

# API's URL format for Post
http://localhost:[port]/post
To post send name, email, phone in json format in body.

![alt text](https://github.com/harshgupta-1705/BarfaeAssignment/blob/main/sample_post.png?raw=true)

Best Test with Postman.