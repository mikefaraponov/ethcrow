const ref = {};
const path = require('path');

const listen = (uid) => (dispatch, getState) => {
  const state = getState();
  const uRef = ref[uid] = firebase.ref(`/handshake/${uid}`);
  const onValue = (snapshot) => {
    const {stage} = snapshot.val();
    if (stage === 'EXCHANGE_ACK' && prev[uid] === undefined) {
      return dispatch(exchangeRec(uid, received));
    } else if (stage === 'EXCHANGE_REC' && prev[uid] === 'EXCHANGE_SEND') {
      return dispatch(signalAck(uid, received));
    } else if (stage === 'SIGNAL_ACK' && prev[uid] === 'EXCHANGE_ACK') {
      return dispatch(signalRec(uid, received));
    } else if (stage === 'SIGNAL_REC' && prev[uid] === 'EXCHANGE_REC') {
      return dispatch(signalEnd(uid, received));
    }
  };
  uRef.on('value', onValue);
}

function handshake(uid) {
  return (dispatch) => {
  };
}

function signalAck() {
  return (dispatch) => {
  };
}

function signalRec() {
  return (dispatch) => {
  };
}

function signalEnd() {
  return (dispatch) => {
  };
}

function off(uid) {
  return (dispatch) => {
    ref[uid].off();
    delete ref[uid];
    dispatch(disconnected(uid));
  };
}
