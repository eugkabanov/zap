export default interface CompanyRegistrationData {
  readonly id?: null;
  allow_data_processed: boolean;
  service_office?: number;

  companyName: string;
  address?: string;
  addressId?: number;
  inn: string;
  kpp?: string;
  okpo?: string;
  bankName?: string;
  bankAccount?: string;
  bankCorrAccount?: string;
  bankBik?: string;
  ogrn?: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
}
