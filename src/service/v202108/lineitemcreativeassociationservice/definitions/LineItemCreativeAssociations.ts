import { StartDateTime } from "./StartDateTime";
import { Sizes } from "./Sizes";
import { Stats } from "./Stats";

/**
 * lineItemCreativeAssociations
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface LineItemCreativeAssociations {
    /** xsd:long */
    lineItemId?: string;
    /** xsd:long */
    creativeId?: string;
    /** xsd:long */
    creativeSetId?: string;
    /** xsd:double */
    manualCreativeRotationWeight?: string;
    /** xsd:int */
    sequentialCreativeRotationIndex?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** StartDateTimeType|xsd:string|USE_START_DATE_TIME,IMMEDIATELY,ONE_HOUR_FROM_NOW,UNKNOWN */
    startDateTimeType?: string;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:string */
    destinationUrl?: string;
    /** sizes[] */
    sizes?: Array<Sizes>;
    /** LineItemCreativeAssociation.Status|xsd:string|ACTIVE,NOT_SERVING,INACTIVE,UNKNOWN */
    status?: string;
    /** stats */
    stats?: Stats;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: StartDateTime;
    /** xsd:string */
    targetingName?: string;
}
