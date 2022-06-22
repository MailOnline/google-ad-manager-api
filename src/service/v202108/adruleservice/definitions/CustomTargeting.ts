import { Children } from "./Children";

/**
 * customTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface CustomTargeting {
    /** CustomCriteriaSet.LogicalOperator|xsd:string|AND,OR */
    logicalOperator?: string;
    /** children[] */
    children?: Array<Children>;
}
