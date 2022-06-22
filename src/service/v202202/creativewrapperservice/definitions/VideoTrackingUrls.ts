import { Value } from "./Value";

/**
 * videoTrackingUrls
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface VideoTrackingUrls {
    /** ConversionEvent|xsd:string|UNKNOWN,CREATIVE_VIEW,START,SKIP_SHOWN,FIRST_QUARTILE,MIDPOINT,THIRD_QUARTILE,ENGAGED_VIEW,COMPLETE,MUTE,UNMUTE,PAUSE,REWIND,RESUME,SKIPPED,FULLSCREEN,EXPAND,COLLAPSE,ACCEPT_INVITATION,CLOSE,CLICK_TRACKING,SURVEY,CUSTOM_CLICK,MEASURABLE_IMPRESSION,VIEWABLE_IMPRESSION,VIDEO_ABANDON,FULLY_VIEWABLE_AUDIBLE_HALF_DURATION_IMPRESSION */
    key?: string;
    /** value */
    value?: Value;
}
