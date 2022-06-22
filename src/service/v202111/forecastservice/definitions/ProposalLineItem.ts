import { StartDateTime } from "./StartDateTime";
import { PrimaryGoal } from "./PrimaryGoal";
import { FrequencyCaps } from "./FrequencyCaps";
import { CreativePlaceholders } from "./CreativePlaceholders";
import { Targeting } from "./Targeting";
import { CustomFieldValues } from "./CustomFieldValues";
import { AppliedLabels } from "./AppliedLabels";
import { CostPerUnit } from "./CostPerUnit";
import { DeliveryIndicator } from "./DeliveryIndicator";
import { DeliveryData } from "./DeliveryData";
import { MarketplaceInfo } from "./MarketplaceInfo";
import { GrpSettings } from "./GrpSettings";
import { ThirdPartyMeasurementSettings } from "./ThirdPartyMeasurementSettings";
import { MakegoodInfo } from "./MakegoodInfo";

/**
 * proposalLineItem
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface ProposalLineItem {
    /** xsd:long */
    id?: string;
    /** xsd:long */
    proposalId?: string;
    /** xsd:string */
    name?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:string */
    timeZoneId?: string;
    /** xsd:string */
    internalNotes?: string;
    /** xsd:boolean */
    isArchived?: string;
    /** goal */
    goal?: PrimaryGoal;
    /** xsd:long */
    contractedUnitsBought?: string;
    /** DeliveryRateType|xsd:string|EVENLY,FRONTLOADED,AS_FAST_AS_POSSIBLE */
    deliveryRateType?: string;
    /** RoadblockingType|xsd:string|ONLY_ONE,ONE_OR_MORE,AS_MANY_AS_POSSIBLE,ALL_ROADBLOCK,CREATIVE_SET */
    roadblockingType?: string;
    /** CompanionDeliveryOption|xsd:string|OPTIONAL,AT_LEAST_ONE,ALL,UNKNOWN */
    companionDeliveryOption?: string;
    /** xsd:long */
    videoMaxDuration?: string;
    /** SkippableAdType|xsd:string|UNKNOWN,DISABLED,ENABLED,INSTREAM_SELECT,ANY */
    videoCreativeSkippableAdType?: string;
    /** frequencyCaps[] */
    frequencyCaps?: Array<FrequencyCaps>;
    /** xsd:long */
    dfpLineItemId?: string;
    /** LineItemType|xsd:string|SPONSORSHIP,STANDARD,NETWORK,BULK,PRICE_PRIORITY,HOUSE,LEGACY_DFP,CLICK_TRACKING,ADSENSE,AD_EXCHANGE,BUMPER,ADMOB,PREFERRED_DEAL,UNKNOWN */
    lineItemType?: string;
    /** xsd:int */
    lineItemPriority?: string;
    /** RateType|xsd:string|CPM,CPC,CPD,CPU,FLAT_FEE,VCPM,CPM_IN_TARGET,UNKNOWN */
    rateType?: string;
    /** creativePlaceholders[] */
    creativePlaceholders?: Array<CreativePlaceholders>;
    /** targeting */
    targeting?: Targeting;
    /** customFieldValues[] */
    customFieldValues?: Array<CustomFieldValues>;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:boolean */
    disableSameAdvertiserCompetitiveExclusion?: string;
    /** xsd:boolean */
    isSold?: string;
    /** netRate */
    netRate?: CostPerUnit;
    /** netCost */
    netCost?: CostPerUnit;
    /** deliveryIndicator */
    deliveryIndicator?: DeliveryIndicator;
    /** deliveryData */
    deliveryData?: DeliveryData;
    /** ComputedStatus|xsd:string|DELIVERY_EXTENDED,DELIVERING,READY,PAUSED,INACTIVE,PAUSED_INVENTORY_RELEASED,PENDING_APPROVAL,COMPLETED,DISAPPROVED,DRAFT,CANCELED */
    computedStatus?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: StartDateTime;
    /** ReservationStatus|xsd:string|RESERVED,NOT_RESERVED,RELEASED,CHECK_LINE_ITEM_RESERVATION_STATUS,UNKNOWN */
    reservationStatus?: string;
    /** lastReservationDateTime */
    lastReservationDateTime?: StartDateTime;
    /** EnvironmentType|xsd:string|BROWSER,VIDEO_PLAYER */
    environmentType?: string;
    /** AllowedFormats|xsd:string|AUDIO,UNKNOWN */
    allowedFormats?: Array<string>;
    /** xsd:boolean */
    isProgrammatic?: string;
    /** marketplaceInfo */
    marketplaceInfo?: MarketplaceInfo;
    /** xsd:string */
    additionalTerms?: string;
    /** ProgrammaticCreativeSource|xsd:string|PUBLISHER,ADVERTISER,UNKNOWN */
    programmaticCreativeSource?: string;
    /** grpSettings */
    grpSettings?: GrpSettings;
    /** xsd:long */
    estimatedMinimumImpressions?: string;
    /** thirdPartyMeasurementSettings */
    thirdPartyMeasurementSettings?: ThirdPartyMeasurementSettings;
    /** makegoodInfo */
    makegoodInfo?: MakegoodInfo;
    /** xsd:boolean */
    hasMakegood?: string;
    /** xsd:boolean */
    canCreateMakegood?: string;
    /** NegotiationRole|xsd:string|BUYER,SELLER,UNKNOWN */
    pauseRole?: string;
    /** xsd:string */
    pauseReason?: string;
}
