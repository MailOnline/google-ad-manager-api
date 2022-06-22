
/**
 * targetingCriteriaBreakdowns
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface TargetingCriteriaBreakdowns {
    /** TargetingDimension|xsd:string|CUSTOM_CRITERIA,GEOGRAPHY,BROWSER,BROWSER_LANGUAGE,BANDWIDTH_GROUP,OPERATING_SYSTEM,USER_DOMAIN,CONTENT,VIDEO_POSITION,AD_SIZE,AD_UNIT,PLACEMENT,MOBILE_CARRIER,DEVICE_CAPABILITY,DEVICE_CATEGORY,DEVICE_MANUFACTURER,MOBILE_APPLICATION,FORECASTED_CREATIVE_RESTRICTION,UNKNOWN */
    targetingDimension?: string;
    /** xsd:long */
    targetingCriteriaId?: string;
    /** xsd:string */
    targetingCriteriaName?: string;
    /** xsd:boolean */
    excluded?: string;
    /** xsd:long */
    availableUnits?: string;
    /** xsd:long */
    matchedUnits?: string;
}
