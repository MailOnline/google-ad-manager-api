import { CreationDateTime } from "./CreationDateTime";
import { HlsSettings } from "./HlsSettings";
import { PrefetchSettings } from "./PrefetchSettings";

/**
 * liveStreamEvents
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface LiveStreamEvents {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** LiveStreamEventStatus|xsd:string|ACTIVE,ARCHIVED,PAUSED,ADS_PAUSED,UNKNOWN */
    status?: string;
    /** creationDateTime */
    creationDateTime?: CreationDateTime;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: CreationDateTime;
    /** startDateTime */
    startDateTime?: CreationDateTime;
    /** StartDateTimeType|xsd:string|USE_START_DATE_TIME,IMMEDIATELY,ONE_HOUR_FROM_NOW,UNKNOWN */
    startDateTimeType?: string;
    /** endDateTime */
    endDateTime?: CreationDateTime;
    /** xsd:boolean */
    unlimitedEndDateTime?: string;
    /** xsd:long */
    totalEstimatedConcurrentUsers?: string;
    /** xsd:string */
    contentUrls?: Array<string>;
    /** xsd:string */
    adTags?: Array<string>;
    /** xsd:string */
    assetKey?: string;
    /** xsd:long */
    slateCreativeId?: string;
    /** xsd:int */
    dvrWindowSeconds?: string;
    /** xsd:boolean */
    enableDaiAuthenticationKeys?: string;
    /** AdBreakFillType|xsd:string|SLATE,UNDERLYING_CONTENT,UNKNOWN */
    adBreakFillType?: string;
    /** AdBreakFillType|xsd:string|SLATE,UNDERLYING_CONTENT,UNKNOWN */
    underfillAdBreakFillType?: string;
    /** xsd:long */
    adHolidayDuration?: string;
    /** xsd:boolean */
    enableMaxFillerDuration?: string;
    /** xsd:long */
    maxFillerDuration?: string;
    /** xsd:boolean */
    enableDurationlessAdBreaks?: string;
    /** xsd:long */
    defaultAdBreakDuration?: string;
    /** xsd:long */
    streamCreateDaiAuthenticationKeyIds?: Array<string>;
    /** xsd:long */
    sourceContentConfigurationIds?: Array<string>;
    /** hlsSettings */
    hlsSettings?: HlsSettings;
    /** xsd:boolean */
    enableAllowlistedIps?: string;
    /** DynamicAdInsertionType|xsd:string|LINEAR,POD_SERVING_REDIRECT,POD_SERVING_MANIFEST,UNKNOWN */
    dynamicAdInsertionType?: string;
    /** xsd:boolean */
    enableRelativePlaylistDelivery?: string;
    /** StreamingFormat|xsd:string|HLS,DASH,UNKNOWN */
    streamingFormat?: string;
    /** xsd:boolean */
    prefetchEnabled?: string;
    /** prefetchSettings */
    prefetchSettings?: PrefetchSettings;
    /** xsd:boolean */
    enableForceCloseAdBreaks?: string;
    /** xsd:boolean */
    enableShortSegmentDropping?: string;
    /** xsd:string */
    customAssetKey?: string;
    /** xsd:long */
    daiEncodingProfileIds?: Array<string>;
    /** xsd:long */
    segmentUrlAuthenticationKeyIds?: Array<string>;
    /** AdBreakMarkupType|xsd:string|AD_BREAK_MARKUP_HLS_EXT_CUE,AD_BREAK_MARKUP_HLS_PRIMETIME_SPLICE,AD_BREAK_MARKUP_HLS_DATERANGE_SPLICE,AD_BREAK_MARKUP_SCTE35_XML_SPLICE_INSERT,AD_BREAK_MARKUP_SCTE35_BINARY_SPLICE_INSERT,AD_BREAK_MARKUP_SCTE35_BINARY_PROVIDER_AD_START_END,AD_BREAK_MARKUP_SCTE35_BINARY_PROVIDER_PLACEMENT_OP_START_END,UNKNOWN */
    adBreakMarkups?: Array<string>;
    /** xsd:boolean */
    adBreakMarkupTypesEnabled?: string;
    /** AdServingFormat|xsd:string|AD_MANAGER_DAI,DIRECT,UNKNOWN */
    adServingFormat?: string;
}
