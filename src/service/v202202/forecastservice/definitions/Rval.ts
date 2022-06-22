import { Breakdowns } from "./Breakdowns";
import { TargetingCriteriaBreakdowns } from "./TargetingCriteriaBreakdowns";
import { ContendingLineItems } from "./ContendingLineItems";
import { AlternativeUnitTypeForecasts } from "./AlternativeUnitTypeForecasts";
import { DemographicBreakdowns } from "./DemographicBreakdowns";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval {
    /** xsd:long */
    lineItemId?: string;
    /** xsd:long */
    orderId?: string;
    /** UnitType|xsd:string|IMPRESSIONS,CLICKS,CLICK_THROUGH_CPA_CONVERSIONS,VIEW_THROUGH_CPA_CONVERSIONS,TOTAL_CPA_CONVERSIONS,VIEWABLE_IMPRESSIONS,IN_TARGET_IMPRESSIONS,UNKNOWN */
    unitType?: string;
    /** xsd:long */
    availableUnits?: string;
    /** xsd:long */
    deliveredUnits?: string;
    /** xsd:long */
    matchedUnits?: string;
    /** xsd:long */
    possibleUnits?: string;
    /** xsd:long */
    reservedUnits?: string;
    /** breakdowns[] */
    breakdowns?: Array<Breakdowns>;
    /** targetingCriteriaBreakdowns[] */
    targetingCriteriaBreakdowns?: Array<TargetingCriteriaBreakdowns>;
    /** contendingLineItems[] */
    contendingLineItems?: Array<ContendingLineItems>;
    /** alternativeUnitTypeForecasts[] */
    alternativeUnitTypeForecasts?: Array<AlternativeUnitTypeForecasts>;
    /** demographicBreakdowns[] */
    demographicBreakdowns?: Array<DemographicBreakdowns>;
}
