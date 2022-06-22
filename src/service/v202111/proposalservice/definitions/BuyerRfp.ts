import { CostPerUnit } from "./CostPerUnit";
import { StartDateTime } from "./StartDateTime";
import { CreativePlaceholders } from "./CreativePlaceholders";
import { Targeting } from "./Targeting";

/**
 * buyerRfp
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface BuyerRfp {
    /** costPerUnit */
    costPerUnit?: CostPerUnit;
    /** xsd:long */
    units?: string;
    /** budget */
    budget?: CostPerUnit;
    /** xsd:string */
    currencyCode?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:string */
    description?: string;
    /** creativePlaceholders[] */
    creativePlaceholders?: Array<CreativePlaceholders>;
    /** targeting */
    targeting?: Targeting;
    /** xsd:string */
    additionalTerms?: string;
    /** AdExchangeEnvironment|xsd:string|DISPLAY,VIDEO,GAMES,MOBILE,MOBILE_OUTSTREAM_VIDEO,DISPLAY_OUTSTREAM_VIDEO,UNKNOWN */
    adExchangeEnvironment?: string;
    /** RfpType|xsd:string|UNKNOWN,PROGRAMMATIC_GUARANTEED,PREFERRED_DEAL */
    rfpType?: string;
}
