export default interface GroupObject {
    contains: string;
    name: string;
    synonyms: string;
    quickgroupid: string;
    searchable: Boolean;
    childGroups: GroupObject[];
}