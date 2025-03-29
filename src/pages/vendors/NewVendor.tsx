
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

const vendorFormSchema = z.object({
  vendorName: z.string().min(2, "Vendor name must be at least 2 characters"),
  companyOrganization: z.string().min(2, "Company/Organization must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  servicesOffered: z.string().min(5, "Services offered must be at least 5 characters"),
  contactPerson: z.string().min(2, "Contact person must be at least 2 characters"),
  contactNumber: z.string().min(5, "Contact number must be at least 5 characters"),
  emailId: z.string().email("Please enter a valid email"),
  qaExecutiveName: z.string().min(2, "QA executive name must be at least 2 characters"),
  qaExecutiveContact: z.string().min(5, "QA executive contact must be at least 5 characters"),
});

type VendorFormValues = z.infer<typeof vendorFormSchema>;

const NewVendor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      vendorName: "",
      companyOrganization: "",
      address: "",
      servicesOffered: "",
      contactPerson: "",
      contactNumber: "",
      emailId: "",
      qaExecutiveName: "",
      qaExecutiveContact: "",
    },
  });

  const onSubmit = (values: VendorFormValues) => {
    // Here you would typically send the data to your backend
    console.log(values);
    
    toast({
      title: "Vendor Created",
      description: `Vendor ${values.vendorName} has been created successfully.`,
    });
    
    navigate("/vendors");
  };

  // State for checkbox questionnaire
  const [questionnaire, setQuestionnaire] = useState({
    businessStructure: "",
    hasOrgChart: null,
    trainingRecords: null,
    personnelCurricula: null,
    trainingProgram: null,
    externalContractors: null,
    qualityManagement: null,
    facilityApproved: null,
    certifications: null,
    securityMeasures: null,
    separateAreas: null,
    computerInventory: null,
    temperatureMonitored: null,
    fireAlarmSystem: null,
    pestControl: null,
    cleaningProcedure: null,
    labelingProcess: null,
    inHouseLabels: null,
    sourceProducts: null,
    provideCoa: null,
    msds: null,
    documentationControl: null,
    archivalProcedures: null,
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create New Vendor</h1>
        <Button variant="outline" onClick={() => navigate("/vendors")}>
          Cancel
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Vendor Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vendor Basic Information */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="vendorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NAME OF VENDOR</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyOrganization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>COMPANY/ORGANIZATION</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ADDRESS</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="servicesOffered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SERVICES OFFERED / TO BE RENDERED</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CONTACT PERSON</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CONTACT NO.</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="emailId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EMAIL ID</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="qaExecutiveName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>QUALITY ASSURANCE EXECUTIVE CONTACT PERSON</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="qaExecutiveContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>QUALITY ASSURANCE EXECUTIVE CONTACT DETAILS</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Questionnaire Table */}
              <div className="border rounded-md overflow-hidden mt-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 w-1/4 text-left">DEPARTMENT</th>
                      <th className="border p-2 w-1/3 text-left">INFORMATION REQUESTED</th>
                      <th className="border p-2 w-1/4 text-left">RESPONSE</th>
                      <th className="border p-2 w-1/6 text-left">REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Business Structure */}
                    <tr>
                      <td className="border p-2 align-top" rowSpan={2}>
                        <div className="writing-vertical-lr transform rotate-180 h-full flex items-center justify-center font-bold">
                          ADMINISTRATIVE INFORMATION
                        </div>
                      </td>
                      <td className="border p-2">
                        What is the business structure?<br />
                        (Public Limited, Private Limited, Proprietary or Partnership, etc.)
                      </td>
                      <td className="border p-2">
                        <Input 
                          value={questionnaire.businessStructure} 
                          onChange={(e) => setQuestionnaire({...questionnaire, businessStructure: e.target.value})}
                        />
                      </td>
                      <td className="border p-2"></td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        Is there an organizational chart which accurately represents the organization?<br />
                        Please provide a copy of organizational structure/matrix.
                      </td>
                      <td className="border p-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="org-yes" 
                              checked={questionnaire.hasOrgChart === true}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, hasOrgChart: true})}
                            />
                            <label htmlFor="org-yes">Yes</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="org-no" 
                              checked={questionnaire.hasOrgChart === false}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, hasOrgChart: false})}
                            />
                            <label htmlFor="org-no">No</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="org-na" 
                              checked={questionnaire.hasOrgChart === null}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, hasOrgChart: null})}
                            />
                            <label htmlFor="org-na">Not Applicable</label>
                          </div>
                        </div>
                      </td>
                      <td className="border p-2"></td>
                    </tr>
                    
                    {/* Training Records */}
                    <tr>
                      <td className="border p-2">
                        How are the training records handled?
                      </td>
                      <td className="border p-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="training-yes" 
                              checked={questionnaire.trainingRecords === true}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, trainingRecords: true})}
                            />
                            <label htmlFor="training-yes">Yes</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="training-no" 
                              checked={questionnaire.trainingRecords === false}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, trainingRecords: false})}
                            />
                            <label htmlFor="training-no">No</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox 
                              id="training-na" 
                              checked={questionnaire.trainingRecords === null}
                              onCheckedChange={() => setQuestionnaire({...questionnaire, trainingRecords: null})}
                            />
                            <label htmlFor="training-na">Not Applicable</label>
                          </div>
                        </div>
                      </td>
                      <td className="border p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Form Submission */}
              <div className="border-t pt-6 flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => navigate("/vendors")}>
                  Cancel
                </Button>
                <Button type="submit">Save Vendor</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewVendor;
