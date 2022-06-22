
/**
 * mobileApplications
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface MobileApplications {
    /** xsd:long */
    id?: string;
    /** xsd:long */
    applicationId?: string;
    /** xsd:string */
    displayName?: string;
    /** xsd:string */
    appStoreId?: string;
    /** MobileApplicationStore|xsd:string|UNKNOWN,APPLE_ITUNES,GOOGLE_PLAY,ROKU,AMAZON_FIRETV,PLAYSTATION,XBOX,SAMSUNG_TV,AMAZON_APP_STORE,OPPO_APP_STORE,SAMSUNG_APP_STORE,VIVO_APP_STORE,XIAOMI_APP_STORE */
    appStores?: Array<string>;
    /** xsd:boolean */
    isArchived?: string;
    /** xsd:string */
    appStoreName?: string;
    /** xsd:string */
    applicationCode?: string;
    /** xsd:string */
    developerName?: string;
    /** MobileApplicationPlatform|xsd:string|UNKNOWN,ANDROID,IOS,ROKU,AMAZON_FIRETV,PLAYSTATION,XBOX,SAMSUNG_TV */
    platform?: string;
    /** xsd:boolean */
    isFree?: string;
    /** xsd:string */
    downloadUrl?: string;
}
