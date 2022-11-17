import type AttributeObject from "@/types/AttributeObject"

export default interface UnitObject {
    code: string;
    name: string;
    ssd: string;
    filter: string;
    unitid: string;
    imageurl: string;
    parts: string;
    attributes: AttributeObject[];
}