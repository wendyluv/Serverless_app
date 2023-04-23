const aws = require('aws-sdk');

const handler = async (event) => {
  const dynamodb =  new aws.DynamoDB.DocumentClient()
  
  const listOfSongs = await dynamodb.scan({'TableName': 'Songs'
  }).promise()
  const songs = listOfSongs.Items
  return {
    status: 200,
    body: {songs},
  };

};

module.exports = {
  handler
}
