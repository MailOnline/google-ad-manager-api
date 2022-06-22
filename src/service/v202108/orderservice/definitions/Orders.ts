import { StartDateTime } from "./StartDateTime";
import { TotalBudget } from "./TotalBudget";
import { AppliedLabels } from "./AppliedLabels";
import { CustomFieldValues } from "./CustomFieldValues";

/**
 * orders
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Orders {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** startDateTime */
    startDateTime?: StartDateTime;
    /** endDateTime */
    endDateTime?: StartDateTime;
    /** xsd:boolean */
    unlimitedEndDateTime?: string;
    /** OrderStatus|xsd:string|DRAFT,PENDING_APPROVAL,APPROVED,DISAPPROVED,PAUSED,CANCELED,DELETED,UNKNOWN */
    status?: string;
    /** xsd:boolean */
    isArchived?: string;
    /** xsd:string */
    notes?: string;
    /** xsd:int */
    externalOrderId?: string;
    /** xsd:string */
    poNumber?: string;
    /** xsd:string */
    currencyCode?: string;
    /** xsd:long */
    advertiserId?: string;
    /** xsd:long */
    advertiserContactIds?: Array<string>;
    /** xsd:long */
    agencyId?: string;
    /** xsd:long */
    agencyContactIds?: Array<string>;
    /** xsd:long */
    creatorId?: string;
    /** xsd:long */
    traffickerId?: string;
    /** xsd:long */
    secondaryTraffickerIds?: Array<string>;
    /** xsd:long */
    salespersonId?: string;
    /** xsd:long */
    secondarySalespersonIds?: Array<string>;
    /** xsd:long */
    totalImpressionsDelivered?: string;
    /** xsd:long */
    totalClicksDelivered?: string;
    /** xsd:long */
    totalViewableImpressionsDelivered?: string;
    /** totalBudget */
    totalBudget?: TotalBudget;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:string */
    lastModifiedByApp?: string;
    /** xsd:boolean */
    isProgrammatic?: string;
    /** xsd:long */
    appliedTeamIds?: Array<string>;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: StartDateTime;
    /** customFieldValues[] */
    customFieldValues?: Array<CustomFieldValues>;
}
