const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  const {id}  =  event.pathParameters
  const query = await dynamodb.get({
    TableName: 'Songs',
    Key: {
      id
    }
  }).promise()
  const Song = query.Item
  
  return {
    status: 200,
    body: Song,
  };

};

module.exports = {
  handler
}
