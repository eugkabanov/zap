import type UserData from "@/types/UserData";

export default interface UserDataLegal extends UserData{
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
