const { sign, verify, pack, unpack, signAndPack, unpackAndVerify } = require('../lib/index')
const expect = require('chai').expect

const TEST_PAYLOAD = {
  '@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/dgc/v1'],
  type: ['VerifiableCredential'],
  issuer: 'did:web:PCF.PW:1A12',
  issuanceDate: '2021-05-18T16:06:06Z',
  credentialSubject: {
    '@context': ['https://w3id.org/dgc/v1'],
    type: 'DGCCertificate',
    personalInformation: {
      '@context': ['https://w3id.org/dgc/v1'],
      type: 'DGCSubject',
      familyName: "d'Arsøns - van Halen",
      givenName: 'François-Joan',
      stdFamilyName: 'DARSONS<VAN<HALEN',
      stdGivenName: 'FRANCOIS<JOAN',
      birthDate: '2009-02-28',
    },
    proofOfRecovery: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfRecovery',
        id: 'urn:uvci:01:NL:LSP/REC/1289821',
        issuerName: 'Ministry of VWS',
        countryOfTest: 'NL',
        infectionInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCInfectionInformation',
          diseaseRecoveredFrom: '840539006',
          dateFirstPositive: '2021-04-21',
          validFrom: '2021-05-01',
          validUntil: '2021-10-21',
        },
      },
    ],
    proofOfVaccination: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfVaccination',
        id: 'urn:uvci:01:NL:PlA8UWS60Z4RZXVALl6GAZ',
        issuerName: 'Ministry of VWS',
        countryOfVaccination: 'NL',
        vaccinationInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCVaccinationInformation',
          diseaseProtectedFrom: '840539006',
          prophylaxis: '1119349007',
          dateOfVaccination: '2021-05-05',
          dose: 1,
          totalDoses: 2,
          marketingAuthHolder: 'ORG-100030215',
          medicinalProductName: 'EU/1/20/1528',
        },
      },
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfVaccination',
        id: 'urn:uvci:01:NL:ATS342XDYS358FDFH3GTK5',
        issuerName: 'Ministry of VWS',
        countryOfVaccination: 'NL',
        vaccinationInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCVaccinationInformation',
          diseaseProtectedFrom: '840539006',
          prophylaxis: '1119349007',
          dateOfVaccination: '2021-05-25',
          dose: 2,
          totalDoses: 2,
          marketingAuthHolder: 'ORG-100030215',
          medicinalProductName: 'EU/1/20/1528',
        },
      },
    ],
    proofOfCovidTest: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfCovidTest',
        id: 'urn:uvci:01:NL:GGD/81AAH16AZ',
        issuerName: 'Ministry of VWS',
        countryOfTestAdminstration: 'NL',
        testInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCTestInformation',
          diseaseTestedFrom: '840539006',
          testName: 'COVID PCR',
          testManufacturer: '1232',
          testType: 'LP217198-3',
          sampleCollectionDateTime: '2021-02-13T14:20:00Z',
          testResult: '260415000',
          testCenter: 'GGD Fryslân, L-Heliconweg',
        },
      },
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfCovidTest',
        id: 'urn:uvci:01:NL:GGD/23BBS36BC',
        issuerName: 'Ministry of VWS',
        countryOfTestAdminstration: 'NL',
        testInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCTestInformation',
          diseaseTestedFrom: '840539006',
          testName: 'NAAT TEST',
          testManufacturer: '1343',
          testType: 'LP6464-4',
          sampleCollectionDateTime: '2021-04-13T14:20:00Z',
          testResult: '260373001',
          testCenter: 'GGD Fryslân, L-Heliconweg',
        },
      },
    ],
  },
}

const SIGNED_TEST_PAYLOAD = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/dgc/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1',
  ],
  type: ['VerifiableCredential'],
  issuer: 'did:web:PCF.PW:1A12',
  issuanceDate: '2021-05-18T16:06:06Z',
  credentialSubject: {
    '@context': ['https://w3id.org/dgc/v1'],
    type: 'DGCCertificate',
    personalInformation: {
      '@context': ['https://w3id.org/dgc/v1'],
      type: 'DGCSubject',
      familyName: "d'Arsøns - van Halen",
      givenName: 'François-Joan',
      stdFamilyName: 'DARSONS<VAN<HALEN',
      stdGivenName: 'FRANCOIS<JOAN',
      birthDate: '2009-02-28',
    },
    proofOfRecovery: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfRecovery',
        id: 'urn:uvci:01:NL:LSP/REC/1289821',
        issuerName: 'Ministry of VWS',
        countryOfTest: 'NL',
        infectionInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCInfectionInformation',
          diseaseRecoveredFrom: '840539006',
          dateFirstPositive: '2021-04-21',
          validFrom: '2021-05-01',
          validUntil: '2021-10-21',
        },
      },
    ],
    proofOfVaccination: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfVaccination',
        id: 'urn:uvci:01:NL:PlA8UWS60Z4RZXVALl6GAZ',
        issuerName: 'Ministry of VWS',
        countryOfVaccination: 'NL',
        vaccinationInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCVaccinationInformation',
          diseaseProtectedFrom: '840539006',
          prophylaxis: '1119349007',
          dateOfVaccination: '2021-05-05',
          dose: 1,
          totalDoses: 2,
          marketingAuthHolder: 'ORG-100030215',
          medicinalProductName: 'EU/1/20/1528',
        },
      },
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfVaccination',
        id: 'urn:uvci:01:NL:ATS342XDYS358FDFH3GTK5',
        issuerName: 'Ministry of VWS',
        countryOfVaccination: 'NL',
        vaccinationInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCVaccinationInformation',
          diseaseProtectedFrom: '840539006',
          prophylaxis: '1119349007',
          dateOfVaccination: '2021-05-25',
          dose: 2,
          totalDoses: 2,
          marketingAuthHolder: 'ORG-100030215',
          medicinalProductName: 'EU/1/20/1528',
        },
      },
    ],
    proofOfCovidTest: [
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfCovidTest',
        id: 'urn:uvci:01:NL:GGD/81AAH16AZ',
        issuerName: 'Ministry of VWS',
        countryOfTestAdminstration: 'NL',
        testInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCTestInformation',
          diseaseTestedFrom: '840539006',
          testName: 'COVID PCR',
          testManufacturer: '1232',
          testType: 'LP217198-3',
          sampleCollectionDateTime: '2021-02-13T14:20:00Z',
          testResult: '260415000',
          testCenter: 'GGD Fryslân, L-Heliconweg',
        },
      },
      {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCProofOfCovidTest',
        id: 'urn:uvci:01:NL:GGD/23BBS36BC',
        issuerName: 'Ministry of VWS',
        countryOfTestAdminstration: 'NL',
        testInformation: {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCTestInformation',
          diseaseTestedFrom: '840539006',
          testName: 'NAAT TEST',
          testManufacturer: '1343',
          testType: 'LP6464-4',
          sampleCollectionDateTime: '2021-04-13T14:20:00Z',
          testResult: '260373001',
          testCenter: 'GGD Fryslân, L-Heliconweg',
        },
      },
    ],
  },
  proof: {
    type: 'Ed25519Signature2020',
    created: '2021-06-12T14:36:49Z',
    verificationMethod: 'did:web:PCF.PW:1A12#WEB',
    proofPurpose: 'assertionMethod',
    proofValue: 'z44RDDFBvPHfSLQQC13cggevnts7DFQRUXQg9YfYrNx5m4PAoqR3qFydGwtUsEvQL4WwjRX2Lp2m87H6NKRuaHEKC',
  },
}

const TEMPLATE = {
  "dgc:2": {
    "columns": [
      {"path": "credentialSubject.personalInformation.familyName", "encoder": "string"},
      {"path": "credentialSubject.personalInformation.givenName", "encoder": "string"},
      {"path": "credentialSubject.personalInformation.stdFamilyName", "encoder": "string"},
      {"path": "credentialSubject.personalInformation.stdGivenName", "encoder": "string"},
      {"path": "credentialSubject.personalInformation.birthDate", "encoder": "isodate-1900-base32"},
      {"path": "credentialSubject.personalInformation.gender", "encoder": "string"},

      {"path": "credentialSubject.proofOfVaccination", "encoder": "array", "encoder_param": "dgc.vaxComponent:1" },
      {"path": "credentialSubject.proofOfCovidTest", "encoder": "array", "encoder_param": "dgc.testComponent:1" },
      {"path": "credentialSubject.proofOfRecovery", "encoder": "array", "encoder_param": "dgc.recvComponent:1" },
      
      {"path": "issuanceDate", "encoder": "isodatetime-epoch-base32"},
      {"path": "expirationDate", "encoder": "isodatetime-epoch-base32"},
      {"path": "issuer", "encoder": "string", "prefix": ["did:web:PCF.PW:"]},
      {"path": "id", "encoder": "string"},
      {"path": "proof.created", "encoder": "isodatetime-epoch-base32"},
      {"path": "proof.verificationMethod", "encoder": "string", "prefix": ["did:web:PCF.PW:"]},
      {"path": "proof.proofValue", "encoder": "multibase-base36"}
    ],
    "template": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/dgc/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      "type": [
        "VerifiableCredential"
      ],
      "credentialSubject": {
        "@context": [
          "https://w3id.org/dgc/v1"
        ],
        "type": "DGCCertificate",
        "personalInformation": {
          "@context": [
              "https://w3id.org/dgc/v1"
          ],
          "type": "DGCSubject"
        }
      },
      "proof": {
        "type": "Ed25519Signature2020",
        "proofPurpose": "assertionMethod"
      }
    }
  },"dgc.testComponent:1": {
    "columns": [
      {"path": "id", "encoder": "string", "prefix": ["urn:uvci:"]},
      {"path": "issuerName", "encoder": "string"},
      {"path": "countryOfTestAdminstration", "encoder": "string"},
      {"path": "testInformation.testType", "encoder": "string", "compact":["LP6464-4", "LP217198-3"]},
      {"path": "testInformation.testResult", "encoder": "string", "compact": ["260415000", "260373001"]},
      {"path": "testInformation.testCenter", "encoder": "string"},
      {"path": "testInformation.diseaseTestedFrom", "encoder": "string", "compact": ["840539006"] },
      {"path": "testInformation.testName", "encoder": "string"},
      {"path": "testInformation.testManufacturer", "encoder": "string"},
      {"path": "testInformation.sampleCollectionDateTime", "encoder": "isodatetime-epoch-base32"}
    ],
    "template": {
      "@context": [
        "https://w3id.org/dgc/v1"
      ],
      "type": "DGCProofOfCovidTest",
      "testInformation": {
        "@context": [
            "https://w3id.org/dgc/v1"
        ],          
        "type": "DGCTestInformation"
      }
    }
  },
  "dgc.vaxComponent:1": {
    "columns": [
      {"path": "id", "encoder": "string", "prefix": ["urn:uvci:"]},
      {"path": "issuerName", "encoder": "string"},
      {"path": "countryOfVaccination", "encoder": "string"},
      {"path": "vaccinationInformation.diseaseProtectedFrom", "encoder": "string", "compact": ["840539006"] },
      {"path": "vaccinationInformation.prophylaxis", "encoder": "string", "compact": ["1119305005", "1119349007", "J07BX03"] },
      {"path": "vaccinationInformation.dateOfVaccination", "encoder": "isodate-1900-base32"},
      {"path": "vaccinationInformation.dose", "encoder": "integer-base32"},
      {"path": "vaccinationInformation.totalDoses", "encoder": "integer-base32"},
      {"path": "vaccinationInformation.marketingAuthHolder", "encoder": "string", "compact":[        
          "ORG-100001699",
          "ORG-100030215",
          "ORG-100001417",
          "ORG-100031184",
          "ORG-100006270",
          "ORG-100013793",
          "ORG-100020693",
          "ORG-100010771",
          "ORG-100024420",
          "ORG-100032020",
          "Gamaleya-Research-Institute",
          "Vector-Institute",
          "Sinovac-Biotech",
          "Bharat-Biotech"
        ]},
      {"path": "vaccinationInformation.medicinalProductName", "encoder": "string", "compact":[
          "EU/1/20/1528",
          "EU/1/20/1507",
          "EU/1/21/1529",
          "EU/1/20/1525",
          "CVnCoV",
          "NVX-CoV2373",
          "Sputnik-V",
          "Convidecia",
          "EpiVacCorona",
          "BBIBP-CorV",
          "Inactivated-SARS-CoV-2-Vero-Cell",
          "CoronaVac",
          "Covaxin"
        ]}
    ],
    "template": {
      "@context": [
        "https://w3id.org/dgc/v1"
      ],
      "type": "DGCProofOfVaccination",
      "vaccinationInformation": {
        "@context": [
            "https://w3id.org/dgc/v1"
        ],          
        "type": "DGCVaccinationInformation"
      }
    }
  }, 
  "dgc.recvComponent:1": {
    "columns": [
      {"path": "id", "encoder": "string", "prefix": ["urn:uvci:"]},
      {"path": "issuerName", "encoder": "string"},
      {"path": "countryOfTest", "encoder": "string"},
      {"path": "infectionInformation.diseaseRecoveredFrom", "encoder": "string", "compact": ["840539006"] },
      {"path": "infectionInformation.dateFirstPositive", "encoder": "isodate-1900-base32"},
      {"path": "infectionInformation.validFrom", "encoder": "isodate-1900-base32"},
      {"path": "infectionInformation.validUntil", "encoder": "isodate-1900-base32"}
    ],
    "template": {
      "@context": [
        "https://w3id.org/dgc/v1"
      ],
      "type": "DGCProofOfRecovery",
      "infectionInformation": {
        "@context": [
            "https://w3id.org/dgc/v1"
        ],          
        "type": "DGCInfectionInformation"
      }
    }
  }
};

const mockKeyPair = {
  id: 'did:web:PCF.PW:1A12#WEB',
  type: 'Ed25519VerificationKey2020',
  controller: 'did:web:PCF.PW:1A12',
  publicKeyMultibase: 'zGhTGvJH58518mWd5PAWnAVLx3dArnmQNmPqhhqmhuEsz',
  privateKeyMultibase: 'z5Q2WLLaD7aJ44s6Aw6qXf1vNor9quCe1ZLhHqc63yhfFF63tbuTgPHgCzXKUbkHAGm8oE9jiQpCPepD88Jgyy7FW',
}

describe('Crypto', function () {
  it('should sign the package', async function () {
    const signed = await sign(TEST_PAYLOAD, mockKeyPair)
    //console.log(JSON.stringify(signed));
    expect(signed).to.not.be.null
    expect(signed.proof).to.not.be.null
    expect(signed.issuer).to.not.be.null
    expect(signed.issuanceDate).to.not.be.null
  })

  it('should verify the package', async function () {
    const result = await verify(SIGNED_TEST_PAYLOAD)
    expect(result).to.be.true
  })

  it('should sign and verify the package', async function () {
    const signed = await sign(TEST_PAYLOAD, mockKeyPair)
    const result = await verify(signed)
    expect(result).to.be.true
  })
})

describe('Data Minimization', function () {
  it('should pack And unpack', async function () {
    const packed = await pack(SIGNED_TEST_PAYLOAD, 'pcf.pw', 'dgc', '2')
    const unpacked = await unpack(packed)
    expect(unpacked).to.eql(SIGNED_TEST_PAYLOAD)
  })
})

describe('Soup to Nuts', function () {
  it('should Sign Pack And Unpack Verify JSON', async function () {
    const uri = await signAndPack(TEST_PAYLOAD, mockKeyPair, 'pcf.pw', 'dgc', '2', TEMPLATE)
    const resultJSON = await unpackAndVerify(uri, TEMPLATE)

    expect(resultJSON.proof).to.not.be.null
    expect(resultJSON.issuer).to.not.be.null
    expect(resultJSON.issuanceDate).to.not.be.null

    // Removing added elements to match initial payload.
    resultJSON['@context'] = resultJSON['@context'].filter(function (item) {
      return item !== 'https://w3id.org/security/suites/ed25519-2020/v1'
    })
    expect(resultJSON).to.eql(TEST_PAYLOAD)
  })
})
