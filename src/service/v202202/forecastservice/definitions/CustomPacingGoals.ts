import { StartDateTime } from "./StartDateTime";

/**
 * customPacingGoals
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface CustomPacingGoals {
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** xsd:boolean */
    useLineItemStartDateTime?: string;
    /** xsd:long */
    amount?: string;
}
