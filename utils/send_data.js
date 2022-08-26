var Client = require('node-rest-client').Client;
const print = require('./log');

let count = 1;
let response = ''

exports.sendDataToIBLIS = function(urls, username, password){
    let credentials = {
        user: username,
        password: password
    }
    let client = new Client(credentials);
    if (urls.length > 0) {
        let url = urls[0];
        urls.shift();
        var request = client.get(url, function(data, res){
	        response = res;
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