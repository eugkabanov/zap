import type UserDataAuth from "@/types/UserDataAuth";

export default interface UserDataRegPerson extends UserDataAuth{
  readonly id?: null;
  fio: string;
  phone: string;
  email: string;
  allow_data_processed: boolean;
  service_office: number;
}
