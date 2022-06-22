import { CustomPacingGoals } from "./CustomPacingGoals";

/**
 * customPacingCurve
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface CustomPacingCurve {
    /** CustomPacingGoalUnit|xsd:string|ABSOLUTE,MILLI_PERCENT,UNKNOWN */
    customPacingGoalUnit?: string;
    /** customPacingGoals[] */
    customPacingGoals?: Array<CustomPacingGoals>;
}
