import { SamError } from "./SamError";

/**
 * rootAdResponses
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface RootAdResponses {
    /** xsd:string */
    requestUrl?: string;
    /** xsd:boolean */
    isVmapRequest?: string;
    /** xsd:string */
    responseBody?: string;
    /** redirectResponses[] */
    redirectResponses?: Array<RootAdResponses>;
    /** samError */
    samError?: SamError;
    /** adErrors[] */
    adErrors?: Array<SamError>;
}
