
/**
 * thirdPartyMeasurementSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface ThirdPartyMeasurementSettings {
    /** ThirdPartyViewabilityIntegrationPartner|xsd:string|NONE,MOAT,DOUBLE_VERIFY,INTEGRAL_AD_SCIENCE,COMSCORE,TELEMETRY,MEETRICS,UNKNOWN */
    viewabilityPartner?: string;
    /** xsd:string */
    viewabilityClientId?: string;
    /** xsd:string */
    viewabilityReportingId?: string;
    /** ThirdPartyViewabilityIntegrationPartner|xsd:string|NONE,MOAT,DOUBLE_VERIFY,INTEGRAL_AD_SCIENCE,COMSCORE,TELEMETRY,MEETRICS,UNKNOWN */
    publisherViewabilityPartner?: string;
    /** xsd:string */
    publisherViewabilityClientId?: string;
    /** xsd:string */
    publisherViewabilityReportingId?: string;
    /** ThirdPartyBrandLiftIntegrationPartner|xsd:string|UNKNOWN,NONE,KANTAR_MILLWARD_BROWN,DYNATA */
    brandLiftPartner?: string;
    /** xsd:string */
    brandLiftClientId?: string;
    /** xsd:string */
    brandLiftReportingId?: string;
    /** ThirdPartyReachIntegrationPartner|xsd:string|NONE,COMSCORE,NIELSEN,KANTAR_MILLWARD_BROWN,UNKNOWN */
    reachPartner?: string;
    /** xsd:string */
    reachClientId?: string;
    /** xsd:string */
    reachReportingId?: string;
    /** ThirdPartyReachIntegrationPartner|xsd:string|NONE,COMSCORE,NIELSEN,KANTAR_MILLWARD_BROWN,UNKNOWN */
    publisherReachPartner?: string;
    /** xsd:string */
    publisherReachClientId?: string;
    /** xsd:string */
    publisherReachReportingId?: string;
}
