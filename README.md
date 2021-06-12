# Verifiable QR SDK for BBS+ on JSON-XT Credentials

JavaScript Implementation of W3C Verifiable QR Credentials with EDDSA and minimization to a QR code with [JSON-XT](https://jsonxt.io/). 

# Install

```sh
npm install @pathcheck/eddsa-jxt-sdk --save
```

# Usage

## 1. Generating Keys

Generate private and public keys with the provided script: 

```js
npm explore @pathcheck/eddsa-jxt-sdk -- npm run-script keys <YOUR_DOMAIN> <YOUR_KEY_NAME> <YOUR_CONTROLLER_NAME>
```

Example: 
```js
npm explore @pathcheck/eddsa-jxt-sdk -- npm run-script keys PCF.PW 1A12 WEB1
```
Returns: 
```js
/*******************************************************************************
Here are your SECRET keys. Key this private and use it to sign new packages.
*******************************************************************************/
{
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1'
  ],
  id: 'did:web:PCF.PW:1A12#WEB',
  controller: 'did:web:PCF.PW:1A12',
  type: 'Ed25519VerificationKey2020',
  privateKeyMultibase: 'z4SnSYUVkioEPtzbeZ8wr8QJumzoLztf1gukRAFf7e4SrH3xWYj4mvFLQK1V6rDqHhFoyj2yA3ZSAcgZqYEmdNNKr',
  publicKeyMultibase: 'zEzZ1wbzTHS232pKov6nfz38g5tkdtZ5d9ndCoaf9yG8G'
}


/***************************************************************************************************
Here are your PUBLIC DID document. Save this part as a .json and upload it to PCF.PW/1A10/did.json
****************************************************************************************************/
{
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1'
  ],
  id: 'did:web:PCF.PW:1A12',
  type: 'Ed25519VerificationKey2020',
  verificationMethod: [
    {
      '@context': [Array],
      id: 'did:web:PCF.PW:1A12#WEB',
      type: 'Ed25519VerificationKey2020',
      controller: 'did:web:PCF.PW:1A12',
      publicKeyMultibase: 'zEzZ1wbzTHS232pKov6nfz38g5tkdtZ5d9ndCoaf9yG8G'
    }
  ],
  authentication: [ 'did:web:PCF.PW:1A12#WEB' ],
  assertionMethod: [ 'did:web:PCF.PW:1A12#WEB' ],
  capabilityDelegation: [ 'did:web:PCF.PW:1A12#WEB' ],
  capabilityInvocation: [ 'did:web:PCF.PW:1A12#WEB' ]
}
```

## 2. Uploading Public Keys

Copy the second segment (PUBLIC DID DOCUMENT) as a JSON file to your `domain/controllerName/did.json`

```json
{
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1'
  ],
  id: 'did:web:PCF.PW:1A12',
  type: 'Ed25519VerificationKey2020',
  verificationMethod: [
    {
      '@context': [Array],
      id: 'did:web:PCF.PW:1A12#WEB',
      type: 'Ed25519VerificationKey2020',
      controller: 'did:web:PCF.PW:1A12',
      publicKeyMultibase: 'zEzZ1wbzTHS232pKov6nfz38g5tkdtZ5d9ndCoaf9yG8G'
    }
  ],
  authentication: [ 'did:web:PCF.PW:1A12#WEB' ],
  assertionMethod: [ 'did:web:PCF.PW:1A12#WEB' ],
  capabilityDelegation: [ 'did:web:PCF.PW:1A12#WEB' ],
  capabilityInvocation: [ 'did:web:PCF.PW:1A12#WEB' ]
}
```

The DID:WEB Resolver will point to that address (e.g. [`http://pcf.pw/1A12/did.json`](http://pcf.pw/1A12/did.json)) to download your public keys and verify the package. 

## 3. Preparing to Sign


With the keys: 

```js
const keyPair = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1'
  ],
  id: 'did:web:PCF.PW:1A12#WEB',
  controller: 'did:web:PCF.PW:1A12',
  type: 'Ed25519VerificationKey2020',
  privateKeyMultibase: 'z4SnSYUVkioEPtzbeZ8wr8QJumzoLztf1gukRAFf7e4SrH3xWYj4mvFLQK1V6rDqHhFoyj2yA3ZSAcgZqYEmdNNKr',
  publicKeyMultibase: 'zEzZ1wbzTHS232pKov6nfz38g5tkdtZ5d9ndCoaf9yG8G'
};
```

And a JSON-LD Payload (We are using EU's Digital COVID Certificate, version 1.2.0, as an example)

```js
const TEST_PAYLOAD = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/dgc/v1",
  ],
  type: ["VerifiableCredential"],
  issuer: "did:web:PCF.PW:1A12",
  issuanceDate: "2021-05-18T16:06:06Z",
  credentialSubject: {
    "@context": ["https://w3id.org/dgc/v1"],
    type: "DGCCertificate",
    personalInformation: {
      "@context": ["https://w3id.org/dgc/v1"],
      type: "DGCSubject",
      familyName: "d'Arsøns - van Halen",
      givenName: "François-Joan",
      stdFamilyName: "DARSONS<VAN<HALEN",
      stdGivenName: "FRANCOIS<JOAN",
      birthDate: "2009-02-28",
    },
    proofOfRecovery: [
      {
        "@context": ["https://w3id.org/dgc/v1"],
        type: "DGCProofOfRecovery",
        id: "urn:uvci:01:NL:LSP/REC/1289821",
        issuerName: "Ministry of VWS",
        countryOfTest: "NL",
        infectionInformation: {
          "@context": ["https://w3id.org/dgc/v1"],
          type: "DGCInfectionInformation",
          diseaseRecoveredFrom: "840539006",
          dateFirstPositive: "2021-04-21",
          validFrom: "2021-05-01",
          validUntil: "2021-10-21",
        },
      },
    ],
    proofOfVaccination: [
      {
        "@context": ["https://w3id.org/dgc/v1"],
        type: "DGCProofOfVaccination",
        id: "urn:uvci:01:NL:PlA8UWS60Z4RZXVALl6GAZ",
        issuerName: "Ministry of VWS",
        countryOfVaccination: "NL",
        vaccinationInformation: {
          "@context": ["https://w3id.org/dgc/v1"],
          type: "DGCVaccinationInformation",
          diseaseProtectedFrom: "840539006",
          prophylaxis: "1119349007",
          dateOfVaccination: "2021-05-05",
          dose: 1,
          totalDoses: 2,
          marketingAuthHolder: "ORG-100030215",
          medicinalProductName: "EU/1/20/1528",
        },
      },
      {
        "@context": ["https://w3id.org/dgc/v1"],
        type: "DGCProofOfVaccination",
        id: "urn:uvci:01:NL:ATS342XDYS358FDFH3GTK5",
        issuerName: "Ministry of VWS",
        countryOfVaccination: "NL",
        vaccinationInformation: {
          "@context": ["https://w3id.org/dgc/v1"],
          type: "DGCVaccinationInformation",
          diseaseProtectedFrom: "840539006",
          prophylaxis: "1119349007",
          dateOfVaccination: "2021-05-25",
          dose: 2,
          totalDoses: 2,
          marketingAuthHolder: "ORG-100030215",
          medicinalProductName: "EU/1/20/1528",
        },
      },
    ],
    proofOfCovidTest: [
      {
        "@context": ["https://w3id.org/dgc/v1"],
        type: "DGCProofOfCovidTest",
        id: "urn:uvci:01:NL:GGD/81AAH16AZ",
        issuerName: "Ministry of VWS",
        countryOfTestAdminstration: "NL",
        testInformation: {
          "@context": ["https://w3id.org/dgc/v1"],
          type: "DGCTestInformation",
          diseaseTestedFrom: "840539006",
          testName: "COVID PCR",
          testManufacturer: "1232",
          testType: "LP217198-3",
          sampleCollectionDateTime: "2021-02-13T14:20:00Z",
          testResult: "260415000",
          testCenter: "GGD Fryslân, L-Heliconweg",
        },
      },
      {
        "@context": ["https://w3id.org/dgc/v1"],
        type: "DGCProofOfCovidTest",
        id: "urn:uvci:01:NL:GGD/23BBS36BC",
        issuerName: "Ministry of VWS",
        countryOfTestAdminstration: "NL",
        testInformation: {
          "@context": ["https://w3id.org/dgc/v1"],
          type: "DGCTestInformation",
          diseaseTestedFrom: "840539006",
          testName: "NAAT TEST",
          testManufacturer: "1343",
          testType: "LP6464-4",
          sampleCollectionDateTime: "2021-04-13T14:20:00Z",
          testResult: "260373001",
          testCenter: "GGD Fryslân, L-Heliconweg",
        },
      },
    ],
  },
};
```

Call the signAndPack function to create the URI for the QR Code: 

```js
const {signAndPack, unpackAndVerify} = require('@pathcheck/eddsa-jxt-sdk');

const qrUri = await signAndPack(TEST_PAYLOAD, keyPair);
```

And call the unpack and verify to convert the URI into the payload: 

```js
const jsonld = await unpackAndVerify(qrUri);
```

# Development

```sh
npm install
``` 

# Test

```sh
npm test
```
