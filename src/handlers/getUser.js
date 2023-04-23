const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const query = await dynamodb.get({
    TableName: 'Users',
    Key: {
      id
    }
  }).promise()
  const user = query.Item
  
  return {
    status: 200,
    body: user,
  };

};

module.exports = {
  handler
}
