import { DateRange } from "./DateRange";
import { DailyVolumeSettings } from "./DailyVolumeSettings";
import { TotalVolumeSettings } from "./TotalVolumeSettings";
import { HistoricalBasisVolumeSettings } from "./HistoricalBasisVolumeSettings";

/**
 * forecastAdjustment
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface ForecastAdjustment {
    /** xsd:long */
    id?: string;
    /** xsd:long */
    trafficForecastSegmentId?: string;
    /** xsd:string */
    name?: string;
    /** dateRange */
    dateRange?: DateRange;
    /** ForecastAdjustmentStatus|xsd:string|UNKNOWN,ACTIVE,INACTIVE */
    status?: string;
    /** ForecastAdjustmentVolumeType|xsd:string|UNKNOWN,DAILY_VOLUME,TOTAL_VOLUME,HISTORICAL_BASIS_VOLUME */
    volumeType?: string;
    /** xsd:boolean */
    allowAdjustingForecastAboveRecommendedLimit?: string;
    /** dailyVolumeSettings */
    dailyVolumeSettings?: DailyVolumeSettings;
    /** totalVolumeSettings */
    totalVolumeSettings?: TotalVolumeSettings;
    /** historicalBasisVolumeSettings */
    historicalBasisVolumeSettings?: HistoricalBasisVolumeSettings;
    /** xsd:long */
    calculatedDailyAdOpportunityCounts?: Array<string>;
}
