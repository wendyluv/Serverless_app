const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const query = await dynamodb.delete({
    TableName: 'Users',
    Key: {
      id
    }
  }).promise()
  
  return {
    status: 200,
    body: {
      message: "User Deleted"
    },
  };

};

module.exports = {
  handler
}
