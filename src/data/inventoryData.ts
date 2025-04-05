
import { InventoryItem } from "@/types/inventory";

export const inventoryItems: InventoryItem[] = [
  {
    id: "INV-001",
    productName: "Antibiotic 500mg",
    supplierName: "PharmaCorp",
    supplierDetails: "Contract #PC-2023-456",
    ndcNumber: "12345-678-90",
    manufacturer: "MediPharm Inc.",
    countryOfOrigin: "United States",
    lotNumber: "LOT-A12345",
    storageLocation: "Warehouse A, Shelf 12",
    weightGrams: 250,
    quantity: 1200,
    dimensionsCm: {
      length: 10,
      width: 5,
      height: 3
    },
    forClinicalTrial: true,
    supply: "Monthly",
    kitRange: "KT-1000 to KT-1500",
    seqRange: "SQ-001 to SQ-350",
    remarks: "Temperature-sensitive",
    createdBy: "Jane Smith",
    createdDate: "2025-03-15",
    approvedBy: "Dr. Robert Johnson",
    approvedDate: "2025-03-16"
  },
  {
    id: "INV-002",
    productName: "Pain Relief 250mg",
    supplierName: "MediSupply",
    ndcNumber: "45678-123-45",
    manufacturer: "ReliefPharm",
    countryOfOrigin: "Germany",
    lotNumber: "LOT-B78901",
    storageLocation: "Warehouse B, Shelf 03",
    weightGrams: 125,
    quantity: 5000,
    dimensionsCm: {
      length: 8,
      width: 4,
      height: 2
    },
    forClinicalTrial: false,
    supply: "Quarterly",
    remarks: "Keep at room temperature",
    createdBy: "Michael Brown",
    createdDate: "2025-03-12"
  },
  {
    id: "INV-003",
    productName: "Test Kit COVID-19",
    supplierName: "DiagnosticPro",
    supplierDetails: "Premium supplier",
    ndcNumber: "98765-432-10",
    manufacturer: "TestMed Labs",
    countryOfOrigin: "Singapore",
    lotNumber: "LOT-C56789",
    storageLocation: "Cold Storage 2, Rack 5",
    weightGrams: 50,
    quantity: 8000,
    dimensionsCm: {
      length: 15,
      width: 10,
      height: 5
    },
    forClinicalTrial: true,
    supply: "Weekly",
    kitRange: "KT-5000 to KT-7000",
    seqRange: "SQ-500 to SQ-750",
    remarks: "Store at 2-8°C",
    createdBy: "David Wilson",
    createdDate: "2025-03-10",
    approvedBy: "Dr. Sarah Lee",
    approvedDate: "2025-03-11"
  },
  {
    id: "INV-004",
    productName: "Blood Pressure Monitor",
    supplierName: "MedEquip",
    ndcNumber: "56789-012-34",
    manufacturer: "HealthTech Inc.",
    countryOfOrigin: "Japan",
    lotNumber: "LOT-D34567",
    storageLocation: "Medical Devices, Section 2",
    weightGrams: 450,
    quantity: 200,
    dimensionsCm: {
      length: 20,
      width: 15,
      height: 10
    },
    forClinicalTrial: false,
    supply: "Biannual",
    remarks: "Calibrated on arrival",
    createdBy: "Alex Thompson",
    createdDate: "2025-03-05"
  },
  {
    id: "INV-005",
    productName: "Vaccine XYZ",
    supplierName: "BioPharma",
    supplierDetails: "FDA approved",
    ndcNumber: "34567-890-12",
    manufacturer: "ImmuneTech",
    countryOfOrigin: "Switzerland",
    lotNumber: "LOT-E23456",
    storageLocation: "Ultra-Cold Storage 1",
    weightGrams: 75,
    quantity: 3000,
    dimensionsCm: {
      length: 5,
      width: 5,
      height: 12
    },
    forClinicalTrial: true,
    supply: "Weekly",
    kitRange: "KT-8000 to KT-9000",
    seqRange: "SQ-800 to SQ-950",
    remarks: "Store at -70°C",
    createdBy: "Emily Davis",
    createdDate: "2025-03-20",
    approvedBy: "Dr. Mark Williams",
    approvedDate: "2025-03-21"
  }
];

export const suppliers = [
  "PharmaCorp", 
  "MediSupply", 
  "DiagnosticPro", 
  "MedEquip", 
  "BioPharma"
];

export const manufacturers = [
  "MediPharm Inc.", 
  "ReliefPharm", 
  "TestMed Labs", 
  "HealthTech Inc.", 
  "ImmuneTech"
];

export const locations = [
  "Warehouse A", 
  "Warehouse B", 
  "Cold Storage", 
  "Medical Devices", 
  "Ultra-Cold Storage"
];
