import { Stats1 } from "./Stats1";
import { CreativeSetStats } from "./CreativeSetStats";
import { CostInOrderCurrency } from "./CostInOrderCurrency";

/**
 * stats
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Stats {
    /** stats */
    stats?: Stats1;
    /** creativeSetStats[] */
    creativeSetStats?: Array<CreativeSetStats>;
    /** costInOrderCurrency */
    costInOrderCurrency?: CostInOrderCurrency;
}
