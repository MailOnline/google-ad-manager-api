import { StartTime } from "./StartTime";

/**
 * dayParts
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface DayParts {
    /** DayOfWeek|xsd:string|MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY */
    dayOfWeek?: string;
    /** startTime */
    startTime?: StartTime;
    /** endTime */
    endTime?: StartTime;
}
