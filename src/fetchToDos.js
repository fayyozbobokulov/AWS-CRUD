const AWS = require("aws-sdk");

const fetchToDos = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  let todos;

  try {
    const result = await dynamodb.scan({ TableName: "ToDoTable" }).promise();
    todos = result.Items;
  } catch (error) {
    console.error(error);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler: fetchToDos,
};
