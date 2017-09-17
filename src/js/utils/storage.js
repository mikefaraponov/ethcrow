export function endSignUp(value) {
  delete localStorage.signUp;
  return value;
}

export function startSignUp(value) {
  localStorage.signUp = NaN;
  return value;
}

export function getSignUpStatus() {
  return !!localStorage.signUp;
}

export function setCurrentUser(user) {
  localStorage.currentUser = JSON.stringify(user);
  return user;
}

export function removeCurrentUser(value) {
  delete localStorage.currentUser;
  return value;
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.currentUser);
  } catch(e) {
    console.error('No currentUser');
    return null;
  }
}
