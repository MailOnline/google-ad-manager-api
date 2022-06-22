
/**
 * creativeTranscode
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface CreativeTranscode {
    /** xsd:string */
    adServer?: string;
    /** CreativeTranscode.IdType|xsd:string|AD_ID,CREATIVE_ID,CREATIVE_ADID,UNIVERSAL_AD_ID,MEDIA_URI,MEDIA_URI_PATH,CREATIVE_ADID_WITH_FALLBACK,CANONICALIZED_MEDIA_URI,GV_REGISTRY_ID,UNKNOWN_ID_TYPE,MEDIA_URI_HASH,UNKNOWN */
    creativeIdType?: string;
    /** xsd:string */
    creativeId?: string;
}
