import { StartDateTime } from "./StartDateTime";
import { Advertiser } from "./Advertiser";
import { PrimarySalesperson } from "./PrimarySalesperson";
import { CustomFieldValues } from "./CustomFieldValues";
import { AppliedLabels } from "./AppliedLabels";
import { MarketplaceInfo } from "./MarketplaceInfo";
import { BuyerRfp } from "./BuyerRfp";

/**
 * proposals
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Proposals {
    /** xsd:long */
    id?: string;
    /** xsd:boolean */
    isProgrammatic?: string;
    /** xsd:long */
    dfpOrderId?: string;
    /** xsd:string */
    name?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** ProposalStatus|xsd:string|DRAFT,PENDING_APPROVAL,APPROVED,REJECTED,UNKNOWN */
    status?: string;
    /** xsd:boolean */
    isArchived?: string;
    /** advertiser */
    advertiser?: Advertiser;
    /** agencies[] */
    agencies?: Array<Advertiser>;
    /** xsd:string */
    internalNotes?: string;
    /** primarySalesperson */
    primarySalesperson?: PrimarySalesperson;
    /** xsd:long */
    salesPlannerIds?: Array<string>;
    /** xsd:long */
    primaryTraffickerId?: string;
    /** xsd:long */
    sellerContactIds?: Array<string>;
    /** xsd:long */
    appliedTeamIds?: Array<string>;
    /** customFieldValues[] */
    customFieldValues?: Array<CustomFieldValues>;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:string */
    currencyCode?: string;
    /** xsd:long */
    exchangeRate?: string;
    /** xsd:boolean */
    refreshExchangeRate?: string;
    /** xsd:boolean */
    isSold?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: StartDateTime;
    /** marketplaceInfo */
    marketplaceInfo?: MarketplaceInfo;
    /** buyerRfp */
    buyerRfp?: BuyerRfp;
    /** xsd:boolean */
    hasBuyerRfp?: string;
    /** xsd:boolean */
    deliveryPausingEnabled?: string;
}
