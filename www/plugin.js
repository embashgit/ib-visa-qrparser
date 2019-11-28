
var exec = require('cordova/exec');

var PLUGIN_NAME = 'IbvisaCordovaQrparser';

// var IbvisaCordovaQrparser = {
//   echo: function(phrase, cb) {
//     exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
//   },
//   getDate: function(cb) {
//     exec(cb, null, PLUGIN_NAME, 'getDate', []);
//   }
// };

// module.exports = IbvisaCordovaQrparser;


// var exec = require('cordova/exec');

var IbvisaCordovaQrparser = {
  parseQrData: function (qrDataString,onSuccess,onFailure){
    if (typeof qrDataString === "undefined" || qrDataString === null) qrDataString = "";
    exec(onSuccess, onFailure, PLUGIN_NAME, "parseQrData", [qrDataString]);
  }
}
module.exports = IbvisaCordovaQrparser;
