
/**
 * activities
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Activities {
    /** xsd:long */
    id?: string;
    /** xsd:long */
    activityGroupId?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    expectedURL?: string;
    /** Activity.Status|xsd:string|ACTIVE,INACTIVE */
    status?: string;
    /** Activity.Type|xsd:string|PAGE_VIEWS,DAILY_VISITS,CUSTOM,ITEMS_PURCHASED,TRANSACTIONS,IOS_APPLICATION_DOWNLOADS,ANDROID_APPLICATION_DOWNLOADS,UNKNOWN */
    type?: string;
}
