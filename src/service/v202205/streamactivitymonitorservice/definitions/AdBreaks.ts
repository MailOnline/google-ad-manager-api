import { RootAdResponses } from "./RootAdResponses";
import { AdDecisionCreatives } from "./AdDecisionCreatives";
import { StartDateTime } from "./StartDateTime";
import { SamError } from "./SamError";
import { TrackingEvents } from "./TrackingEvents";

/**
 * adBreaks
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface AdBreaks {
    /** rootAdResponses[] */
    rootAdResponses?: Array<RootAdResponses>;
    /** adDecisionCreatives[] */
    adDecisionCreatives?: Array<AdDecisionCreatives>;
    /** xsd:int */
    podNum?: string;
    /** xsd:int */
    linearAbsolutePodNum?: string;
    /** xsd:long */
    adBreakDurationMillis?: string;
    /** xsd:long */
    filledDurationMillis?: string;
    /** xsd:long */
    servedDurationMillis?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** xsd:long */
    startTimeOffsetMillis?: string;
    /** samError */
    samError?: SamError;
    /** xsd:int */
    midrollIndex?: string;
    /** xsd:boolean */
    decisionedAds?: string;
    /** trackingEvents[] */
    trackingEvents?: Array<TrackingEvents>;
}
