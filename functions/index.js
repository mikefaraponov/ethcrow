// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const config = functions.config();
// const gmailEmail = encodeURIComponent(config.gmail.email);
// const gmailPassword = encodeURIComponent(config.gmail.password);
// const smtps = `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`;
// const mailTransport = nodemailer.createTransport(smtps);

// admin.initializeApp(config.firebase);

// exports.subscribe = functions.https.onRequest(({query}, response) => {
//   const {email} = query;
//   const subscribers = admin.database().ref(`/subscribers/`);
//   subscribers.push({email});
// });

