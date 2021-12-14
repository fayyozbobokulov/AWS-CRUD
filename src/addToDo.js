const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const addToDo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { todo } = event.body;
  const createdAt = new Date().toISOString();
  const id = v4();

  const newToDo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  await dynamodb
    .put({
      TableName: "ToDoTable",
      Item: newToDo,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newToDo),
  };
};

module.exports = {
  handler: middy(addToDo).use(httpJsonBodyParser()),
};
