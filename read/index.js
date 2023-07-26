'use strict';
const dynamoose = require('dynamoose');
const peoplesModel = require('./peoples.schema');

exports.handler = async (event) => {
    try {
        const data = await peoplesModel.scan().exec();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'true',
                message: error.message,
            })
        }
    }
}