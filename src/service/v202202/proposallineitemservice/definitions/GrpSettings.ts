
/**
 * grpSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface GrpSettings {
    /** xsd:long */
    minTargetAge?: string;
    /** xsd:long */
    maxTargetAge?: string;
    /** GrpTargetGender|xsd:string|UNKNOWN,MALE,FEMALE,BOTH */
    targetGender?: string;
    /** GrpProvider|xsd:string|UNKNOWN,NIELSEN,GOOGLE */
    provider?: string;
    /** xsd:long */
    targetImpressionGoal?: string;
    /** xsd:long */
    inTargetRatioEstimateMilliPercent?: string;
    /** NielsenCtvPacingType|xsd:string|UNKNOWN,NONE,COVIEW,STRICT_COVIEW */
    nielsenCtvPacingType?: string;
    /** PacingDeviceCategorizationType|xsd:string|UNKNOWN,GOOGLE,NIELSEN */
    pacingDeviceCategorizationType?: string;
    /** xsd:boolean */
    applyTrueCoview?: string;
}
