const AWS = require("aws-sdk");

const fetchToDo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  let todo;

  try {
    const result = await dynamodb
      .get({ TableName: "ToDoTable", Key: { id } })
      .promise();
    todo = result.Item;
  } catch (error) {
    console.error(error);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler: fetchToDo,
};
