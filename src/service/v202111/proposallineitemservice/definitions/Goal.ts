
/**
 * goal
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Goal {
    /** GoalType|xsd:string|NONE,LIFETIME,DAILY,UNKNOWN */
    goalType?: string;
    /** UnitType|xsd:string|IMPRESSIONS,CLICKS,CLICK_THROUGH_CPA_CONVERSIONS,VIEW_THROUGH_CPA_CONVERSIONS,TOTAL_CPA_CONVERSIONS,VIEWABLE_IMPRESSIONS,IN_TARGET_IMPRESSIONS,UNKNOWN */
    unitType?: string;
    /** xsd:long */
    units?: string;
}
