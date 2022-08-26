var URLUtils = require('./utils/build_urls');
var sendDataToIBLIS = require('./utils/send_data').sendDataToIBLIS;

module.exports = {
    buildUrl: URLUtils.buildUrl, 
    sendDataToIBLIS: sendDataToIBLIS, 
    urls: URLUtils.urls
}
