const AWS = require("aws-sdk");

const deleteToDo = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify("Deleted Successfully!!!"),
  };
};

module.exports = {
  handler: deleteToDo,
};
