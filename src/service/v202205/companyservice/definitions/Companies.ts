import { Settings } from "./Settings";
import { AppliedLabels } from "./AppliedLabels";
import { LastModifiedDateTime } from "./LastModifiedDateTime";
import { ChildPublisher } from "./ChildPublisher";
import { ViewabilityProvider } from "./ViewabilityProvider";

/**
 * companies
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Companies {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** Company.Type|xsd:string|HOUSE_ADVERTISER,HOUSE_AGENCY,ADVERTISER,AGENCY,AD_NETWORK,PARTNER,CHILD_PUBLISHER,VIEWABILITY_PROVIDER,UNKNOWN */
    type?: string;
    /** xsd:string */
    address?: string;
    /** xsd:string */
    email?: string;
    /** xsd:string */
    faxPhone?: string;
    /** xsd:string */
    primaryPhone?: string;
    /** xsd:string */
    externalId?: string;
    /** xsd:string */
    comment?: string;
    /** Company.CreditStatus|xsd:string|ACTIVE,ON_HOLD,CREDIT_STOP,INACTIVE,BLOCKED */
    creditStatus?: string;
    /** settings */
    settings?: Settings;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** xsd:long */
    primaryContactId?: string;
    /** xsd:long */
    appliedTeamIds?: Array<string>;
    /** xsd:int */
    thirdPartyCompanyId?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
    /** childPublisher */
    childPublisher?: ChildPublisher;
    /** viewabilityProvider */
    viewabilityProvider?: ViewabilityProvider;
}
