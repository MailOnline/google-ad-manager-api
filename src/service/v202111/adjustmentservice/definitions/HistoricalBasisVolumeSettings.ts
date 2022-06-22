import { Targeting } from "./Targeting";
import { DateRange } from "./DateRange";

/**
 * historicalBasisVolumeSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface HistoricalBasisVolumeSettings {
    /** xsd:boolean */
    useParentTrafficForecastSegmentTargeting?: string;
    /** targeting */
    targeting?: Targeting;
    /** historicalDateRange */
    historicalDateRange?: DateRange;
    /** xsd:long */
    multiplierMilliPercent?: string;
}
