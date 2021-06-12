import vc from '@digitalbazaar/vc';

import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020'
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020'

import { documentLoader } from './documentLoader'

import JXT from "jsonxt";

export async function sign(certificate, keyPairSerialized) {
    const keyPair = await Ed25519VerificationKey2020.from(keyPairSerialized);
    const suite = new Ed25519Signature2020({key: keyPair});

    const credential = {
        ...certificate
    };

    return await vc.issue({credential, suite, documentLoader});
}

export async function verify(credential) {
    const suite = new Ed25519Signature2020();

    const controller = {
        '@context': 'https://w3id.org/security/v3-unstable',
        id: credential.issuer,
        assertionMethod: [credential.proof.verificationMethod],
        authentication: [credential.proof.verificationMethod]
    };

    const verification = await vc.verifyCredential({
        credential,
        controller, 
        suite, 
        documentLoader
    });
    return verification.verified;
}

export async function unpack(uri, fullTemplate) {
  if (fullTemplate) 
    return await JXT.unpack(uri, ()=>{return fullTemplate;});
  else
    return await JXT.unpack(uri, JXT.resolveCache);
}    

export async function pack(signedData, domain, templateName, templateVersion, fullTemplate) {
  if (fullTemplate) 
    return await JXT.pack(signedData, fullTemplate, templateName, templateVersion, domain, {
        uppercase: true,
    });
  else
    return await JXT.resolvePack(signedData, templateName, templateVersion, domain, JXT.resolveCache, {
        uppercase: true,
    });
}

export async function signAndPack(payload, keyPairSerialized, domain, templateName, templateVersion) {
  return await pack(await sign(payload, keyPairSerialized), domain, templateName, templateVersion);
}

export async function unpackAndVerify(uri, fullTemplate) {
  try {
    const json = await unpack(uri);
    if (await verify(json)) {
      delete json["proof"];
      return json;
    }
    return undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
