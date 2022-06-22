import { SecurityPolicy } from "./SecurityPolicy";

/**
 * ingestSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface IngestSettings {
    /** xsd:string */
    name?: string;
    /** xsd:string */
    urlPrefix?: string;
    /** securityPolicy */
    securityPolicy?: SecurityPolicy;
}
