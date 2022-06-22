
/**
 * adSpots
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface AdSpots {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    displayName?: string;
    /** xsd:boolean */
    customSpot?: string;
    /** xsd:boolean */
    flexible?: string;
    /** xsd:long */
    maxDurationMillis?: string;
    /** xsd:int */
    maxNumberOfAds?: string;
    /** AdSpotTargetingType|xsd:string|NOT_REQUIRED,EXPLICITLY_TARGETED,EXPLICITLY_TARGETED_EXCEPT_HOUSE,UNKNOWN */
    targetingType?: string;
    /** xsd:boolean */
    backfillBlocked?: string;
    /** LineItemType|xsd:string|SPONSORSHIP,STANDARD,NETWORK,BULK,PRICE_PRIORITY,HOUSE,LEGACY_DFP,CLICK_TRACKING,ADSENSE,AD_EXCHANGE,BUMPER,ADMOB,PREFERRED_DEAL,UNKNOWN */
    allowedLineItemTypes?: Array<string>;
    /** xsd:boolean */
    inventorySharingBlocked?: string;
}
