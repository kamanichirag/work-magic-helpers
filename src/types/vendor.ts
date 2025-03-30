
export interface Vendor {
  id: string;
  vendorName: string;
  companyOrganization: string;
  address: string;
  servicesOffered: string;
  contactPerson: string;
  contactNumber: string;
  emailId: string;
  qaExecutiveName: string;
  qaExecutiveContact: string;
  contactDetails: {
    purchase: ContactPerson;
    finance: ContactPerson;
    quality: ContactPerson;
    management: ContactPerson;
  };
  bankDetails: {
    bankName: string;
    address: string;
    contactNumber: string;
    accountHolderName: string;
    accountNumber: string;
    swiftCode: string;
    iban: string;
    routingNumber: string;
  };
  assessment?: {
    department: {
      businessStructure: {
        response: string;
        remarks: string;
      };
      organizationalChart: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      trainingRecords: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      personnelCurricula: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      trainingProgram: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      externalContractors: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      qualityManagement: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      facilityApproved: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      certifications: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
    };
    facility: {
      security: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      separateAreas: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      computerApplications: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      temperatureMonitored: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      fireAlarm: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      pestControl: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      cleaningProcedure: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
    };
    labeling: {
      overLabelling: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      inHousePrinting: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
    };
    comparatorSourcing: {
      sourceProducts: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      providePedigree: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      provideCoA: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
    };
    recordsAndReports: {
      documentationControl: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
      archivalProcedures: {
        response: "Yes" | "No" | "Not Applicable" | "";
        remarks: string;
      };
    };
  };
}

export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}
