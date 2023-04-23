const { v4 } = require('uuid')
const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {name,author,comment,raiting} = JSON.parse(event.body)
  const id = v4()

  const new_song = {
    id,
    name,
    author,
    comment,
    raiting
  }

  await dynamodb.put({
    TableName: 'Songs',
    Item: new_song,
    
  }).promise()

  return {
    status: 200,
    body: JSON.stringify(new_song),
  };

};

module.exports = {
  handler
}
