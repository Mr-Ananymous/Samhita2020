const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = 'APikey'
sgMail.setApiKey(sendgridAPIKey)
const req=require('./msg91')



module.exports=sgMail
