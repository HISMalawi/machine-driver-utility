var URL = require('url').URL;
const number = require('./round_number')

let urls = [];
function buildUrl(lisBaseURL, sampleID='', measureID='', result='') {
    if(sampleID && measureID){
        let newURL = new URL(lisBaseURL);
        newURL.searchParams.append('specimen_id', sampleID);
        newURL.searchParams.append('measure_id', measureID);
        newURL.searchParams.append('result', number.round(result));
        newURL.searchParams.append('dec',0);
        urls.push(newURL.href);   
    }
}
module.exports = {buildUrl, urls}