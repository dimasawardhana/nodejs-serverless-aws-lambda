#README
example of nodejs express rest API deployed in aws lambda.

##API
API used in this application has only 2 routes.

###API 1

API 1 produce array of object which has default number 10 
```js
{base_url}/API1
```
to determine the number of object use parameter {numOfObjectInsideArray}
```js
{base_url}/API1/{numOfObjectInsideArray}
```
### API 2
API 2 produce array of object which has default number 10 and return it as file to download
```js
{base_url}/API2
```
to determine the number of object use parameter {numOfObjectInsideArray}
```js
{base_url}/API2/{numOfObjectInsideArray}
```