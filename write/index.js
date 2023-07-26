'sue strict';
const dynamoose = require('dynamoose');
const peoplesSchema = new dynamoose.Schema({
    'id': String,
    'FirstName': String,
    'LastName': String,
});

const peoplesModel = dynamoose.model('people', peoplesSchema);

exports.handler = async (event) => {
    let { id, FirstName, LastName } = event.queryStringParameters;
    let newPerson = { id, FirstName, LastName };
    let myResponse = {
        statusCode: null,
        body: null
    }
    try {
        let newFriend = await peoplesModel.create(newPerson);
        myResponse.statusCode = 200;
        myResponse.body = JSON.stringify(newFriend)
    }
    catch (error) {
        myResponse.statusCode = 500;
        myResponse.body = JSON.stringify(error.message);
    }

    return myResponse;

}