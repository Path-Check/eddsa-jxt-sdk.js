export default {
  "@context": {
    "@version": 1.1,
    "name": "http://schema.org/name",
    "description": "http://schema.org/description",
    "identifier": "http://schema.org/identifier",
    "image": {
      "@id": "http://schema.org/image",
      "@type": "@id"
    },
    "DocumentVerificationEvidence": {
      "@id": "https://schema.org/DigitalDocument",
      "@context": {
        "verifier": {
          "@id": "https://schema.org/Organization"
        },
        "evidenceDocument": {
          "@id": "https://schema.org/name"
        },
        "subjectPresence": {
          "@id": "https://schema.org/Person"
        },
        "documentPresence": {
          "@id": "https://schema.org/PresentationDigitalDocument"
        }
      }
    },
    "id": "@id",
    "type": "@type",
    "Brand": {
      "@id": "https://schema.org/Brand",
      "@context": {
        "logo": {
          "@id": "https://schema.org/logo"
        },
        "url": {
          "@id": "https://schema.org/url"
        }
      }
    },
    "ContactPoint": {
      "@id": "https://schema.org/ContactPoint",
      "@context": {
        "name": {
          "@id": "https://schema.org/name"
        },
        "address": {
          "@id": "https://schema.org/PostalAddress"
        },
        "email": {
          "@id": "https://schema.org/email"
        },
        "phoneNumber": {
          "@id": "https://schema.org/telephone"
        }
      }
    },
    "CovidTestPassEvidenceDocument": {
      "@id": "https://w3id.org/pathogen#CovidTestPassEvidenceDocument",
      "@context": {
        "testType": {
          "@id": "https://schema.org/name"
        },
        "testCenter": {
          "@id": "https://schema.org/Organization"
        },
        "healthProfessionalAdministered": {
          "@id": "https://schema.org/description"
        },
        "testedPerson": {
          "@id": "https://schema.org/Person"
        },
        "testResult": {
          "@id": "https://schema.org/signDetected"
        },
        "testDetails": {
          "@id": "https://schema.org/MedicalTest"
        }
      }
    },
    "StandardCovidTestPassDetailed": {
      "@id": "https://w3id.org/pathogen#CovidTestPassStandardCredentialDetailed",
      "@context": {
        "testType": {
          "@id": "https://schema.org/name"
        },
        "testCenter": {
          "@id": "https://schema.org/Organization"
        },
        "healthProfessionalAdministered": {
          "@id": "https://schema.org/description"
        },
        "testedPerson": {
          "@id": "https://schema.org/Person"
        },
        "testResult": {
          "@id": "https://schema.org/signDetected"
        },
        "testDetails": {
          "@id": "https://schema.org/MedicalTest"
        }
      }
    },
    "StandardCovidTestPassMinimal": {
      "@id": "https://w3id.org/pathogen#CovidTestPassStandardCredentialMinimal",
      "@context": {
        "testType": {
          "@id": "https://schema.org/name"
        },
        "testedPerson": {
          "@id": "https://schema.org/Person"
        },
        "testResult": {
          "@id": "https://schema.org/signDetected"
        }
      }
    },
    "CovidTestRegistrationCredential": {
      "@id": "https://w3id.org/pathogen#CovidTestRegistrationCredential",
      "@context": {
        "nationalHealthAgency": {
          "@id": "https://schema.org/name"
        },
        "testID": {
          "@id": "https://schema.org/productID"
        },
        "productName": {
          "@id": "https://schema.org/description"
        },
        "evaluation": {
          "@id": "https://schema.org/signDetected"
        },
        "marketingAuthorativeHolder": {
          "@id": "https://schema.org/manufacturer"
        },
        "distributor": {
          "@id": "https://schema.org/Organization"
        },
        "sensitivity": {
          "@id": "https://schema.org/PropertyValue"
        },
        "specificity": {
          "@id": "https://schema.org/additionalProperty"
        },
        "testDocumentationLink": {
          "@id": "https://schema.org/url"
        }
      }
    },
    "DGCInfectionInformation": {
      "@id": "https://w3id.org/pathogen#DGCInfectionInformation",
      "@context": {
        "diseaseRecoveredFrom": {
          "@id": "http://snomed.info/sct/840539006"
        },
        "dateFirstPositive": {
          "@id": "http://hl7.eu/fhir/ig/dgc/DiagnosticReport.result.effectiveDateTime"
        },
        "countryOfTest": {
          "@id": "https://schema.org/countryOfOrigin"
        }
      }
    },
    "DGCProofOfCovidTest": {
      "@id": "https://w3id.org/pathogen#DGCProofOfCovidTest",
      "@context": {
        "issuerName": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.location.name"
        },
        "testInformation": {
          "@id": "https://w3id.org/pathogen#DGCTestInformation"
        },
        "personalInformation": {
          "@id": "https://w3id.org/pathogen#DGCSubject"
        }
      }
    },
    "DGCProofOfRecovery": {
      "@id": "https://w3id.org/pathogen#DGCProofOfRecovery",
      "@context": {
        "issuerName": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.location.name"
        },
        "validFrom": {
          "@id": "https://schema.org/validFrom"
        },
        "validUntil": {
          "@id": "https://schema.org/validUntil"
        },
        "infectionInformation": {
          "@id": "https://w3id.org/pathogen#DGCInfectionInformation"
        },
        "personalInformation": {
          "@id": "https://w3id.org/pathogen#DGCSubject"
        }
      }
    },
    "DGCProofOfVaccination": {
      "@id": "https://w3id.org/pathogen#DGCProofOfVaccination",
      "@context": {
        "issuerName": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.location.name"
        },
        "vaccinationInformation": {
          "@id": "https://w3id.org/pathogen#DGCVaccinationInformation"
        },
        "personalInformation": {
          "@id": "https://w3id.org/pathogen#DGCSubject"
        }
      }
    },
    "DGCSubject": {
      "@id": "https://w3id.org/pathogen#DGCSubject",
      "@context": {
        "familyName": {
          "@id": "http://hl7.eu/fhir/ig/dgc/Patient.name.familyName"
        },
        "givenName": {
          "@id": "http://hl7.eu/fhir/ig/dgc/Patient.name.givenName"
        },
        "stdFamilyName": {
          "@id": "http://hl7.eu/fhir/ig/dgc/Patient.name.familyName"
        },
        "stdGivenName": {
          "@id": "http://hl7.eu/fhir/ig/dgc/Patient.name.givenName"
        },
        "birthDate": {
          "@id": "http://hl7.eu/fhir/ig/dgc/Patient.birthDate"
        },
        "gender": {
          "@id": "http://hl7.org/fhir/gender-identity"
        }
      }
    },
    "DGCTestInformation": {
      "@id": "https://w3id.org/pathogen#DGCTestInformation",
      "@context": {
        "testName": {
          "@id": "http://hl7.eu/fhir/ig/dgc/ValueSet/loinc-tests-covid-19"
        },
        "diseaseTestedFrom": {
          "@id": "http://snomed.info/sct/840539006"
        },
        "testType": {
          "@id": "http://hl7.eu/fhir/ig/dgc/ValueSet/covid-19-lab-methods"
        },
        "sampleOriginType": {
          "@id": "http://hl7.org/fhir/ValueSet/body-site"
        },
        "sampleCollectionDateTime": {
          "@id": "http://hl7.eu/fhir/ig/dgc/DiagnosticReport.specimen.collectedDateTime"
        },
        "testManufacturer": {
          "@id": "https://schema.org/manufacturer"
        },
        "testResultDate": {
          "@id": "http://hl7.eu/fhir/ig/dgc/DiagnosticReport.resultDate"
        },
        "testResult": {
          "@id": "http://hl7.org/fhir/ValueSet/observation-interpretation"
        },
        "testCenter": {
          "@id": "http://hl7.eu/fhir/ig/dgc/StructureDefinition/Location-dgc"
        },
        "testValidatorId": {
          "@id": "http://hl7.eu/fhir/ig/dgc/DiagnosticReport.resultsIntepreter"
        },
        "healthProfessionalAdministered": {
          "@id": "http://hl7.org/fhir/uv/ips/StructureDefinition/Practitioner-uv-ips"
        },
        "testDetails": {
          "@id": "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-pathology-uv-ips"
        },
        "countryOfTestAdminstration": {
          "@id": "https://schema.org/countryOfOrigin"
        }
      }
    },
    "DGCVaccinationInformation": {
      "@id": "https://w3id.org/pathogen#DGCVaccinationInformation",
      "@context": {
        "administeringCentre": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.location.name"
        },
        "batchNumber": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.lotNumber"
        },
        "countryOfVaccination": {
          "@id": "http://hl7.org/fhir/ValueSet/iso3166-1-2"
        },
        "dateOfVaccination": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.occurenceDateTime"
        },
        "healthProfessional": {
          "@id": "http://hl7.org/fhir/ValueSet/immunization-function"
        },
        "nextVaccinationDate": {
          "@id": "http://hl7.org/fhir/ImmunizationRecommendation.dateCriterion.value"
        },
        "order": {
          "@id": "http://hl7.org/fhir/Immunization.protocolApplied.doseNumber"
        },
        "dose": {
          "@id": "http://hl7.org/fhir/Immunization.protocolApplied.doseNumber"
        },
        "totalDoses": {
          "@id": "http://hl7.org/fhir/Immunization.protocolApplied.totalDoses"
        },
        "vaccine": {
          "@id": "https://w3id.org/pathogen#DGCVaccine"
        },
        "diseaseProtectedFrom": {
          "@id": "http://snomed.info/sct/840539006"
        },
        "prophylaxis": {
          "@id": "http://snomed.info/sct/840539006"
        }
      }
    },
    "DGCVaccine": {
      "@id": "https://w3id.org/pathogen#DGCVaccine",
      "@context": {
        "code": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.lotNumber"
        },
        "targetDisease": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.lotNumber"
        },
        "marketingAuthHolder": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.lotNumber"
        },
        "medicinalProductName": {
          "@id": "http://hl7.org/fhir/uv/ips/Immunization.lotNumber"
        }
      }
    },
    "Entity": {
      "@id": "https://w3id.org/pathogen#Entity",
      "@context": {}
    },
    "GeoCoordinates": {
      "@id": "https://schema.org/GeoCoordinates",
      "@context": {
        "latitude": {
          "@id": "https://schema.org/latitude"
        },
        "longitude": {
          "@id": "https://schema.org/longitude"
        }
      }
    },
    "LEIaddress": {
      "@id": "https://w3id.org/pathogen#LEIaddress",
      "@context": {
        "language": {
          "@id": "https://schema.org/Language"
        },
        "addressLines": {
          "@id": "https://schema.org/streetAddress"
        },
        "addressNumber": {
          "@id": "https://schema.org/Number"
        },
        "addressNumberWithinBuilding": {
          "@id": "https://schema.org/value"
        },
        "mailRouting": {
          "@id": "https://schema.org/Trip"
        },
        "city": {
          "@id": "https://schema.org/addressLocality"
        },
        "region": {
          "@id": "https://schema.org/addressRegion"
        },
        "country": {
          "@id": "https://schema.org/addressCountry"
        },
        "postalCode": {
          "@id": "https://schema.org/postalCode"
        }
      }
    },
    "LEIauthority": {
      "@id": "https://w3id.org/pathogen#LEIauthority",
      "@context": {
        "validationAuthorityID": {
          "@id": "https://schema.org/identifier"
        },
        "otherValidationAuthorityID": {
          "@id": "https://schema.org/taxID"
        },
        "validationAuthorityEntityID": {
          "@id": "https://schema.org/leiCode"
        }
      }
    },
    "LEIentity": {
      "@id": "https://w3id.org/pathogen#LEIentity",
      "@context": {
        "legalName": {
          "@id": "https://schema.org/legalName"
        },
        "legalNameLanguage": {
          "@id": "https://schema.org/Language"
        },
        "otherNames": {
          "@id": "https://schema.org/alternateName"
        },
        "transliteratedOtherNames": {
          "@id": "https://schema.org/name"
        },
        "legalAddress": {
          "@id": "https://w3id.org/pathogen#LEIaddress"
        },
        "headquartersAddress": {
          "@id": "https://schema.org/PostalAddress"
        },
        "registrationAuthority": {
          "@id": "https://w3id.org/pathogen#LEIauthority"
        },
        "legalJurisdiction": {
          "@id": "https://schema.org/countryOfOrigin"
        },
        "entityCategory": {
          "@id": "https://schema.org/category"
        },
        "legalForm": {
          "@id": "https://schema.org/additionalType"
        },
        "associatedEntity": {
          "@id": "https://schema.org/Organization"
        },
        "status": {
          "@id": "https://schema.org/status"
        },
        "expirationDate": {
          "@id": "https://schema.org/expires"
        },
        "expirationReason": {
          "@id": "https://schema.org/Answer"
        },
        "successorEntity": {
          "@id": "https://schema.org/Corporation"
        },
        "otherAddresses": {
          "@id": "https://schema.org/Place"
        }
      }
    },
    "LEIevidenceDocument": {
      "@id": "https://w3id.org/pathogen#LEIevidenceDocument",
      "@context": {
        "lei": {
          "@id": "https://www.gleif.org/en/about-lei/iso-17442-the-lei-code-structure#"
        },
        "entity": {
          "@id": "https://w3id.org/pathogen#LEIentity"
        },
        "registration": {
          "@id": "https://w3id.org/pathogen#LEIregistration"
        },
        "bic": {
          "@id": "https://www.iso.org/obp/ui/#iso:std:60390:en"
        }
      }
    },
    "LEIregistration": {
      "@id": "https://w3id.org/pathogen#LEIregistration",
      "@context": {
        "initialRegistrationDate": {
          "@id": "https://schema.org/dateIssued"
        },
        "lastUpdateDate": {
          "@id": "https://schema.org/dateModified"
        },
        "status": {
          "@id": "https://schema.org/status"
        },
        "nextRenewalDate": {
          "@id": "https://schema.org/validThrough"
        },
        "managingLou": {
          "@id": "https://www.gleif.org/en/about-lei/iso-17442-the-lei-code-structure#"
        },
        "validationSources": {
          "@id": "https://schema.org/eventStatus"
        },
        "validationAuthority": {
          "@id": "https://w3id.org/pathogen#LEIauthority"
        }
      }
    },
    "LegalEntityIdentifierCredential": {
      "@id": "https://w3id.org/pathogen#LegalEntityIdentifierCredential",
      "@context": {
        "leiCode": {
          "@id": "https://schema.org/leiCode"
        },
        "certificateName": {
          "@id": "https://schema.org/name"
        }
      }
    },
    "MedicalTest": {
      "@id": "https://schema.org/MedicalTest",
      "@context": {
        "affectedBy": {
          "@id": "https://schema.org/affectedBy"
        },
        "normalRange": {
          "@id": "https://schema.org/normalRange"
        },
        "signDetected": {
          "@id": "https://schema.org/MedicalSign"
        },
        "usedToDiagnose": {
          "@id": "https://schema.org/MedicalCondition"
        },
        "usesDevice": {
          "@id": "https://schema.org/usesDevice"
        },
        "code": {
          "@id": "https://schema.org/code"
        },
        "guideline": {
          "@id": "https://schema.org/guideline"
        },
        "legalStatus": {
          "@id": "https://schema.org/legalStatus"
        },
        "medicineSystem": {
          "@id": "https://schema.org/medicineSystem"
        },
        "recognizingAuthority": {
          "@id": "https://schema.org/Organization"
        },
        "relevantSpecialty": {
          "@id": "https://schema.org/relevantSpecialty"
        }
      }
    },
    "Organization": {
      "@id": "https://schema.org/Organization",
      "@context": {
        "name": {
          "@id": "https://schema.org/name"
        },
        "leiCode": {
          "@id": "https://schema.org/leiCode"
        },
        "url": {
          "@id": "https://schema.org/url"
        },
        "description": {
          "@id": "https://schema.org/description"
        },
        "globalLocationNumber": {
          "@id": "https://schema.org/globalLocationNumber"
        },
        "address": {
          "@id": "https://schema.org/PostalAddress"
        },
        "email": {
          "@id": "https://schema.org/email"
        },
        "phoneNumber": {
          "@id": "https://schema.org/telephone"
        },
        "faxNumber": {
          "@id": "https://schema.org/faxNumber"
        },
        "brand": {
          "@id": "https://schema.org/Brand"
        },
        "contactPoint": {
          "@id": "https://schema.org/ContactPoint"
        }
      }
    },
    "Person": {
      "@id": "https://schema.org/Person",
      "@context": {
        "firstName": {
          "@id": "https://schema.org/givenName"
        },
        "lastName": {
          "@id": "https://schema.org/familyName"
        },
        "email": {
          "@id": "https://schema.org/email"
        },
        "phoneNumber": {
          "@id": "https://schema.org/telephone"
        },
        "worksFor": {
          "@id": "https://schema.org/worksFor"
        },
        "jobTitle": {
          "@id": "https://schema.org/jobTitle"
        },
        "gender": {
          "@id": "https://schema.org/gender"
        },
        "idnumber": {
          "@id": "https://schema.org/identifier"
        },
        "idnumberType": {
          "@id": "https://schema.org/additionalProperty"
        },
        "birthDate": {
          "@id": "https://schema.org/birthDate"
        }
      }
    },
    "Place": {
      "@id": "https://schema.org/Place",
      "@context": {
        "globalLocationNumber": {
          "@id": "https://schema.org/globalLocationNumber"
        },
        "geo": {
          "@id": "https://schema.org/GeoCoordinates"
        },
        "address": {
          "@id": "https://schema.org/PostalAddress"
        }
      }
    },
    "PostalAddress": {
      "@id": "https://schema.org/PostalAddress",
      "@context": {
        "organizationName": {
          "@id": "https://gs1.org/voc/organizationName"
        },
        "streetAddress": {
          "@id": "https://schema.org/streetAddress"
        },
        "addressLocality": {
          "@id": "https://schema.org/addressLocality"
        },
        "addressRegion": {
          "@id": "https://schema.org/addressRegion"
        },
        "addressCountry": {
          "@id": "https://schema.org/addressCountry"
        },
        "crossStreet": {
          "@id": "https://gs1.org/voc/crossStreet"
        },
        "countyCode": {
          "@id": "https://gs1.org/voc/countyCode"
        },
        "postalCode": {
          "@id": "https://schema.org/postalCode"
        },
        "postOfficeBoxNumber": {
          "@id": "https://schema.org/postOfficeBoxNumber"
        }
      }
    },
    "PriceSpecification": {
      "@id": "https://schema.org/PriceSpecification",
      "@context": {
        "price": {
          "@id": "https://schema.org/price"
        },
        "priceCurrency": {
          "@id": "https://schema.org/priceCurrency"
        }
      }
    },
    "Product": {
      "@id": "https://schema.org/Product",
      "@context": {
        "manufacturer": {
          "@id": "https://schema.org/manufacturer"
        },
        "name": {
          "@id": "https://schema.org/name"
        },
        "description": {
          "@id": "https://schema.org/description"
        },
        "category": {
          "@id": "https://schema.org/category"
        },
        "sizeOrAmount": {
          "@id": "https://schema.org/size"
        },
        "weight": {
          "@id": "https://schema.org/weight"
        },
        "depth": {
          "@id": "https://schema.org/depth"
        },
        "width": {
          "@id": "https://schema.org/width"
        },
        "height": {
          "@id": "https://schema.org/height"
        },
        "quantity": {
          "@id": "https://www.gs1.org/voc/netContent"
        },
        "packagingType": {
          "@id": "https://www.gs1.org/voc/packagingMaterial"
        },
        "priceSpecification": {
          "@id": "https://schema.org/priceSpecification"
        },
        "sku": {
          "@id": "https://schema.org/sku"
        }
      }
    },
    "ProductRegistrationEvidenceDocument": {
      "@id": "https://w3id.org/pathogen#ProductRegistrationEvidenceDocument",
      "@context": {
        "category": {
          "@id": "https://schema.org/category"
        },
        "inProductGroupWithID": {
          "@id": "https://schema.org/inProductGroupWithID"
        },
        "productID": {
          "@id": "https://schema.org/productID"
        },
        "mpn": {
          "@id": "https://schema.org/mpn"
        },
        "gtin": {
          "@id": "https://schema.org/gtin"
        },
        "isAccessoryOrSparePartFor": {
          "@id": "https://schema.org/isAccessoryOrSparePartFor"
        },
        "releaseDate": {
          "@id": "https://schema.org/releaseDate"
        },
        "manufacturer": {
          "@id": "https://schema.org/manufacturer"
        },
        "globalLocationNumber": {
          "@id": "https://schema.org/globalLocationNumber"
        },
        "leiCode": {
          "@id": "https://schema.org/leiCode"
        },
        "name": {
          "@id": "https://schema.org/name"
        },
        "description": {
          "@id": "https://schema.org/description"
        },
        "model": {
          "@id": "https://schema.org/model"
        },
        "color": {
          "@id": "https://schema.org/color"
        },
        "material": {
          "@id": "https://schema.org/material"
        },
        "weight": {
          "@id": "https://schema.org/weight"
        },
        "height": {
          "@id": "https://schema.org/height"
        },
        "width": {
          "@id": "https://schema.org/width"
        },
        "depth": {
          "@id": "https://schema.org/depth"
        },
        "url": {
          "@id": "https://schema.org/url"
        },
        "isBasedOn": {
          "@id": "https://schema.org/isBasedOn"
        },
        "image": {
          "@id": "https://schema.org/image"
        }
      }
    },
    "QuantitativeValue": {
      "@id": "https://schema.org/QuantitativeValue",
      "@context": {
        "unitCode": {
          "@id": "https://schema.org/unitCode"
        },
        "value": {
          "@id": "https://schema.org/value"
        }
      }
    },
    "TotalCharge": {
      "@id": "https://w3id.org/pathogen#TotalCharge",
      "@context": {
        "totalPrepaid": {
          "@id": "https://schema.org/Price"
        },
        "totalCollect": {
          "@id": "https://schema.org/totalPrice"
        },
        "sourceCurrency": {
          "@id": "https://schema.org/priceCurrency"
        },
        "destinationCurrency": {
          "@id": "https://schema.org/currency"
        },
        "currencyConversionRate": {
          "@id": "https://schema.org/ExchangeRateSpecification"
        },
        "ccChargesDestinationCurrency": {
          "@id": "https://schema.org/discountCurrency"
        },
        "chargesDestination": {
          "@id": "https://schema.org/Number"
        },
        "totalCollectCharge": {
          "@id": "https://schema.org/estimatedCost"
        }
      }
    },
    "chargeAndPaymentType": {
      "@id": "https://w3id.org/pathogen#chargeAndPaymentType",
      "@context": {
        "chargeCollect": {
          "@id": "https://schema.org/discountPrice"
        },
        "chargePrepaid": {
          "@id": "https://schema.org/totalPrice"
        }
      }
    }
  }
}