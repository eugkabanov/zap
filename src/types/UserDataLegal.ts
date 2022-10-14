import type UserDataRegPerson from "@/types/UserDataRegPerson";

export default interface UserDataLegal extends UserDataRegPerson{
  inn: string
  name?: string
  legal_address?: string
  fact_address?: string
  bank_name?: string
  okpo?: string
  contact_person?: string
  kpp?: string
  payment_account?: string
  correspondent_account?: string
  bik?: string
  ogrn?: string
}
