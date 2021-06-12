const {
  sign,
  verify,
  pack,
  unpack,
  signAndPack,
  unpackAndVerify,
} = require("../lib/index");
const expect = require("chai").expect;

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

const SIGNED_TEST_PAYLOAD = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/dgc/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1",
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
  proof: {
    type: "Ed25519Signature2020",
    created: "2021-06-12T14:36:49Z",
    verificationMethod: "did:web:PCF.PW:1A12#WEB",
    proofPurpose: "assertionMethod",
    proofValue:
      "z44RDDFBvPHfSLQQC13cggevnts7DFQRUXQg9YfYrNx5m4PAoqR3qFydGwtUsEvQL4WwjRX2Lp2m87H6NKRuaHEKC",
  },
};

const mockKeyPair = {
  id: "did:web:PCF.PW:1A12#WEB",
  type: "Ed25519VerificationKey2020",
  controller: "did:web:PCF.PW:1A12",
  publicKeyMultibase: "zGhTGvJH58518mWd5PAWnAVLx3dArnmQNmPqhhqmhuEsz",
  privateKeyMultibase:
    "z5Q2WLLaD7aJ44s6Aw6qXf1vNor9quCe1ZLhHqc63yhfFF63tbuTgPHgCzXKUbkHAGm8oE9jiQpCPepD88Jgyy7FW",
};

describe("Crypto", function () {
  it("should sign the package", async function () {
    const signed = await sign(TEST_PAYLOAD, mockKeyPair);
    //console.log(JSON.stringify(signed));
    expect(signed).to.not.be.null;
    expect(signed.proof).to.not.be.null;
    expect(signed.issuer).to.not.be.null;
    expect(signed.issuanceDate).to.not.be.null;
  });

  it("should verify the package", async function () {
    const result = await verify(SIGNED_TEST_PAYLOAD);
    expect(result).to.be.true;
  });

  it("should sign and verify the package", async function () {
    const signed = await sign(TEST_PAYLOAD, mockKeyPair);
    const result = await verify(signed);
    expect(result).to.be.true;
  });
});

describe("Data Minimization", function () {
  it("should pack And unpack", async function () {
    const packed = await pack(SIGNED_TEST_PAYLOAD, "pcf.pw", "dgc", "2");
    const unpacked = await unpack(packed);
    expect(unpacked).to.eql(SIGNED_TEST_PAYLOAD);
  });
});

describe("Soup to Nuts", function () {
  it("should Sign Pack And Unpack Verify JSON", async function () {
    const uri = await signAndPack(TEST_PAYLOAD, mockKeyPair, "pcf.pw", "dgc", "2");
    const resultJSON = await unpackAndVerify(uri);

    expect(resultJSON.proof).to.not.be.null;
    expect(resultJSON.issuer).to.not.be.null;
    expect(resultJSON.issuanceDate).to.not.be.null;

    // Removing added elements to match initial payload.
    resultJSON["@context"] = resultJSON["@context"].filter(function (item) {
      return item !== "https://w3id.org/security/suites/ed25519-2020/v1";
    });
    expect(resultJSON).to.eql(TEST_PAYLOAD);
  });
});
