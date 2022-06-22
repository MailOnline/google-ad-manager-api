import { StreamCreateRequest } from "./StreamCreateRequest";
import { AdBreaks } from "./AdBreaks";
import { StartDateTime } from "./StartDateTime";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval {
    /** xsd:string */
    sessionId?: string;
    /** xsd:boolean */
    isVodSession?: string;
    /** streamCreateRequest */
    streamCreateRequest?: StreamCreateRequest;
    /** adBreaks[] */
    adBreaks?: Array<AdBreaks>;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** xsd:long */
    sessionDurationMillis?: string;
    /** xsd:long */
    contentDurationMillis?: string;
}
