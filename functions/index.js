const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const createEmailService = require('./services/email');
const createSubscriptions = require('./controllers/subscriptions');
const cors = require('cors')({
  origin: true
});

const config = functions.config();
const gmailEmail = encodeURIComponent(config.gmail.email);
const gmailPassword = encodeURIComponent(config.gmail.password);
const smtps = `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`;
admin.initializeApp(config.firebase);
const mailTransport = nodemailer.createTransport(smtps);
const db = admin.database().ref('/subscribers');
const emailService = createEmailService(mailTransport);
const subscription = createSubscriptions(db, emailService);

exports.subscribe = functions.https.onRequest((req, res) => {
  cors(req, res, subscription.subscribe.bind(void 0, req, res));
});
exports.unsubscribe = functions.https.onRequest((req, res) => {
  cors(req, res, subscription.unsubscribe.bind(void 0, req, res));
});
