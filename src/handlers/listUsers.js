const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  
  const listOfUsers = await dynamodb.scan({'TableName': 'Users'
  }).promise()
  const users = listOfUsers.Items
  return {
    status: 200,
    body: {users},
  };

};

module.exports = {
  handler
}
