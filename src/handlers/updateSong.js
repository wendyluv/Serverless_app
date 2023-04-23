const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const {name,author,comment,raiting} = JSON.parse(event.body)
  const song = {
    id,
    name,
    author,
    comment,
    raiting
  }

  await dynamodb.put({
    TableName: 'Songs',
    Item: song,
    
  }).promise()

  return {
    status: 200,
    body: JSON.stringify(song),
  };

};

module.exports = {
  handler
}
