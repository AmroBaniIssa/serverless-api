'sue strict';
const dynamoose = require('dynamoose');
const peoplesSchema = new dynamoose.Schema({
    'id': String,
    'FirstName': String,
    'LastName': String,
});
module.exports = dynamoose.model('people', peoplesSchema);