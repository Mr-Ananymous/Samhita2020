
const SendOtp = require('sendotp');
//const sendOtp = new SendOtp('sendotp', 'Hey '+p_name +',thanks for registering with Team Samhita! Stay tuned for more events and updates! Looking forward to meeting you on Jan 31 and Feb 1,    For Queries please visit samhita.org.in and refrence id is {{otp}}');


class object
{
async  otp(p_name,phonenum)
{
  let sendOtp = new SendOtp('sendotp', 'Hey '+p_name +', Thanks for registering Samhita!. Enjoy Tech,Non-Tech events(paper presentation,Hackathon by hackerearth etc...) and Workshops(ref:{{otp}})')
  sendOtp.send("91"+phonenum, "SAMITA", function (error, data) {
  console.log(data);
});
}

async samhitaticket(userid,name,phone,clg)
{
  let simple= new SendOtp('sendotp', 'Ticket  '+ clg+ '  (({{otp}} ))'+userid)
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +', Thanks for buying samhita ticket.Your Samhita id is '+userid+' (show this id at arrival).You can attend all events and placement workshop (ref:{{otp}})')
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}

async mlworkshop(userid,name,phone,clg)
{
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +',Thanks for booking ML Workshop.Your Samhita id is '+userid+' (show this at arrival).For info check your email(no mail ph: 7598130276)(ref{{otp}})')
  let simple= new SendOtp('sendotp', 'ML '+clg +' (({{otp}})) '+userid)
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}
async aiworkshop(userid,name,phone,clg)
{
  let simple= new SendOtp('sendotp', 'AI '+clg +' (({{otp}})) '+userid )
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +',Thanks for booking AI Workshop.Your Samhita id is '+userid+' (show this at arrival).For info check your email(no mail ph: 7598130276)(ref{{otp}})')
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}
async androidworkshop(userid,name,phone,clg)
{
  let simple= new SendOtp('sendotp', 'android '+clg +' (({{otp}})) '+userid)
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +',Thanks for booking Android Workshop.Your Samhita id is '+userid+' (show this at arrival).For info check your email(no mail ph: 7598130276)(ref{{otp}})')
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}
async ethicalworkshop(userid,name,phone,clg)
{
  let simple= new SendOtp('sendotp', 'ethical '+clg +' (({{otp}})) '+userid)
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +',Thanks for booking Ethical Workshop.Your Samhita id is '+userid+' (show this at arrival).For info check your email(no mail ph: 7598130276)(ref{{otp}})')
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}

async pythonworkshop(userid,name,phone,clg)
{
  let simple= new SendOtp('sendotp', 'python '+clg +' (({{otp}})) '+userid)
  let sendOtp = new SendOtp('sendotp', 'Hey '+ name +',Thanks for booking Python Workshop.Your Samhita id is '+userid+' (show this at arrival).For info check your email(no mail ph: 7598130276)(ref{{otp}})')
  await sendOtp.send("91"+phone, "SAMITA", function (error, data) {
  console.log(data);
});

}

}

module.exports=object;

