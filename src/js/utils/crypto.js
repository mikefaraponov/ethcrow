const subtle = window.crypto.subtle;
const AES = 'AES-CBC';
const RSA = 'RSA-OAEP';

export function generateAesKey() {
  const options = {
      name: AES,
      length: 256,
  };
  return subtle.generateKey(options, true, [
    'encrypt',
    'decrypt',
    'wrapKey',
    'unwrapKey',
  ]);
}

export function generateRsaKey() {
  const options = {
      name: RSA,
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: {
        name: 'SHA-512',
      },
  };
  return subtle.generateKey(options, true, [
    'encrypt',
    'decrypt',
    'wrapKey',
    'unwrapKey',
  ]);
}

export function importAesKey(jwkKey) {
  const options = {
      name: AES,
  };
  return subtle.importKey('jwk', jwkKey, options, true, [
    'encrypt',
    'decrypt',
    'wrapKey',
    'unwrapKey',
  ]);
}

export function importRsaKeyPublic(jwkKey) {
  const options = {
      name: RSA,
      hash: {
        name: "SHA-512"
      },
  };
  return subtle.importKey("jwk", jwkKey, options, true, ["wrapKey", "encrypt"]);
}

export function importRsaKeyPrivate(jwkKey) {
  const options = {
      name: RSA,
      hash: {
        name: "SHA-512"
      },
  };
  return subtle.importKey("jwk", jwkKey, options, true, ["unwrapKey", "decrypt"]);
}

export function exportKey(key) {
  return subtle.exportKey("jwk", key);
}

export function wrapKey(key, publicKey) {
  const options = {
      name: RSA,
      hash: {name: "SHA-256"},
  };
  return subtle.wrapKey("raw", key, publicKey, options);
}

export function unwrapKey(wrapped, privateKey) {
  const wrap = {
      name: RSA,
      modulusLength: 2048,
      publicExponent: new Uint8Array([
        0x01,
        0x00,
        0x01,
      ]),
      hash: {name: "SHA-512"},
  };
  const unwrap = {
      name: "AES-CBC",
      length: 256
  };
  return subtle.unwrapKey("raw", wrapped, privateKey, wrap, unwrap, false, [
    "encrypt",
    "decrypt",
  ]);
}

export function encryptAes(key, iv) {
  const options = {
    name: AES,
    iv,
  };
  return subtle.encrypt(options, key, result);
}

export function decryptAes(iv, key, data) {
  const options = {
    name: AES,
    iv,
  };
  return subtle.decrypt(options, key, data);
}
