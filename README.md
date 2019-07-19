# test-hello-api

My test REST API written in Nest.js.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

```bash
# GET method ( 'name' must be a string )
/api/get/hello/:name

# success response
{"error": false, "data": "Hello name!"}

# failed response
{"statusCode": "code", "error": "some error", "message": "some message"}
```

```bash
# POST method ( body: {"name": "must be a string"} )
/api/post/hello

# success response
{"error": false, "data": "Hello name!"}

# failed response
{"statusCode": "code", "error": "some error", "message": "some message"}
```
