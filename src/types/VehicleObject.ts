import type AttributeObject from "@/types/AttributeObject"

export default interface VehicleObject {
    catalog: string;
    name: string;
    ssd: string;
    vehicleid: string;
    brand: string;
    attributes: AttributeObject[];
    systemProperties: string[];
}