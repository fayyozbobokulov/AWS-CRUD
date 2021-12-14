const AWS = require("aws-sdk");

const deleteToDo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  dynamodb.delete({
    TableName: "ToDOTable",
    Key: { id },
  });
};

module.exports = {
  deleteToDo,
};
