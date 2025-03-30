
import { Vendor } from "@/types/vendor";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface VendorAssessmentTabProps {
  formData: Vendor;
  handleChange: (field: string, value: any) => void;
}

export const VendorAssessmentTab = ({ formData, handleChange }: VendorAssessmentTabProps) => {
  // Initialize assessment if it doesn't exist
  const assessment = formData.assessment || {
    department: {
      businessStructure: { response: "", remarks: "" },
      organizationalChart: { response: "", remarks: "" },
      trainingRecords: { response: "", remarks: "" },
      personnelCurricula: { response: "", remarks: "" },
      trainingProgram: { response: "", remarks: "" },
      externalContractors: { response: "", remarks: "" },
      qualityManagement: { response: "", remarks: "" },
      facilityApproved: { response: "", remarks: "" },
      certifications: { response: "", remarks: "" },
    },
    facility: {
      security: { response: "", remarks: "" },
      separateAreas: { response: "", remarks: "" },
      computerApplications: { response: "", remarks: "" },
      temperatureMonitored: { response: "", remarks: "" },
      fireAlarm: { response: "", remarks: "" },
      pestControl: { response: "", remarks: "" },
      cleaningProcedure: { response: "", remarks: "" },
    },
    labeling: {
      overLabelling: { response: "", remarks: "" },
      inHousePrinting: { response: "", remarks: "" },
    },
    comparatorSourcing: {
      sourceProducts: { response: "", remarks: "" },
      providePedigree: { response: "", remarks: "" },
      provideCoA: { response: "", remarks: "" },
    },
    recordsAndReports: {
      documentationControl: { response: "", remarks: "" },
      archivalProcedures: { response: "", remarks: "" },
    }
  };

  // Function to handle response changes
  const handleResponseChange = (section: string, field: string, value: string) => {
    handleChange(`assessment.${section}.${field}.response`, value);
  };

  // Function to handle remarks changes
  const handleRemarksChange = (section: string, field: string, value: string) => {
    handleChange(`assessment.${section}.${field}.remarks`, value);
  };

  // Question component for yes/no/na questions
  const AssessmentQuestion = ({ 
    section, 
    field, 
    question, 
    response, 
    remarks 
  }: { 
    section: string;
    field: string;
    question: string;
    response: string;
    remarks: string;
  }) => (
    <div className="mb-6 border p-4 rounded-md">
      <p className="mb-3 font-medium">{question}</p>
      <div className="mb-3">
        <Label className="mb-2 block">Response</Label>
        <RadioGroup 
          value={response}
          onValueChange={(value) => handleResponseChange(section, field, value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id={`${section}-${field}-yes`} />
            <Label htmlFor={`${section}-${field}-yes`}>Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id={`${section}-${field}-no`} />
            <Label htmlFor={`${section}-${field}-no`}>No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Not Applicable" id={`${section}-${field}-na`} />
            <Label htmlFor={`${section}-${field}-na`}>Not Applicable</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label htmlFor={`${section}-${field}-remarks`} className="mb-2 block">Remarks</Label>
        <Textarea 
          id={`${section}-${field}-remarks`}
          value={remarks}
          onChange={(e) => handleRemarksChange(section, field, e.target.value)}
          placeholder="Enter remarks"
        />
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Vendor Assessment Questionnaire</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="department">
          <AccordionTrigger className="text-lg font-semibold">Department, Organization and Personnel</AccordionTrigger>
          <AccordionContent>
            <div className="mb-6 border p-4 rounded-md">
              <p className="mb-3 font-medium">1. What is the business structure? (Public Limited, Private Limited, Proprietary or Partnership, etc.)</p>
              <div className="mb-3">
                <Label htmlFor="business-structure-response" className="mb-2 block">Response</Label>
                <Input 
                  id="business-structure-response"
                  value={assessment.department.businessStructure.response}
                  onChange={(e) => handleChange("assessment.department.businessStructure.response", e.target.value)}
                  placeholder="Enter business structure"
                />
              </div>
              <div>
                <Label htmlFor="business-structure-remarks" className="mb-2 block">Remarks</Label>
                <Textarea 
                  id="business-structure-remarks"
                  value={assessment.department.businessStructure.remarks}
                  onChange={(e) => handleChange("assessment.department.businessStructure.remarks", e.target.value)}
                  placeholder="Enter remarks"
                />
              </div>
            </div>

            <AssessmentQuestion 
              section="department"
              field="organizationalChart"
              question="2. Is there an organizational chart which accurately represents the organization? Please provide a copy of organizational structure/matrix"
              response={assessment.department.organizationalChart.response}
              remarks={assessment.department.organizationalChart.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="trainingRecords"
              question="3. How are the training records handled?"
              response={assessment.department.trainingRecords.response}
              remarks={assessment.department.trainingRecords.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="personnelCurricula"
              question="4. Are there personnel curricula (training matrix/plan) established and documented for everyone?"
              response={assessment.department.personnelCurricula.response}
              remarks={assessment.department.personnelCurricula.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="trainingProgram"
              question="5. Does the training program include new hire training and re-qualification training for personnel?"
              response={assessment.department.trainingProgram.response}
              remarks={assessment.department.trainingProgram.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="externalContractors"
              question="6. Are external contractors/vendors utilized? Are they qualified/approved for use? Is there an SOP that outlines this process?"
              response={assessment.department.externalContractors.response}
              remarks={assessment.department.externalContractors.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="qualityManagement"
              question="7. Is there a Quality Management System Available"
              response={assessment.department.qualityManagement.response}
              remarks={assessment.department.qualityManagement.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="facilityApproved"
              question="8. Is your facility approved by competent authorities and/or licensing authorities? Regulatory Name (If Yes, provide mode details)"
              response={assessment.department.facilityApproved.response}
              remarks={assessment.department.facilityApproved.remarks}
            />

            <AssessmentQuestion 
              section="department"
              field="certifications"
              question="9. Are there copies of certifications/licenses available? Provide a copy of all applicable licenses."
              response={assessment.department.certifications.response}
              remarks={assessment.department.certifications.remarks}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="facility">
          <AccordionTrigger className="text-lg font-semibold">Facility</AccordionTrigger>
          <AccordionContent>
            <AssessmentQuestion 
              section="facility"
              field="security"
              question="1. Is there all required measure to ensure Security and confidentiality to prevent unauthorized access to records/ Storage"
              response={assessment.facility.security.response}
              remarks={assessment.facility.security.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="separateAreas"
              question="2. Are receipt, storage and shipping areas separate or segregated"
              response={assessment.facility.separateAreas.response}
              remarks={assessment.facility.separateAreas.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="computerApplications"
              question="3. Do you use computer applications for inventory management"
              response={assessment.facility.computerApplications.response}
              remarks={assessment.facility.computerApplications.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="temperatureMonitored"
              question="4. Is the temperature within the storage area monitored? Controlled?"
              response={assessment.facility.temperatureMonitored.response}
              remarks={assessment.facility.temperatureMonitored.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="fireAlarm"
              question="5. Do you have a fire alarm & control system"
              response={assessment.facility.fireAlarm.response}
              remarks={assessment.facility.fireAlarm.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="pestControl"
              question="6. Do you have a pest control program in place?"
              response={assessment.facility.pestControl.response}
              remarks={assessment.facility.pestControl.remarks}
            />

            <AssessmentQuestion 
              section="facility"
              field="cleaningProcedure"
              question="7. Do you have a cleaning procedure in place?"
              response={assessment.facility.cleaningProcedure.response}
              remarks={assessment.facility.cleaningProcedure.remarks}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="labeling">
          <AccordionTrigger className="text-lg font-semibold">Labeling</AccordionTrigger>
          <AccordionContent>
            <AssessmentQuestion 
              section="labeling"
              field="overLabelling"
              question="1. Do you carry out over-labelling / extension date labelling of clinical trial material"
              response={assessment.labeling.overLabelling.response}
              remarks={assessment.labeling.overLabelling.remarks}
            />

            <AssessmentQuestion 
              section="labeling"
              field="inHousePrinting"
              question="2. Do you print labels in-house?"
              response={assessment.labeling.inHousePrinting.response}
              remarks={assessment.labeling.inHousePrinting.remarks}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="comparatorSourcing">
          <AccordionTrigger className="text-lg font-semibold">Comparator Sourcing</AccordionTrigger>
          <AccordionContent>
            <AssessmentQuestion 
              section="comparatorSourcing"
              field="sourceProducts"
              question="1. Do you source comparator products from local market as well as outside your country"
              response={assessment.comparatorSourcing.sourceProducts.response}
              remarks={assessment.comparatorSourcing.sourceProducts.remarks}
            />

            <AssessmentQuestion 
              section="comparatorSourcing"
              field="providePedigree"
              question="2. Do you provide Pedigree?"
              response={assessment.comparatorSourcing.providePedigree.response}
              remarks={assessment.comparatorSourcing.providePedigree.remarks}
            />

            <AssessmentQuestion 
              section="comparatorSourcing"
              field="provideCoA"
              question="3. Do You Provide CoA or MSDS?"
              response={assessment.comparatorSourcing.provideCoA.response}
              remarks={assessment.comparatorSourcing.provideCoA.remarks}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="recordsAndReports">
          <AccordionTrigger className="text-lg font-semibold">Records And Reports</AccordionTrigger>
          <AccordionContent>
            <AssessmentQuestion 
              section="recordsAndReports"
              field="documentationControl"
              question="1. A documentation control system exists and is functional properties are described?"
              response={assessment.recordsAndReports.documentationControl.response}
              remarks={assessment.recordsAndReports.documentationControl.remarks}
            />

            <AssessmentQuestion 
              section="recordsAndReports"
              field="archivalProcedures"
              question="2. Do you have archival procedures? Please mention the records archival period."
              response={assessment.recordsAndReports.archivalProcedures.response}
              remarks={assessment.recordsAndReports.archivalProcedures.remarks}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
