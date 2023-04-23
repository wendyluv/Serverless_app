const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const query = await dynamodb.delete({
    TableName: 'Songs',
    Key: {
      id
    }
  }).promise()
  
  return {
    status: 200,
    body: {
      message: "Song Deleted"
    },
  };

};

module.exports = {
  handler
}
