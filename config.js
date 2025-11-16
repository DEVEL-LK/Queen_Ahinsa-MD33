const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DVFxVCLI#MHIEh8jQxPiuoW1KzcsyH9oZVbDHCSUbnpAMlOSkdfo",
MONGODB: process.env.MONGODB || "redis://default:FAZZpqvqGECruYnREOBIIhboDAUKnGqM@hopper.proxy.rlwy.net:25469",
};
