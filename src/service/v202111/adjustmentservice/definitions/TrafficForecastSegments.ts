import { Targeting } from "./Targeting";
import { StartDateTime } from "./StartDateTime";

/**
 * trafficForecastSegments
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface TrafficForecastSegments {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** targeting */
    targeting?: Targeting;
    /** xsd:int */
    activeForecastAdjustmentCount?: string;
    /** creationDateTime */
    creationDateTime?: StartDateTime;
}
