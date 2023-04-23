const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const {name,username, email, password} = JSON.parse(event.body)
  const user = {
    id,
    name,
    username,
    email,
    password
  }
  await dynamodb.put({
    TableName: 'Users',
    Item: user,
    
  }).promise()

  return {
    status: 200,
    body: JSON.stringify(user),
  };

};

module.exports = {
  handler
}
