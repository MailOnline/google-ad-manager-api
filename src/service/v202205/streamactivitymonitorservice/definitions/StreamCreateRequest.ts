
/**
 * streamCreateRequest
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface StreamCreateRequest {
    /** xsd:string */
    url?: string;
    /** xsd:string */
    userAgent?: string;
    /** ReportingType|xsd:string|DISABLED,CLIENT,SERVER,AD_MEDIA,UNKNOWN */
    reportingType?: string;
}
