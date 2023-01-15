import type AttributeObject from "@/types/AttributeObject"

export default interface PartObject {
    oem: string;
    name: string;
    codeonimage: string;
    ssd: string;
    match: string;
    filter: string;
    links: string[];
    attributes: AttributeObject[];
}