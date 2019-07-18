# my-test-api

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
# GET method
/api/get/:name

# success response
{"error": false, "data": "Hello name!"}

# failed response
{"statusCode": 404, "error": "Not Found", "message": "some message"}
```
