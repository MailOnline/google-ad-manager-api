
/**
 * demographicBreakdowns
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface DemographicBreakdowns {
    /** xsd:long */
    availableUnits?: string;
    /** xsd:long */
    matchedUnits?: string;
    /** GrpUnitType|xsd:string|UNKNOWN,IMPRESSIONS */
    unitType?: string;
    /** GrpGender|xsd:string|UNKNOWN,GENDER_UNKNOWN,GENDER_FEMALE,GENDER_MALE */
    gender?: string;
    /** GrpAge|xsd:string|UNKNOWN,AGE_UNKNOWN,AGE_0_TO_17,AGE_18_TO_24,AGE_25_TO_34,AGE_35_TO_44,AGE_45_TO_54,AGE_55_TO_64,AGE_65_PLUS,AGE_18_TO_49,AGE_21_TO_34,AGE_21_TO_49,AGE_21_PLUS,AGE_25_TO_49,AGE_21_TO_44,AGE_21_TO_54,AGE_21_TO_64,AGE_35_TO_49 */
    age?: string;
}
