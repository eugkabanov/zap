export default interface PersonRegistrationData {
  credentials: {
    login: string
    password: string
  }
  readonly id?: null;
  firstName: string;
  secondName: string;
  patronymic?: string;
  phone?: string;
  email?: string;
  allow_data_processed: boolean;
  service_office?: number;
}
