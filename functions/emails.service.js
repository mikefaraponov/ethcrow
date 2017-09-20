/**
 * [createEmails description]
 * @param  {[type]} mailTransport [description]
 * @return {[type]}               [description]
 */
function createEmails(mailTransport) {
  return {
    sendWelcomeEmail(email, token) {
      const opts = {
        from: 'Ethcrow <mikefaraponov@gmail.com>',
        to: email,
        subject: 'Welcome to Ethcrow!'
      };
      opts.html = `Hey member! Welcome to Ethcrow. I hope you will enjoy our service. To unsubscribe click <a href="https://us-central1-hackathon-ethcrow.cloudfunctions.net/unsubscribe?token=${token}">here</a>`;
      return mailTransport.sendMail(opts);
    }
  };
}

module.exports = createEmails;
