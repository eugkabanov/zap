import type ServiceInfoData from "@/types/ServiceInfoData";

export default interface ServicesData {
  value: number
  label: string
  services: Array<ServiceInfoData>
}