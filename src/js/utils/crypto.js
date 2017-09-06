const subtle = crypto.subtle;

export default {
	generateAesKey() {
		const options = {
		    name: 'AES-CBC',
		    length: 256,
		};
		return subtle.generateKey(options, true, [
			'encrypt',
			'decrypt',
			'wrapKey',
			'unwrapKey',
		]);
	},
	generateRsaKey() {
		const options = {
		    name: 'RSA-OAEP',
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
	},
	importAesKey(jwkKey) {
		const options = {
        name: 'AES-CBC',
    };
		return subtle.importKey('jwk', jwkKey, options, true, [
			'encrypt',
			'decrypt',
			'wrapKey',
			'unwrapKey',
		]);
	},
	importRsaKey(jwkKey) {
		const options = {
        name: "RSA-OAEP",
        hash: {
        	name: "SHA-512"
        },
    };
		return subtle.importKey("jwk", jwkKey, options, true, ["decrypt"]);
	}
	exportKey(key) {
		return subtle.exportKey("jwk", key);
	},
	wrapKey(key, publicKey) {
		const options = {
	      name: "RSA-OAEP",
	      hash: {name: "SHA-256"},
	  };
		return subtle.wrapKey("raw", key, publicKey, options);
	},
	unwrapKey(wrapped, privateKey) {
		const wrap = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
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
	},
	encryptAes(key, iv) {
		const options = {
			name: 'AES-CBC',
			iv,
		};
		return subtle.encrypt(options, key, result);
	},
	decryptAes(iv, key, data) => {
		const options = {
			name: 'AES-CBC',
			iv,
		};
		return subtle.decrypt(options, key, data);
	}
};
