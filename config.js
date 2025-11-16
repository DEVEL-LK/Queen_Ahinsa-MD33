const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DVFxVCLI#MHIEh8jQxPiuoW1KzcsyH9oZVbDHCSUbnpAMlOSkdfo",
MONGODB: process.env.MONGODB || "mongodb://mongo:LIgXtSmvDMcshanQicXNZTLQpnstpplG@switchyard.proxy.rlwy.net:12462",
};
