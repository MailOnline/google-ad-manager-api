
/**
 * hlsIngestErrors
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface HlsIngestErrors {
    /** DaiIngestErrorReason|xsd:string|INVALID_INGEST_URL,INVALID_CLOSED_CAPTION_URL,MISSING_CLOSED_CAPTION_URL,COULD_NOT_FETCH_HLS,COULD_NOT_FETCH_SUBTITLES,MISSING_SUBTITLE_LANGUAGE,COULD_NOT_FETCH_MEDIA,MALFORMED_MEDIA_BYTES,CHAPTER_TIME_OUT_OF_BOUNDS,INTERNAL_ERROR,CONTENT_HAS_CHAPTER_TIMES_BUT_NO_MIDROLL_SETTINGS,MALFORMED_MEDIA_PLAYLIST,MIXED_AD_BREAK_TAGS,AD_BREAK_TAGS_INCONSISTENT_ACROSS_VARIANTS,MALFORMED_SUBTITLES,PLAYLIST_ITEM_URL_DOES_NOT_MATCH_INGEST_COMMON_PATH,COULD_NOT_UPLOAD_SPLIT_MEDIA_AUTHENTICATION_FAILED,COULD_NOT_UPLOAD_SPLIT_MEDIA_CONNECTION_FAILED,COULD_NOT_UPLOAD_SPLIT_MEDIA_WRITE_FAILED,PLAYLISTS_HAVE_DIFFERENT_NUMBER_OF_DISCONTINUITIES,PLAYIST_HAS_NO_STARTING_PTS_VALUE,PLAYLIST_DISCONTINUITY_PTS_VALUES_DIFFER_TOO_MUCH,SEGMENT_HAS_NO_PTS,SUBTITLE_LANGUAGE_DOES_NOT_MATCH_LANGUAGE_IN_FEED,CANNOT_DETERMINE_CORRECT_SUBTITLES_FOR_LANGUAGE,NO_CDN_CONFIGURATION_FOUND,CONTENT_HAS_MIDROLLS_BUT_NO_SPLIT_CONTENT_CONFIG,CONTENT_HAS_MIDROLLS_BUT_SOURCE_HAS_MIDROLLS_DISABLED,ADTS_PARSE_ERROR,AAC_SPLIT_ERROR,AAC_PARSE_ERROR,TS_PARSE_ERROR,TS_SPLIT_ERROR,UNSUPPORTED_CONTAINER_FORMAT,MULTIPLE_ELEMENTARY_STREAMS_OF_SAME_MEDIA_TYPE_IN_TS,UNSUPPORTED_TS_MEDIA_FORMAT,NO_IFRAMES_NEAR_CUE_POINT,AC3_SPLIT_ERROR,AC3_PARSE_ERROR,EAC3_SPLIT_ERROR,INVALID_ENCRYPTION_KEY,EAC3_PARSE_ERROR,CUE_POINT_COUNT_DOES_NOT_MATCH_PTS_COUNT,CLOSED_CAPTION_LANGUAGE_VALUE_INVALID,CLOSED_CAPTION_NAME_VALUE_INVALID,CLOSED_CAPTION_CHARACTERISTICS_VALUE_UNEXPECTED,CLOSED_CAPTIONS_WITH_DUPLICATE_KEYS,UNKNOWN */
    reason?: string;
    /** xsd:string */
    trigger?: string;
}
