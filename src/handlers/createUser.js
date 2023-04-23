const { v4 } = require('uuid')
const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {name,username, email, password} = JSON.parse(event.body)
  const id = v4()

  const new_user = {
    id,
    name,
    username,
    email,
    password
  }
  await dynamodb.put({
    TableName: 'Users',
    Item: new_user,
    
  }).promise()

  return {
    status: 200,
    body: JSON.stringify(new_user),
  };

};

module.exports = {
  handler
}
