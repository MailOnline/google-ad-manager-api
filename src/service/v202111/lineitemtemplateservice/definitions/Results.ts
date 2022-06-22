
/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Results {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    isDefault?: string;
    /** xsd:string */
    lineItemName?: string;
    /** xsd:boolean */
    enabledForSameAdvertiserException?: string;
    /** xsd:string */
    notes?: string;
    /** LineItemType|xsd:string|SPONSORSHIP,STANDARD,NETWORK,BULK,PRICE_PRIORITY,HOUSE,LEGACY_DFP,CLICK_TRACKING,ADSENSE,AD_EXCHANGE,BUMPER,ADMOB,PREFERRED_DEAL,UNKNOWN */
    lineItemType?: string;
    /** DeliveryRateType|xsd:string|EVENLY,FRONTLOADED,AS_FAST_AS_POSSIBLE */
    deliveryRateType?: string;
    /** RoadblockingType|xsd:string|ONLY_ONE,ONE_OR_MORE,AS_MANY_AS_POSSIBLE,ALL_ROADBLOCK,CREATIVE_SET */
    roadblockingType?: string;
    /** CreativeRotationType|xsd:string|EVEN,OPTIMIZED,MANUAL,SEQUENTIAL */
    creativeRotationType?: string;
}
