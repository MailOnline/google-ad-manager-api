import { BreakTemplateMembers } from "./BreakTemplateMembers";

/**
 * breakTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface BreakTemplate {
    /** xsd:long */
    id?: string;
    /** xsd:boolean */
    customTemplate?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    displayName?: string;
    /** breakTemplateMembers[] */
    breakTemplateMembers?: Array<BreakTemplateMembers>;
}
