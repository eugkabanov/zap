import type UnitObject from "./UnitObject"

export default interface CategoryObject  {
    categoryid: string
    childrens: boolean
    code: string
    name: string
    parentcategoryid: string
    ssd: string
    units: UnitObject[]
}