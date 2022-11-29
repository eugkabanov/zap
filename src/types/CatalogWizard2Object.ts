import type Option from "@/types/Option"

export default interface CatalogWizard2Object {
    allowlistvehicles: boolean;
    automatic: boolean;
    conditionId?: any;
    determined: boolean;
    name: string;
    type: string;
    value?: any;
    ssd?: any;
    options: Option[];
}