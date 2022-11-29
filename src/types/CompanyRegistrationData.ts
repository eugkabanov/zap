export default interface CompanyRegistrationData {
  readonly id?: null;
  inn: string;
  companyName: string;
  legalAddress?: string;
  actualAddress?: string;
  bankName?: string;
  kpp?: string;
  bankAccount?: string;
  bankCorrAccount?: string;
  bankBik?: string;
  ogrn?: string;
  okpo?: string;
  contactPerson?: string;
  contactEmail: string;
  contactPhone: string;
}
