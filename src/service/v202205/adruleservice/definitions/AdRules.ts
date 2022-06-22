import { Targeting } from "./Targeting";
import { StartDateTime } from "./StartDateTime";
import { Preroll } from "./Preroll";

/**
 * adRules
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface AdRules {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    priority?: string;
    /** targeting */
    targeting?: Targeting;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** StartDateTimeType|xsd:string|USE_START_DATE_TIME,IMMEDIATELY,ONE_HOUR_FROM_NOW,UNKNOWN */
    startDateTimeType?: string;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:boolean */
    unlimitedEndDateTime?: string;
    /** AdRuleStatus|xsd:string|ACTIVE,INACTIVE,DELETED,UNKNOWN */
    status?: string;
    /** FrequencyCapBehavior|xsd:string|TURN_ON,TURN_OFF,DEFER,UNKNOWN */
    frequencyCapBehavior?: string;
    /** xsd:int */
    maxImpressionsPerLineItemPerStream?: string;
    /** xsd:int */
    maxImpressionsPerLineItemPerPod?: string;
    /** preroll */
    preroll?: Preroll;
    /** midroll */
    midroll?: Preroll;
    /** postroll */
    postroll?: Preroll;
}
