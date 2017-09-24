const {validate} = require('email-validator');

/**
 * [createSubscription description]
 * @param  {[type]} db     [description]
 * @param  {[type]} emails [description]
 * @return {[type]}        [description]
 */
function createSubscriptions(db, emails) {
  return {
    unsubscribe({query}, response) {
      const {token} = query;
      return db.child(token).remove()
        .then(() => response.send('OK'))
        .catch(() => response.status(400).send('Something bad happened :('));
    },
    subscribe({body}, response) {
      const {email} = body;
      if (validate(email)) {
        return db.orderByChild('email').equalTo(email).once('value')
          .then(function(snapshot) {
            if (snapshot.val()) {
              return response.status(400).json({
                text: 'You are already subscribed!',
              });
            } else {
              return db.push({email})
                .then((snapshot) =>
                  emails.sendWelcomeEmail(email, snapshot.key))
                .then(() => response.status(201).json({
                  success: true,
                }))
                .catch((error) => response.status(400).send());
            }
          });
      } else {
        return response.status(400).json({
          text: 'Email is not valid!',
        });
      }
    }
  };
}

module.exports = createSubscriptions;
