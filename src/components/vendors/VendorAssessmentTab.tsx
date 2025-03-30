
import { Vendor } from "@/types/vendor";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  // Function to handle response changes for text inputs
  const handleTextResponseChange = (section: string, field: string, value: string) => {
    handleChange(`assessment.${section}.${field}.response`, value);
  };

  // Function to handle response changes for radio/checkbox inputs
  const handleCheckboxResponseChange = (section: string, field: string, value: string) => {
    handleChange(`assessment.${section}.${field}.response`, value);
  };

  // Function to handle remarks changes
  const handleRemarksChange = (section: string, field: string, value: string) => {
    handleChange(`assessment.${section}.${field}.remarks`, value);
  };

  // Table questions component for sections
  const AssessmentTable = ({
    title,
    section,
    questions
  }: {
    title: string;
    section: string;
    questions: {
      field: string;
      question: string;
      type: "text" | "checkbox";
    }[];
  }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4 font-bold text-black">{title.toUpperCase()}</TableHead>
              <TableHead className="w-2/5 font-bold text-black">INFORMATION REQUESTED</TableHead>
              <TableHead className="w-1/6 font-bold text-black">RESPONSE</TableHead>
              <TableHead className="w-1/4 font-bold text-black">REMARKS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((q, index) => (
              <TableRow key={`${section}-${q.field}`}>
                {index === 0 ? (
                  <TableCell className="font-medium align-top" rowSpan={questions.length}>
                    <div className="writing-vertical text-lg font-semibold h-full flex items-center justify-center">
                      {title.split(" ").map((word, i) => (
                        <div key={i} className="my-1">{word}</div>
                      ))}
                    </div>
                  </TableCell>
                ) : null}
                <TableCell className="align-top">{q.question}</TableCell>
                <TableCell className="align-top">
                  {q.type === "text" ? (
                    <Input 
                      value={(assessment[section as keyof typeof assessment] as any)[q.field].response}
                      onChange={(e) => handleTextResponseChange(section, q.field, e.target.value)}
                      placeholder="Enter response"
                      className="w-full"
                    />
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${section}-${q.field}-yes`}
                          checked={(assessment[section as keyof typeof assessment] as any)[q.field].response === "Yes"}
                          onCheckedChange={() => handleCheckboxResponseChange(section, q.field, "Yes")}
                        />
                        <Label htmlFor={`${section}-${q.field}-yes`}>Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${section}-${q.field}-no`}
                          checked={(assessment[section as keyof typeof assessment] as any)[q.field].response === "No"}
                          onCheckedChange={() => handleCheckboxResponseChange(section, q.field, "No")}
                        />
                        <Label htmlFor={`${section}-${q.field}-no`}>No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${section}-${q.field}-na`}
                          checked={(assessment[section as keyof typeof assessment] as any)[q.field].response === "Not Applicable"}
                          onCheckedChange={() => handleCheckboxResponseChange(section, q.field, "Not Applicable")}
                        />
                        <Label htmlFor={`${section}-${q.field}-na`}>Not Applicable</Label>
                      </div>
                    </div>
                  )}
                </TableCell>
                <TableCell className="align-top">
                  <Textarea 
                    value={(assessment[section as keyof typeof assessment] as any)[q.field].remarks}
                    onChange={(e) => handleRemarksChange(section, q.field, e.target.value)}
                    placeholder="Enter remarks"
                    className="min-h-[80px] w-full"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Vendor Assessment Questionnaire</h3>
      
      <div className="space-y-8">
        <AssessmentTable 
          title="Organization and Personnel"
          section="department"
          questions={[
            {
              field: "businessStructure",
              question: "What is the business structure? (Public Limited, Private Limited, Proprietary or Partnership, etc.)",
              type: "text"
            },
            {
              field: "organizationalChart",
              question: "Is there an organizational chart which accurately represents the organization? Please provide a copy of organizational structure/matrix.",
              type: "checkbox"
            },
            {
              field: "trainingRecords",
              question: "How are the training records handled?",
              type: "checkbox"
            },
            {
              field: "personnelCurricula",
              question: "Are there personnel curricula (training matrix/plan) established and documented for everyone?",
              type: "checkbox"
            },
            {
              field: "trainingProgram",
              question: "Does the training program include new hire training and re-qualification training for personnel?",
              type: "checkbox"
            },
            {
              field: "externalContractors",
              question: "Are external contractors/vendors utilized? Are they qualified/approved for use? Is there an SOP that outlines this process?",
              type: "checkbox"
            },
            {
              field: "qualityManagement",
              question: "Is there a Quality Management System Available?",
              type: "checkbox"
            },
            {
              field: "facilityApproved",
              question: "Is your facility approved by competent authorities and/or licensing authorities? Regulatory Name (If Yes, provide mode details)",
              type: "checkbox"
            },
            {
              field: "certifications",
              question: "Are there copies of certifications/licenses available? Provide a copy of all applicable licenses.",
              type: "checkbox"
            }
          ]}
        />

        <AssessmentTable 
          title="Facility"
          section="facility"
          questions={[
            {
              field: "security",
              question: "Is there all required measure to ensure Security and confidentiality to prevent unauthorized access to records/ Storage?",
              type: "checkbox"
            },
            {
              field: "separateAreas",
              question: "Are receipt, storage and shipping areas separate or segregated?",
              type: "checkbox"
            },
            {
              field: "computerApplications",
              question: "Do you use computer applications for inventory management?",
              type: "checkbox"
            },
            {
              field: "temperatureMonitored",
              question: "Is the temperature within the storage area monitored? Controlled?",
              type: "checkbox"
            },
            {
              field: "fireAlarm",
              question: "Do you have a fire alarm & control system?",
              type: "checkbox"
            },
            {
              field: "pestControl",
              question: "Do you have a pest control program in place?",
              type: "checkbox"
            },
            {
              field: "cleaningProcedure",
              question: "Do you have a cleaning procedure in place?",
              type: "checkbox"
            }
          ]}
        />

        <AssessmentTable 
          title="Labeling"
          section="labeling"
          questions={[
            {
              field: "overLabelling",
              question: "Do you carry out over-labelling / extension date labelling of clinical trial material?",
              type: "checkbox"
            },
            {
              field: "inHousePrinting",
              question: "Do you print labels in-house?",
              type: "checkbox"
            }
          ]}
        />

        <AssessmentTable 
          title="Comparator Sourcing"
          section="comparatorSourcing"
          questions={[
            {
              field: "sourceProducts",
              question: "Do you source comparator products from local market as well as outside your country?",
              type: "checkbox"
            },
            {
              field: "providePedigree",
              question: "Do you provide Pedigree?",
              type: "checkbox"
            },
            {
              field: "provideCoA",
              question: "Do You Provide CoA or MSDS?",
              type: "checkbox"
            }
          ]}
        />

        <AssessmentTable 
          title="Records And Reports"
          section="recordsAndReports"
          questions={[
            {
              field: "documentationControl",
              question: "A documentation control system exists and is functional properties are described?",
              type: "checkbox"
            },
            {
              field: "archivalProcedures",
              question: "Do you have archival procedures? Please mention the records archival period.",
              type: "checkbox"
            }
          ]}
        />
      </div>

      <style>
        {`
        .writing-vertical {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          text-orientation: mixed;
        }
        `}
      </style>
    </div>
  );
};
