var Client = require('node-rest-client').Client;
const print = require('./log');

let count = 0;
let response = ''

function sendDataToIBLIS(urls, username, password){
    let credentials = {
        user: username,
        password: password
    }
    let client = new Client(credentials);
    if (urls.length > 0) {
        let url = urls[0];
        var request = client.get(url, function(data, res){
	        response = res;
            urls.shift();
            print.log({request, urls, response, count});
           
            if (urls.length > 0) {
                sendDataToIBLIS(urls, username, password)
            }
        })
        print.log({request, urls, response, count});
        count++;
    }
    else{
        print.log({request, urls, response, count});
    }
}

module.exports = {sendDataToIBLIS}