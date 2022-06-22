
/**
 * preroll
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Preroll {
    /** AdRuleSlotBehavior|xsd:string|ALWAYS_SHOW,NEVER_SHOW,DEFER,UNKNOWN */
    slotBehavior?: string;
    /** xsd:long */
    maxVideoAdDuration?: string;
    /** MidrollFrequencyType|xsd:string|NONE,EVERY_N_SECONDS,FIXED_TIME,EVERY_N_CUEPOINTS,FIXED_CUE_POINTS,UNKNOWN */
    videoMidrollFrequencyType?: string;
    /** xsd:string */
    videoMidrollFrequency?: string;
    /** AdRuleSlotBumper|xsd:string|NONE,BEFORE,AFTER,BEFORE_AND_AFTER,UNKNOWN */
    bumper?: string;
    /** xsd:long */
    maxBumperDuration?: string;
    /** xsd:long */
    maxPodDuration?: string;
    /** xsd:int */
    maxAdsInPod?: string;
    /** xsd:long */
    breakTemplateId?: string;
}
