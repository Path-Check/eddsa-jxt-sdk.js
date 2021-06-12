const { Ed25519VerificationKey2020 } = require ('@digitalbazaar/ed25519-verification-key-2020');

async function generatePublicKeyDidDocument(keyPair) {
  return {
    "@context": keyPair["@context"],
    id: keyPair.controller,
    type: keyPair.type,
    verificationMethod: [ {  
      "@context": keyPair["@context"],
      id: keyPair.id,
      type: keyPair.type,
      controller: keyPair.controller,
      publicKeyMultibase: keyPair.publicKeyMultibase
    }],
    authentication: [ keyPair.id ],
    assertionMethod: [ keyPair.id ],
    capabilityDelegation: [ keyPair.id ],
    capabilityInvocation: [ keyPair.id ]
  };
} 

async function generateKeyPair(domainName, controllerName, keyName) {
  let controllerId = `did:web:${domainName}:${controllerName}`;
  let keyId = `${controllerId}#${keyName}`
  
  const privateKey = await Ed25519VerificationKey2020.generate({id: keyId, controller: controllerId});
  const keyPair = {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      id: privateKey.id,
      controller: privateKey.controller,
      type: privateKey.type,
      privateKeyMultibase: privateKey.privateKeyMultibase,
      publicKeyMultibase: privateKey.publicKeyMultibase
  }

  return keyPair;
}

async function generateInstructions(domainName, controllerName, keyName) {
  generateKeyPair(DOMAIN, CONTROLLER_NAME, KEY_NAME).then( keyPair => {
      generatePublicKeyDidDocument(keyPair).then( didDocument => {
        console.log("\n");
        console.log("*******************************************************************************");
        console.log("Here are your SECRET keys. Key this private and use it to sign new packages.");
        console.log("*******************************************************************************");
        console.log(keyPair);
        console.log("\n");
        console.log("*************************************************************************************************************");
        console.log(`Here are your PUBLIC DID document. Save this part as a .json and upload it to ${DOMAIN}/${KEY_NAME}/did.json`);
        console.log("*************************************************************************************************************");
        console.log(didDocument);
      });
    });
}

if (process.argv.length < 5) {
  console.log("\n3 arguments required: DOMAIN CONTROLLER_NAME KEY_NAME\nExample: node scripts/generateKeys.js PCF.PW 1A10 WEB\n")
} else {
  var [DOMAIN, CONTROLLER_NAME, KEY_NAME] = process.argv.slice(2);

  generateInstructions(DOMAIN.toUpperCase(), CONTROLLER_NAME.toUpperCase(), KEY_NAME.toUpperCase());
}



