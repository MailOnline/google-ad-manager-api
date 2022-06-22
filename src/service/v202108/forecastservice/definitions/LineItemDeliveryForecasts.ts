
/**
 * lineItemDeliveryForecasts
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface LineItemDeliveryForecasts {
    /** xsd:long */
    lineItemId?: string;
    /** xsd:long */
    orderId?: string;
    /** UnitType|xsd:string|IMPRESSIONS,CLICKS,CLICK_THROUGH_CPA_CONVERSIONS,VIEW_THROUGH_CPA_CONVERSIONS,TOTAL_CPA_CONVERSIONS,VIEWABLE_IMPRESSIONS,IN_TARGET_IMPRESSIONS,UNKNOWN */
    unitType?: string;
    /** xsd:long */
    predictedDeliveryUnits?: string;
    /** xsd:long */
    deliveredUnits?: string;
    /** xsd:long */
    matchedUnits?: string;
}
