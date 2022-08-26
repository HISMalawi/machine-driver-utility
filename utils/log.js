UNAUTHORIZED_ACTION = 'Check if IBLIS username and password correct';
ERROR_ACTION = 'Check if IBLIS Ip Address and port are Correct';
URL_ERROR = 'Check if IBLIS URL is correct';

exports.log = function log({request=NaN, urls=[], response=NaN, count=0}) {
    if(request) {
        res = `Status Code: ${response.statusCode}  --> Message: ${response.statusMessage}`;
        request.on('error', function(err){
            console.log("=========No Results Sent to IBLIS==========");
            console.error(`ERROR: ${err.code} --> Message: ${err.message} --> ACTION: ${ERROR_ACTION}`);  
        });
        if (urls.length == 0 && response.statusCode == 401){
            console.log("=========No Results Sent to IBLIS==========");
            console.log(`${res}  --> ACTION: ${UNAUTHORIZED_ACTION}`);
        }else if (urls.length == 0 && response.statusCode == 404){
            console.log("=========No Results Sent to IBLIS==========");
            console.log(`${res}  --> ACTION: ${URL_ERROR}`);
        }else if(urls.length == 0 && response.statusCode == 200){
            console.log(`========= ${count} Results sent to IBLIS =================`);
            console.log(res);
        }else if (urls.length == 0 && !response.statusCode == 200 && !response.statusCode == 401){
            console.log("=========No Results Sent to IBLIS==========");
            console.log(res);
        }
    }else {
        console.log("=========No Results Sent to IBLIS==========");
    }
}