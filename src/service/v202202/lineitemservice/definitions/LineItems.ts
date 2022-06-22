import { StartDateTime } from "./StartDateTime";
import { CustomPacingCurve } from "./CustomPacingCurve";
import { FrequencyCaps } from "./FrequencyCaps";
import { CostPerUnit } from "./CostPerUnit";
import { CreativePlaceholders } from "./CreativePlaceholders";
import { ActivityAssociations } from "./ActivityAssociations";
import { Stats } from "./Stats";
import { DeliveryIndicator } from "./DeliveryIndicator";
import { DeliveryData } from "./DeliveryData";
import { AppliedLabels } from "./AppliedLabels";
import { CustomFieldValues } from "./CustomFieldValues";
import { ThirdPartyMeasurementSettings } from "./ThirdPartyMeasurementSettings";
import { PrimaryGoal } from "./PrimaryGoal";
import { GrpSettings } from "./GrpSettings";
import { DealInfo } from "./DealInfo";
import { Targeting } from "./Targeting";
import { CreativeTargetings } from "./CreativeTargetings";

/**
 * lineItems
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface LineItems {
    /** xsd:long */
    orderId?: string;
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    externalId?: string;
    /** xsd:string */
    orderName?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** StartDateTimeType|xsd:string|USE_START_DATE_TIME,IMMEDIATELY,ONE_HOUR_FROM_NOW,UNKNOWN */
    startDateTimeType?: string;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:int */
    autoExtensionDays?: string;
    /** xsd:boolean */
    unlimitedEndDateTime?: string;
    /** CreativeRotationType|xsd:string|EVEN,OPTIMIZED,MANUAL,SEQUENTIAL */
    creativeRotationType?: string;
    /** DeliveryRateType|xsd:string|EVENLY,FRONTLOADED,AS_FAST_AS_POSSIBLE */
    deliveryRateType?: string;
    /** DeliveryForecastSource|xsd:string|HISTORICAL,FORECASTING,CUSTOM_PACING_CURVE,UNKNOWN */
    deliveryForecastSource?: string;
    /** customPacingCurve */
    customPacingCurve?: CustomPacingCurve;
    /** RoadblockingType|xsd:string|ONLY_ONE,ONE_OR_MORE,AS_MANY_AS_POSSIBLE,ALL_ROADBLOCK,CREATIVE_SET */
    roadblockingType?: string;
    /** SkippableAdType|xsd:string|UNKNOWN,DISABLED,ENABLED,INSTREAM_SELECT,ANY */
    skippableAdType?: string;
    /** frequencyCaps[] */
    frequencyCaps?: Array<FrequencyCaps>;
    /** LineItemType|xsd:string|SPONSORSHIP,STANDARD,NETWORK,BULK,PRICE_PRIORITY,HOUSE,LEGACY_DFP,CLICK_TRACKING,ADSENSE,AD_EXCHANGE,BUMPER,ADMOB,PREFERRED_DEAL,UNKNOWN */
    lineItemType?: string;
    /** xsd:int */
    priority?: string;
    /** costPerUnit */
    costPerUnit?: CostPerUnit;
    /** valueCostPerUnit */
    valueCostPerUnit?: CostPerUnit;
    /** CostType|xsd:string|CPA,CPC,CPD,CPM,VCPM,CPM_IN_TARGET,UNKNOWN */
    costType?: string;
    /** LineItemDiscountType|xsd:string|ABSOLUTE_VALUE,PERCENTAGE */
    discountType?: string;
    /** xsd:double */
    discount?: string;
    /** xsd:long */
    contractedUnitsBought?: string;
    /** creativePlaceholders[] */
    creativePlaceholders?: Array<CreativePlaceholders>;
    /** activityAssociations[] */
    activityAssociations?: Array<ActivityAssociations>;
    /** EnvironmentType|xsd:string|BROWSER,VIDEO_PLAYER */
    environmentType?: string;
    /** AllowedFormats|xsd:string|AUDIO,UNKNOWN */
    allowedFormats?: Array<string>;
    /** CompanionDeliveryOption|xsd:string|OPTIONAL,AT_LEAST_ONE,ALL,UNKNOWN */
    companionDeliveryOption?: string;
    /** xsd:boolean */
    allowOverbook?: string;
    /** xsd:boolean */
    skipInventoryCheck?: string;
    /** xsd:boolean */
    skipCrossSellingRuleWarningChecks?: string;
    /** xsd:boolean */
    reserveAtCreation?: string;
    /** stats */
    stats?: Stats;
    /** deliveryIndicator */
    deliveryIndicator?: DeliveryIndicator;
    /** deliveryData */
    deliveryData?: DeliveryData;
    /** budget */
    budget?: CostPerUnit;
    /** ComputedStatus|xsd:string|DELIVERY_EXTENDED,DELIVERING,READY,PAUSED,INACTIVE,PAUSED_INVENTORY_RELEASED,PENDING_APPROVAL,COMPLETED,DISAPPROVED,DRAFT,CANCELED */
    status?: string;
    /** LineItemSummary.ReservationStatus|xsd:string|RESERVED,UNRESERVED */
    reservationStatus?: string;
    /** xsd:boolean */
    isArchived?: string;
    /** xsd:string */
    webPropertyCode?: string;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:boolean */
    disableSameAdvertiserCompetitiveExclusion?: string;
    /** xsd:string */
    lastModifiedByApp?: string;
    /** xsd:string */
    notes?: string;
    /** CompetitiveConstraintScope|xsd:string|POD,STREAM,UNKNOWN */
    competitiveConstraintScope?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: StartDateTime;
    /** creationDateTime */
    creationDateTime?: StartDateTime;
    /** customFieldValues[] */
    customFieldValues?: Array<CustomFieldValues>;
    /** xsd:boolean */
    isMissingCreatives?: string;
    /** ProgrammaticCreativeSource|xsd:string|PUBLISHER,ADVERTISER,UNKNOWN */
    programmaticCreativeSource?: string;
    /** thirdPartyMeasurementSettings */
    thirdPartyMeasurementSettings?: ThirdPartyMeasurementSettings;
    /** xsd:long */
    videoMaxDuration?: string;
    /** primaryGoal */
    primaryGoal?: PrimaryGoal;
    /** secondaryGoals[] */
    secondaryGoals?: Array<PrimaryGoal>;
    /** grpSettings */
    grpSettings?: GrpSettings;
    /** dealInfo */
    dealInfo?: DealInfo;
    /** xsd:long */
    viewabilityProviderCompanyIds?: Array<string>;
    /** ChildContentEligibility|xsd:string|UNKNOWN,DISALLOWED,ALLOWED */
    childContentEligibility?: string;
    /** xsd:string */
    customVastExtension?: string;
    /** targeting */
    targeting?: Targeting;
    /** creativeTargetings[] */
    creativeTargetings?: Array<CreativeTargetings>;
}
