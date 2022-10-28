export default interface PersonRegistrationData {
  credentials: {
    login: string
    password: string
  }
  readonly id?: null;
  fio?: string;
  phone?: string;
  email?: string;
  allow_data_processed: boolean;
  service_office?: number;
}
