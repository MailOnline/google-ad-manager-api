import { CostPerUnit } from "./CostPerUnit";

/**
 * activityAssociations
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface ActivityAssociations {
    /** xsd:int */
    activityId?: string;
    /** clickThroughConversionCost */
    clickThroughConversionCost?: CostPerUnit;
    /** viewThroughConversionCost */
    viewThroughConversionCost?: CostPerUnit;
}
