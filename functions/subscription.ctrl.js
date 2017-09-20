const {validate} = require('email-validator');

/**
 * [createSubscription description]
 * @param  {[type]} db     [description]
 * @param  {[type]} emails [description]
 * @return {[type]}        [description]
 */
function createSubscription(db, emails) {
  return {
    unsubscribe({query}, response) {
      const {token} = query;
      return db.child(token)
        .remove()
        .then(function() {
          response.send('OK');
         })
        .catch(function() {
          response.status(400).send('Something bad happened :(');
        });
    },
    subscribe({body}, response) {
      const {email} = body;
      if (validate(email)) {
        return db.orderByChild('email')
          .equalTo(email)
          .once('value', function(snapshot) {
            console.log(snapshot.val())
            if (snapshot.val()) {
              return response.status(400).json({
                text: 'You are already subscribed!',
              });
            } else {
              return db.push({email})
                .then(function(snapshot) {
                  return emails.sendWelcomeEmail(email, snapshot.key);
                })
                .then(function() {
                  response.status(201).json({
                    success: true,
                  });
                })
                .catch(function(error) {
                  console.error(error);
                  response.status(400).send();
                });
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

module.exports = createSubscription;
