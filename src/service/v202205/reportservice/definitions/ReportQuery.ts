import { StartDate } from "./StartDate";
import { FilterStatement } from "./FilterStatement";

/**
 * reportQuery
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface ReportQuery {
    /** Dimension|xsd:string|MONTH_AND_YEAR,WEEK,DATE,DAY,HOUR,LINE_ITEM_ID,LINE_ITEM_NAME,LINE_ITEM_TYPE,ORDER_ID,ORDER_NAME,ORDER_DELIVERY_STATUS,ADVERTISER_ID,ADVERTISER_NAME,AD_NETWORK_ID,AD_NETWORK_NAME,SALESPERSON_ID,SALESPERSON_NAME,CREATIVE_ID,CREATIVE_NAME,CREATIVE_TYPE,CREATIVE_BILLING_TYPE,CUSTOM_EVENT_ID,CUSTOM_EVENT_NAME,CUSTOM_EVENT_TYPE,CREATIVE_SIZE,AD_UNIT_ID,AD_UNIT_NAME,PARENT_AD_UNIT_ID,PARENT_AD_UNIT_NAME,PLACEMENT_ID,PLACEMENT_NAME,PLACEMENT_STATUS,TARGETING,BROWSER_NAME,DEVICE_CATEGORY_ID,DEVICE_CATEGORY_NAME,COUNTRY_CRITERIA_ID,COUNTRY_CODE,COUNTRY_NAME,REGION_CRITERIA_ID,REGION_NAME,CITY_CRITERIA_ID,CITY_NAME,METRO_CRITERIA_ID,METRO_NAME,POSTAL_CODE_CRITERIA_ID,POSTAL_CODE,CUSTOM_TARGETING_VALUE_ID,CUSTOM_CRITERIA,ACTIVITY_ID,ACTIVITY_NAME,ACTIVITY_GROUP_ID,ACTIVITY_GROUP_NAME,CONTENT_ID,CONTENT_NAME,CONTENT_BUNDLE_ID,CONTENT_BUNDLE_NAME,VIDEO_METADATA_KEY_ID,VIDEO_METADATA_KEY_NAME,CMS_METADATA,VIDEO_FALLBACK_POSITION,POSITION_OF_POD,POSITION_IN_POD,CUSTOM_SPOT_ID,CUSTOM_SPOT_NAME,VIDEO_REDIRECT_THIRD_PARTY,VIDEO_BREAK_TYPE,VIDEO_BREAK_TYPE_NAME,VIDEO_VAST_VERSION,VIDEO_AD_REQUEST_DURATION_ID,VIDEO_AD_REQUEST_DURATION,VIDEO_PLACEMENT_NAME,PARTNER_MANAGEMENT_PARTNER_ID,PARTNER_MANAGEMENT_PARTNER_NAME,PARTNER_MANAGEMENT_PARTNER_LABEL_ID,PARTNER_MANAGEMENT_PARTNER_LABEL_NAME,PARTNER_MANAGEMENT_ASSIGNMENT_ID,PARTNER_MANAGEMENT_ASSIGNMENT_NAME,INVENTORY_SHARE_ASSIGNMENT_ID,INVENTORY_SHARE_ASSIGNMENT_NAME,INVENTORY_SHARE_OUTCOME,GRP_DEMOGRAPHICS,AD_REQUEST_AD_UNIT_SIZES,AD_REQUEST_CUSTOM_CRITERIA,IS_FIRST_LOOK_DEAL,YIELD_GROUP_ID,YIELD_GROUP_NAME,YIELD_PARTNER,YIELD_PARTNER_TAG,CLASSIFIED_ADVERTISER_ID,CLASSIFIED_ADVERTISER_NAME,CLASSIFIED_BRAND_ID,CLASSIFIED_BRAND_NAME,MEDIATION_TYPE,NATIVE_TEMPLATE_ID,NATIVE_TEMPLATE_NAME,NATIVE_STYLE_ID,NATIVE_STYLE_NAME,CHILD_NETWORK_CODE,MOBILE_APP_RESOLVED_ID,MOBILE_APP_NAME,MOBILE_DEVICE_NAME,MOBILE_INVENTORY_TYPE,OPERATING_SYSTEM_VERSION_ID,OPERATING_SYSTEM_VERSION_NAME,REQUEST_TYPE,AD_UNIT_STATUS,MASTER_COMPANION_CREATIVE_ID,MASTER_COMPANION_CREATIVE_NAME,AUDIENCE_SEGMENT_ID,AUDIENCE_SEGMENT_NAME,AUDIENCE_SEGMENT_DATA_PROVIDER_NAME,WEB_PROPERTY_CODE,BUYING_AGENCY_NAME,BUYER_NETWORK_ID,BUYER_NETWORK_NAME,BIDDER_ID,BIDDER_NAME,ADVERTISER_DOMAIN_NAME,AD_EXCHANGE_OPTIMIZATION_TYPE,ADVERTISER_VERTICAL_NAME,NIELSEN_SEGMENT,NIELSEN_DEMOGRAPHICS,NIELSEN_RESTATEMENT_DATE,NIELSEN_DEVICE_ID,NIELSEN_DEVICE_NAME,PROGRAMMATIC_BUYER_ID,PROGRAMMATIC_BUYER_NAME,REQUESTED_AD_SIZES,CREATIVE_SIZE_DELIVERED,PROGRAMMATIC_CHANNEL_ID,PROGRAMMATIC_CHANNEL_NAME,CLASSIFIED_YIELD_PARTNER_NAME,DP_DATE,DP_WEEK,DP_MONTH_YEAR,DP_COUNTRY_CRITERIA_ID,DP_COUNTRY_NAME,DP_INVENTORY_TYPE,DP_CREATIVE_SIZE,DP_BRAND_NAME,DP_ADVERTISER_NAME,DP_ADX_BUYER_NETWORK_NAME,DP_MOBILE_DEVICE_NAME,DP_DEVICE_CATEGORY_NAME,DP_TAG_ID,DP_DEAL_ID,DP_APP_ID,CUSTOM_DIMENSION,DEMAND_CHANNEL_ID,DEMAND_CHANNEL_NAME,DOMAIN,SERVING_RESTRICTION_ID,SERVING_RESTRICTION_NAME,UNIFIED_PRICING_RULE_ID,UNIFIED_PRICING_RULE_NAME,FIRST_LOOK_PRICING_RULE_ID,FIRST_LOOK_PRICING_RULE_NAME,PROGRAMMATIC_DEAL_ID,PROGRAMMATIC_DEAL_NAME,SITE_NAME,CHANNEL_NAME,URL_ID,URL_NAME,VIDEO_AD_DURATION,VIDEO_AD_TYPE_ID,VIDEO_AD_TYPE_NAME,AD_EXCHANGE_PRODUCT_CODE,AD_EXCHANGE_PRODUCT_NAME,DYNAMIC_ALLOCATION_ID,DYNAMIC_ALLOCATION_NAME,AD_TYPE_ID,AD_TYPE_NAME,AD_LOCATION_ID,AD_LOCATION_NAME,TARGETING_TYPE_CODE,TARGETING_TYPE_NAME,BRANDING_TYPE_CODE,BRANDING_TYPE_NAME,INVENTORY_OWNERSHIP_CODE,INVENTORY_OWNERSHIP_NAME,NETWORK_PARTNER_ID,NETWORK_PARTNER_NAME,BANDWIDTH_ID,BANDWIDTH_NAME,CARRIER_ID,CARRIER_NAME */
    dimensions?: Array<string>;
    /** ReportQuery.AdUnitView|xsd:string|TOP_LEVEL,FLAT,HIERARCHICAL */
    adUnitView?: string;
    /** Column|xsd:string|AD_SERVER_IMPRESSIONS,AD_SERVER_TARGETED_IMPRESSIONS,AD_SERVER_CLICKS,AD_SERVER_TARGETED_CLICKS,AD_SERVER_CTR,AD_SERVER_CPM_AND_CPC_REVENUE,AD_SERVER_CPD_REVENUE,AD_SERVER_CPA_REVENUE,AD_SERVER_ALL_REVENUE,AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM,AD_SERVER_WITH_CPD_AVERAGE_ECPM,AD_SERVER_LINE_ITEM_LEVEL_PERCENT_IMPRESSIONS,AD_SERVER_LINE_ITEM_LEVEL_PERCENT_CLICKS,AD_SERVER_LINE_ITEM_LEVEL_WITHOUT_CPD_PERCENT_REVENUE,AD_SERVER_LINE_ITEM_LEVEL_WITH_CPD_PERCENT_REVENUE,AD_SERVER_UNFILTERED_IMPRESSIONS,AD_SERVER_UNFILTERED_CLICKS,ADSENSE_LINE_ITEM_LEVEL_IMPRESSIONS,ADSENSE_LINE_ITEM_LEVEL_TARGETED_IMPRESSIONS,ADSENSE_LINE_ITEM_LEVEL_CLICKS,ADSENSE_LINE_ITEM_LEVEL_TARGETED_CLICKS,ADSENSE_LINE_ITEM_LEVEL_CTR,ADSENSE_LINE_ITEM_LEVEL_REVENUE,ADSENSE_LINE_ITEM_LEVEL_AVERAGE_ECPM,ADSENSE_LINE_ITEM_LEVEL_PERCENT_IMPRESSIONS,ADSENSE_LINE_ITEM_LEVEL_PERCENT_CLICKS,ADSENSE_LINE_ITEM_LEVEL_WITHOUT_CPD_PERCENT_REVENUE,ADSENSE_LINE_ITEM_LEVEL_WITH_CPD_PERCENT_REVENUE,AD_EXCHANGE_LINE_ITEM_LEVEL_IMPRESSIONS,MEDIATION_THIRD_PARTY_ECPM,AD_EXCHANGE_LINE_ITEM_LEVEL_TARGETED_IMPRESSIONS,AD_EXCHANGE_LINE_ITEM_LEVEL_CLICKS,AD_EXCHANGE_LINE_ITEM_LEVEL_TARGETED_CLICKS,AD_EXCHANGE_LINE_ITEM_LEVEL_CTR,AD_EXCHANGE_LINE_ITEM_LEVEL_PERCENT_IMPRESSIONS,AD_EXCHANGE_LINE_ITEM_LEVEL_PERCENT_CLICKS,AD_EXCHANGE_LINE_ITEM_LEVEL_REVENUE,AD_EXCHANGE_LINE_ITEM_LEVEL_WITHOUT_CPD_PERCENT_REVENUE,AD_EXCHANGE_LINE_ITEM_LEVEL_WITH_CPD_PERCENT_REVENUE,AD_EXCHANGE_LINE_ITEM_LEVEL_AVERAGE_ECPM,TOTAL_LINE_ITEM_LEVEL_IMPRESSIONS,TOTAL_LINE_ITEM_LEVEL_TARGETED_IMPRESSIONS,TOTAL_LINE_ITEM_LEVEL_CLICKS,TOTAL_LINE_ITEM_LEVEL_TARGETED_CLICKS,TOTAL_LINE_ITEM_LEVEL_CTR,TOTAL_LINE_ITEM_LEVEL_CPM_AND_CPC_REVENUE,TOTAL_LINE_ITEM_LEVEL_ALL_REVENUE,TOTAL_LINE_ITEM_LEVEL_WITHOUT_CPD_AVERAGE_ECPM,TOTAL_LINE_ITEM_LEVEL_WITH_CPD_AVERAGE_ECPM,TOTAL_CODE_SERVED_COUNT,TOTAL_AD_REQUESTS,TOTAL_RESPONSES_SERVED,TOTAL_UNMATCHED_AD_REQUESTS,TOTAL_FILL_RATE,AD_SERVER_RESPONSES_SERVED,ADSENSE_RESPONSES_SERVED,AD_EXCHANGE_RESPONSES_SERVED,TOTAL_VIDEO_OPPORTUNITIES,TOTAL_VIDEO_CAPPED_OPPORTUNITIES,TOTAL_VIDEO_MATCHED_OPPORTUNITIES,TOTAL_VIDEO_MATCHED_DURATION,TOTAL_VIDEO_DURATION,TOTAL_VIDEO_BREAK_START,TOTAL_VIDEO_BREAK_END,TOTAL_INVENTORY_LEVEL_UNFILLED_IMPRESSIONS,OPTIMIZATION_CONTROL_IMPRESSIONS,OPTIMIZATION_CONTROL_CLICKS,OPTIMIZATION_CONTROL_CTR,OPTIMIZATION_OPTIMIZED_IMPRESSIONS,OPTIMIZATION_OPTIMIZED_CLICKS,OPTIMIZATION_NON_OPTIMIZED_IMPRESSIONS,OPTIMIZATION_NON_OPTIMIZED_CLICKS,OPTIMIZATION_EXTRA_CLICKS,OPTIMIZATION_OPTIMIZED_CTR,OPTIMIZATION_LIFT,OPTIMIZATION_COVERAGE,OPTIMIZATION_BEHIND_SCHEDULE_IMPRESSIONS,OPTIMIZATION_NO_CLICKS_RECORDED_IMPRESSIONS,OPTIMIZATION_SPONSORSHIP_IMPRESSIONS,OPTIMIZATION_AS_FAST_AS_POSSIBLE_IMPRESSIONS,OPTIMIZATION_NO_ABSOLUTE_LIFETIME_GOAL_IMPRESSIONS,OPTIMIZATION_CONTROL_REVENUE,OPTIMIZATION_OPTIMIZED_REVENUE,OPTIMIZATION_CONTROL_ECPM,OPTIMIZATION_OPTIMIZED_ECPM,OPTIMIZATION_FREED_UP_IMPRESSIONS,OPTIMIZATION_ECPM_LIFT,UNIQUE_REACH_FREQUENCY,UNIQUE_REACH_IMPRESSIONS,UNIQUE_REACH,SDK_MEDIATION_CREATIVE_IMPRESSIONS,SDK_MEDIATION_CREATIVE_CLICKS,SELL_THROUGH_FORECASTED_IMPRESSIONS,SELL_THROUGH_AVAILABLE_IMPRESSIONS,SELL_THROUGH_RESERVED_IMPRESSIONS,SELL_THROUGH_SELL_THROUGH_RATE,RICH_MEDIA_BACKUP_IMAGES,RICH_MEDIA_DISPLAY_TIME,RICH_MEDIA_AVERAGE_DISPLAY_TIME,RICH_MEDIA_EXPANSIONS,RICH_MEDIA_EXPANDING_TIME,RICH_MEDIA_INTERACTION_TIME,RICH_MEDIA_INTERACTION_COUNT,RICH_MEDIA_INTERACTION_RATE,RICH_MEDIA_AVERAGE_INTERACTION_TIME,RICH_MEDIA_INTERACTION_IMPRESSIONS,RICH_MEDIA_MANUAL_CLOSES,RICH_MEDIA_FULL_SCREEN_IMPRESSIONS,RICH_MEDIA_VIDEO_INTERACTIONS,RICH_MEDIA_VIDEO_INTERACTION_RATE,RICH_MEDIA_VIDEO_MUTES,RICH_MEDIA_VIDEO_PAUSES,RICH_MEDIA_VIDEO_PLAYES,RICH_MEDIA_VIDEO_MIDPOINTS,RICH_MEDIA_VIDEO_COMPLETES,RICH_MEDIA_VIDEO_REPLAYS,RICH_MEDIA_VIDEO_STOPS,RICH_MEDIA_VIDEO_UNMUTES,RICH_MEDIA_VIDEO_VIEW_TIME,RICH_MEDIA_VIDEO_VIEW_RATE,RICH_MEDIA_CUSTOM_EVENT_TIME,RICH_MEDIA_CUSTOM_EVENT_COUNT,VIDEO_VIEWERSHIP_START,VIDEO_VIEWERSHIP_FIRST_QUARTILE,VIDEO_VIEWERSHIP_MIDPOINT,VIDEO_VIEWERSHIP_THIRD_QUARTILE,VIDEO_VIEWERSHIP_COMPLETE,VIDEO_VIEWERSHIP_AVERAGE_VIEW_RATE,VIDEO_VIEWERSHIP_AVERAGE_VIEW_TIME,VIDEO_VIEWERSHIP_COMPLETION_RATE,VIDEO_VIEWERSHIP_TOTAL_ERROR_COUNT,VIDEO_VIEWERSHIP_VIDEO_LENGTH,VIDEO_VIEWERSHIP_SKIP_BUTTON_SHOWN,VIDEO_VIEWERSHIP_ENGAGED_VIEW,VIDEO_VIEWERSHIP_VIEW_THROUGH_RATE,VIDEO_VIEWERSHIP_AUTO_PLAYS,VIDEO_VIEWERSHIP_CLICK_TO_PLAYS,VIDEO_VIEWERSHIP_TOTAL_ERROR_RATE,DROPOFF_RATE,VIDEO_TRUEVIEW_VIEWS,VIDEO_TRUEVIEW_SKIP_RATE,VIDEO_TRUEVIEW_VTR,VIDEO_ERRORS_VAST_ERROR_100_COUNT,VIDEO_ERRORS_VAST_ERROR_101_COUNT,VIDEO_ERRORS_VAST_ERROR_102_COUNT,VIDEO_ERRORS_VAST_ERROR_200_COUNT,VIDEO_ERRORS_VAST_ERROR_201_COUNT,VIDEO_ERRORS_VAST_ERROR_202_COUNT,VIDEO_ERRORS_VAST_ERROR_203_COUNT,VIDEO_ERRORS_VAST_ERROR_300_COUNT,VIDEO_ERRORS_VAST_ERROR_301_COUNT,VIDEO_ERRORS_VAST_ERROR_302_COUNT,VIDEO_ERRORS_VAST_ERROR_303_COUNT,VIDEO_ERRORS_VAST_ERROR_400_COUNT,VIDEO_ERRORS_VAST_ERROR_401_COUNT,VIDEO_ERRORS_VAST_ERROR_402_COUNT,VIDEO_ERRORS_VAST_ERROR_403_COUNT,VIDEO_ERRORS_VAST_ERROR_405_COUNT,VIDEO_ERRORS_VAST_ERROR_500_COUNT,VIDEO_ERRORS_VAST_ERROR_501_COUNT,VIDEO_ERRORS_VAST_ERROR_502_COUNT,VIDEO_ERRORS_VAST_ERROR_503_COUNT,VIDEO_ERRORS_VAST_ERROR_600_COUNT,VIDEO_ERRORS_VAST_ERROR_601_COUNT,VIDEO_ERRORS_VAST_ERROR_602_COUNT,VIDEO_ERRORS_VAST_ERROR_603_COUNT,VIDEO_ERRORS_VAST_ERROR_604_COUNT,VIDEO_ERRORS_VAST_ERROR_900_COUNT,VIDEO_ERRORS_VAST_ERROR_901_COUNT,VIDEO_INTERACTION_PAUSE,VIDEO_INTERACTION_RESUME,VIDEO_INTERACTION_REWIND,VIDEO_INTERACTION_MUTE,VIDEO_INTERACTION_UNMUTE,VIDEO_INTERACTION_COLLAPSE,VIDEO_INTERACTION_EXPAND,VIDEO_INTERACTION_FULL_SCREEN,VIDEO_INTERACTION_AVERAGE_INTERACTION_RATE,VIDEO_INTERACTION_VIDEO_SKIPS,VIDEO_OPTIMIZATION_CONTROL_STARTS,VIDEO_OPTIMIZATION_OPTIMIZED_STARTS,VIDEO_OPTIMIZATION_CONTROL_COMPLETES,VIDEO_OPTIMIZATION_OPTIMIZED_COMPLETES,VIDEO_OPTIMIZATION_CONTROL_COMPLETION_RATE,VIDEO_OPTIMIZATION_OPTIMIZED_COMPLETION_RATE,VIDEO_OPTIMIZATION_COMPLETION_RATE_LIFT,VIDEO_OPTIMIZATION_CONTROL_SKIP_BUTTON_SHOWN,VIDEO_OPTIMIZATION_OPTIMIZED_SKIP_BUTTON_SHOWN,VIDEO_OPTIMIZATION_CONTROL_ENGAGED_VIEW,VIDEO_OPTIMIZATION_OPTIMIZED_ENGAGED_VIEW,VIDEO_OPTIMIZATION_CONTROL_VIEW_THROUGH_RATE,VIDEO_OPTIMIZATION_OPTIMIZED_VIEW_THROUGH_RATE,VIDEO_OPTIMIZATION_VIEW_THROUGH_RATE_LIFT,TOTAL_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS,TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS,TOTAL_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS_RATE,TOTAL_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS,TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS_RATE,TOTAL_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME,AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS,AD_SERVER_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS,AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS_RATE,AD_SERVER_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS,AD_SERVER_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS_RATE,AD_SERVER_ACTIVE_VIEW_REVENUE,AD_SERVER_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME,ADSENSE_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS,ADSENSE_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS,ADSENSE_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS_RATE,ADSENSE_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS,ADSENSE_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS_RATE,ADSENSE_ACTIVE_VIEW_REVENUE,ADSENSE_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME,AD_EXCHANGE_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS,AD_EXCHANGE_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS,AD_EXCHANGE_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS_RATE,AD_EXCHANGE_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS,AD_EXCHANGE_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS_RATE,AD_EXCHANGE_ACTIVE_VIEW_REVENUE,AD_EXCHANGE_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME,AD_EXCHANGE_TOTAL_REQUESTS,AD_EXCHANGE_MATCH_RATE,AD_EXCHANGE_COST_PER_CLICK,AD_EXCHANGE_TOTAL_REQUEST_CTR,AD_EXCHANGE_MATCHED_REQUEST_CTR,AD_EXCHANGE_TOTAL_REQUEST_ECPM,AD_EXCHANGE_MATCHED_REQUEST_ECPM,AD_EXCHANGE_LIFT_EARNINGS,TOTAL_ACTIVE_VIEW_REVENUE,VIEW_THROUGH_CONVERSIONS,CONVERSIONS_PER_THOUSAND_IMPRESSIONS,CLICK_THROUGH_CONVERSIONS,CONVERSIONS_PER_CLICK,VIEW_THROUGH_REVENUE,CLICK_THROUGH_REVENUE,TOTAL_CONVERSIONS,TOTAL_CONVERSION_REVENUE,DYNAMIC_ALLOCATION_OPPORTUNITY_IMPRESSIONS_COMPETING_TOTAL,DYNAMIC_ALLOCATION_OPPORTUNITY_UNFILLED_IMPRESSIONS_COMPETING,DYNAMIC_ALLOCATION_OPPORTUNITY_ELIGIBLE_IMPRESSIONS_TOTAL,DYNAMIC_ALLOCATION_OPPORTUNITY_IMPRESSIONS_NOT_COMPETING_TOTAL,DYNAMIC_ALLOCATION_OPPORTUNITY_IMPRESSIONS_NOT_COMPETING_PERCENT_TOTAL,DYNAMIC_ALLOCATION_OPPORTUNITY_SATURATION_RATE_TOTAL,DYNAMIC_ALLOCATION_OPPORTUNITY_MATCH_RATE_TOTAL,INVOICED_IMPRESSIONS,INVOICED_UNFILLED_IMPRESSIONS,NIELSEN_IMPRESSIONS,NIELSEN_IN_TARGET_IMPRESSIONS,NIELSEN_POPULATION_BASE,NIELSEN_IN_TARGET_POPULATION_BASE,NIELSEN_UNIQUE_AUDIENCE,NIELSEN_IN_TARGET_UNIQUE_AUDIENCE,NIELSEN_PERCENT_AUDIENCE_REACH,NIELSEN_IN_TARGET_PERCENT_AUDIENCE_REACH,NIELSEN_AVERAGE_FREQUENCY,NIELSEN_IN_TARGET_AVERAGE_FREQUENCY,NIELSEN_GROSS_RATING_POINTS,NIELSEN_IN_TARGET_GROSS_RATING_POINTS,NIELSEN_PERCENT_IMPRESSIONS_SHARE,NIELSEN_IN_TARGET_PERCENT_IMPRESSIONS_SHARE,NIELSEN_PERCENT_POPULATION_SHARE,NIELSEN_IN_TARGET_PERCENT_POPULATION_SHARE,NIELSEN_PERCENT_AUDIENCE_SHARE,NIELSEN_IN_TARGET_PERCENT_AUDIENCE_SHARE,NIELSEN_AUDIENCE_INDEX,NIELSEN_IN_TARGET_AUDIENCE_INDEX,NIELSEN_IMPRESSIONS_INDEX,NIELSEN_IN_TARGET_IMPRESSIONS_INDEX,DP_IMPRESSIONS,DP_CLICKS,DP_QUERIES,DP_MATCHED_QUERIES,DP_COST,DP_ECPM,DP_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS,DP_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS,DP_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS,DP_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS_RATE,DP_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS_RATE,PARTNER_MANAGEMENT_HOST_IMPRESSIONS,PARTNER_MANAGEMENT_HOST_CLICKS,PARTNER_MANAGEMENT_HOST_CTR,PARTNER_MANAGEMENT_UNFILLED_IMPRESSIONS,PARTNER_MANAGEMENT_PARTNER_IMPRESSIONS,PARTNER_MANAGEMENT_PARTNER_CLICKS,PARTNER_MANAGEMENT_PARTNER_CTR,PARTNER_MANAGEMENT_GROSS_REVENUE,PARTNER_FINANCE_HOST_IMPRESSIONS,PARTNER_FINANCE_HOST_REVENUE,PARTNER_FINANCE_HOST_ECPM,PARTNER_FINANCE_PARTNER_REVENUE,PARTNER_FINANCE_PARTNER_ECPM,PARTNER_FINANCE_GROSS_REVENUE,CREATIVE_LOAD_TIME_0_500_MS_PERCENT,CREATIVE_LOAD_TIME_500_1000_MS_PERCENT,CREATIVE_LOAD_TIME_1_2_S_PERCENT,CREATIVE_LOAD_TIME_2_4_S_PERCENT,CREATIVE_LOAD_TIME_4_8_S_PERCENT,CREATIVE_LOAD_TIME_GREATER_THAN_8_S_PERCENT,UNVIEWED_REASON_SLOT_NEVER_ENTERED_VIEWPORT_PERCENT,UNVIEWED_REASON_USER_SCROLLED_BEFORE_AD_FILLED_PERCENT,UNVIEWED_REASON_USER_SCROLLED_BEFORE_AD_LOADED_PERCENT,UNVIEWED_REASON_USER_SCROLLED_BEFORE_1_S_PERCENT,UNVIEWED_REASON_OTHER_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_0_500_MS_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_500_1000_MS_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_1_2_S_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_2_4_S_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_4_8_S_PERCENT,PAGE_NAVIGATION_TO_TAG_LOADED_TIME_GREATER_THAN_8_S_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_0_500_MS_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_500_1000_MS_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_1_2_S_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_2_4_S_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_4_8_S_PERCENT,PAGE_NAVIGATION_TO_FIRST_AD_REQUEST_TIME_GREATER_THAN_8_S_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_0_500_MS_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_500_1000_MS_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_1_2_S_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_2_4_S_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_4_8_S_PERCENT,TAG_LOAD_TO_FIRST_AD_REQUEST_TIME_GREATER_THAN_8_S_PERCENT */
    columns?: Array<string>;
    /** DimensionAttribute|xsd:string|LINE_ITEM_LABELS,LINE_ITEM_LABEL_IDS,LINE_ITEM_OPTIMIZABLE,LINE_ITEM_DELIVERY_INDICATOR,LINE_ITEM_DELIVERY_PACING,LINE_ITEM_FREQUENCY_CAP,LINE_ITEM_RECONCILIATION_STATUS,LINE_ITEM_LAST_RECONCILIATION_DATE_TIME,ADVERTISER_EXTERNAL_ID,ADVERTISER_TYPE,ADVERTISER_CREDIT_STATUS,ADVERTISER_PRIMARY_CONTACT,ORDER_START_DATE_TIME,ORDER_END_DATE_TIME,ORDER_EXTERNAL_ID,ORDER_PO_NUMBER,ORDER_IS_PROGRAMMATIC,ORDER_AGENCY,ORDER_AGENCY_ID,ORDER_LABELS,ORDER_LABEL_IDS,ORDER_TRAFFICKER,ORDER_TRAFFICKER_ID,ORDER_SECONDARY_TRAFFICKERS,ORDER_SALESPERSON,ORDER_SECONDARY_SALESPEOPLE,ORDER_LIFETIME_IMPRESSIONS,ORDER_LIFETIME_CLICKS,ORDER_BOOKED_CPM,ORDER_BOOKED_CPC,LINE_ITEM_START_DATE_TIME,LINE_ITEM_END_DATE_TIME,LINE_ITEM_EXTERNAL_ID,LINE_ITEM_COST_TYPE,LINE_ITEM_COST_PER_UNIT,LINE_ITEM_CURRENCY_CODE,LINE_ITEM_GOAL_QUANTITY,LINE_ITEM_AVERAGE_NUMBER_OF_VIEWERS,LINE_ITEM_SPONSORSHIP_GOAL_PERCENTAGE,LINE_ITEM_LIFETIME_IMPRESSIONS,LINE_ITEM_LIFETIME_CLICKS,LINE_ITEM_PRIORITY,CREATIVE_OR_CREATIVE_SET,MASTER_COMPANION_TYPE,LINE_ITEM_CONTRACTED_QUANTITY,LINE_ITEM_DISCOUNT,LINE_ITEM_NON_CPD_BOOKED_REVENUE,ADVERTISER_LABELS,ADVERTISER_LABEL_IDS,CREATIVE_CLICK_THROUGH_URL,CREATIVE_SSL_SCAN_RESULT,CREATIVE_SSL_COMPLIANCE_OVERRIDE,LINE_ITEM_CREATIVE_START_DATE,LINE_ITEM_CREATIVE_END_DATE,CONTENT_CMS_NAME,CONTENT_CMS_VIDEO_ID,AD_UNIT_CODE */
    dimensionAttributes?: Array<string>;
    /** xsd:long */
    customFieldIds?: Array<string>;
    /** xsd:long */
    cmsMetadataKeyIds?: Array<string>;
    /** xsd:long */
    customDimensionKeyIds?: Array<string>;
    /** startDate */
    startDate?: StartDate;
    /** endDate */
    endDate?: StartDate;
    /** DateRangeType|xsd:string|TODAY,YESTERDAY,LAST_WEEK,LAST_MONTH,LAST_3_MONTHS,REACH_LIFETIME,CUSTOM_DATE,NEXT_DAY,NEXT_90_DAYS,NEXT_WEEK,NEXT_MONTH,CURRENT_AND_NEXT_MONTH,NEXT_QUARTER,NEXT_3_MONTHS,NEXT_12_MONTHS */
    dateRangeType?: string;
    /** statement */
    statement?: FilterStatement;
    /** xsd:string */
    reportCurrency?: string;
}
