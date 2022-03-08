const SendOtp = require('sendotp');

let sendOtp = new SendOtp('sendotp', 'your login otp is {{otp}})')
  sendOtp.send("917598130276", "ARCGIS", function (error, data) {
  console.log(data);
});