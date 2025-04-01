
import React from "react";
import { Vendor } from "@/types/vendor";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface VendorDocumentsSectionProps {
  formData: Vendor;
  handleChange: (field: string, value: any) => void;
}

export const VendorDocumentsSection = ({ 
  formData, 
  handleChange 
}: VendorDocumentsSectionProps) => {
  // Initialize documents and authorization if they don't exist
  if (!formData.documents) {
    handleChange("documents", {
      regulatoryLicense: "",
      listOfSOP: "",
      organizationChart: "",
      otherDocuments: "",
      regulatoryLicenseRemarks: "",
      listOfSOPRemarks: "",
      organizationChartRemarks: "",
      otherDocumentsRemarks: ""
    });
  }

  if (!formData.authorization) {
    handleChange("authorization", {
      companyName: "",
      name: "",
      title: "",
      signature: "",
      date: ""
    });
  }

  if (!formData.jupiterSection) {
    handleChange("jupiterSection", {
      physicalInspection: "",
      services: "",
      vendorApproved: "",
      remarks: "",
      effectiveDate: "",
      auditCertificateDate: "",
      requalificationDate: "",
      preparedByName: "",
      preparedByTitle: "",
      preparedBySignature: "",
      approvedByName: "",
      approvedByTitle: "",
      approvedBySignature: ""
    });
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Documents to be Attached</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 font-bold">LIST OF DOCUMENTS TO BE ATTACHED WITH THIS DOCUMENT</TableHead>
                <TableHead className="w-1/4 font-bold">YES/NO/NA</TableHead>
                <TableHead className="w-1/4 font-bold">OBSERVATIONS/RECOMMENDATIONS/ REMARKS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Regulatory License</TableCell>
                <TableCell>
                  <Select 
                    value={formData.documents?.regulatoryLicense || ""} 
                    onValueChange={(value) => handleChange("documents.regulatoryLicense", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.documents?.regulatoryLicenseRemarks || ""} 
                    onChange={(e) => handleChange("documents.regulatoryLicenseRemarks", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>List of SOP</TableCell>
                <TableCell>
                  <Select 
                    value={formData.documents?.listOfSOP || ""} 
                    onValueChange={(value) => handleChange("documents.listOfSOP", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.documents?.listOfSOPRemarks || ""} 
                    onChange={(e) => handleChange("documents.listOfSOPRemarks", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Organization Chart</TableCell>
                <TableCell>
                  <Select 
                    value={formData.documents?.organizationChart || ""} 
                    onValueChange={(value) => handleChange("documents.organizationChart", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.documents?.organizationChartRemarks || ""} 
                    onChange={(e) => handleChange("documents.organizationChartRemarks", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Any other Documents</TableCell>
                <TableCell>
                  <Select 
                    value={formData.documents?.otherDocuments || ""} 
                    onValueChange={(value) => handleChange("documents.otherDocuments", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.documents?.otherDocumentsRemarks || ""} 
                    onChange={(e) => handleChange("documents.otherDocumentsRemarks", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-center font-bold mb-4">
            BY SIGNING BELOW, I CONFIRM THAT I AM AN AUTHORIZED REPRESENTATIVE OF THE COMPANY AND ALL INFORMATION PROVIDED ABOVE ARE TRUE AND CORRECT.
          </h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell rowSpan={4} className="align-middle font-bold">COMPLETED BY</TableCell>
                <TableCell className="font-bold">COMPANY NAME</TableCell>
                <TableCell colSpan={3}>
                  <Input 
                    value={formData.authorization?.companyName || ""} 
                    onChange={(e) => handleChange("authorization.companyName", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">NAME</TableCell>
                <TableCell colSpan={3}>
                  <Input 
                    value={formData.authorization?.name || ""} 
                    onChange={(e) => handleChange("authorization.name", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TITLE</TableCell>
                <TableCell colSpan={3}>
                  <Input 
                    value={formData.authorization?.title || ""} 
                    onChange={(e) => handleChange("authorization.title", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">SIGNATURE</TableCell>
                <TableCell className="w-1/3">
                  <Input 
                    value={formData.authorization?.signature || ""} 
                    onChange={(e) => handleChange("authorization.signature", e.target.value)} 
                  />
                </TableCell>
                <TableCell className="font-bold w-1/6">DATE</TableCell>
                <TableCell className="w-1/6">
                  <Input 
                    type="date"
                    value={formData.authorization?.date || ""} 
                    onChange={(e) => handleChange("authorization.date", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-center font-bold mb-4">
            THIS SECTION IS TO BE COMPLETED BY JUPITER RESEARCH SERVICES ONLY.
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold w-1/3">INFERENCE</TableHead>
                <TableHead className="font-bold w-1/3">REMARKS</TableHead>
                <TableHead className="font-bold w-1/3">COMPLETED BY (NAME & SIGNATURE)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Is there a physical inspection required at vendor facility?</TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.jupiterSection?.physicalInspection || ""} 
                    onChange={(e) => handleChange("jupiterSection.physicalInspection", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
                <TableCell rowSpan={7}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Services of Vendor to be used</TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.jupiterSection?.services || ""} 
                    onChange={(e) => handleChange("jupiterSection.services", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Is the vendor approved and qualified to provide services as listed on page 1?</TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="approved"
                        checked={formData.jupiterSection?.vendorApproved === "Approved"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleChange("jupiterSection.vendorApproved", "Approved");
                          }
                        }}
                      />
                      <label htmlFor="approved">Approved</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="rejected"
                        checked={formData.jupiterSection?.vendorApproved === "Rejected"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleChange("jupiterSection.vendorApproved", "Rejected");
                          }
                        }}
                      />
                      <label htmlFor="rejected">Rejected</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="requalification"
                        checked={formData.jupiterSection?.vendorApproved === "Re-Qualification"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleChange("jupiterSection.vendorApproved", "Re-Qualification");
                          }
                        }}
                      />
                      <label htmlFor="requalification">Re-Qualification</label>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remarks</TableCell>
                <TableCell>
                  <Textarea 
                    value={formData.jupiterSection?.remarks || ""} 
                    onChange={(e) => handleChange("jupiterSection.remarks", e.target.value)} 
                    className="h-10 min-h-0"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Effective Date</TableCell>
                <TableCell>
                  <Input 
                    type="date"
                    value={formData.jupiterSection?.effectiveDate || ""} 
                    onChange={(e) => handleChange("jupiterSection.effectiveDate", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Audit Certificate Issuance Date</TableCell>
                <TableCell>
                  <Input 
                    type="date"
                    value={formData.jupiterSection?.auditCertificateDate || ""} 
                    onChange={(e) => handleChange("jupiterSection.auditCertificateDate", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Requalification Date</TableCell>
                <TableCell>
                  <Input 
                    type="date"
                    value={formData.jupiterSection?.requalificationDate || ""} 
                    onChange={(e) => handleChange("jupiterSection.requalificationDate", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="font-bold text-center">PREPARED BY</TableHead>
                <TableHead className="font-bold text-center">APPROVED BY</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">NAME</TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.preparedByName || ""} 
                    onChange={(e) => handleChange("jupiterSection.preparedByName", e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.approvedByName || ""} 
                    onChange={(e) => handleChange("jupiterSection.approvedByName", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TITLE</TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.preparedByTitle || ""} 
                    onChange={(e) => handleChange("jupiterSection.preparedByTitle", e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.approvedByTitle || ""} 
                    onChange={(e) => handleChange("jupiterSection.approvedByTitle", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">SIGNATURE AND DATE</TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.preparedBySignature || ""} 
                    onChange={(e) => handleChange("jupiterSection.preparedBySignature", e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={formData.jupiterSection?.approvedBySignature || ""} 
                    onChange={(e) => handleChange("jupiterSection.approvedBySignature", e.target.value)} 
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
