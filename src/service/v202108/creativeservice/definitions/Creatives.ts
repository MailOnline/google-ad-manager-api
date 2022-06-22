import { Size } from "./Size";
import { AppliedLabels } from "./AppliedLabels";
import { LastModifiedDateTime } from "./LastModifiedDateTime";
import { CustomFieldValues } from "./CustomFieldValues";
import { ThirdPartyDataDeclaration } from "./ThirdPartyDataDeclaration";

/**
 * creatives
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Creatives {
    /** xsd:long */
    advertiserId?: string;
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** size */
    size?: Size;
    /** xsd:string */
    previewUrl?: string;
    /** CreativePolicyViolation|xsd:string|MALWARE_IN_CREATIVE,MALWARE_IN_LANDING_PAGE,LEGALLY_BLOCKED_REDIRECT_URL,MISREPRESENTATION_OF_PRODUCT,SELF_CLICKING_CREATIVE,GAMING_GOOGLE_NETWORK,DYNAMIC_DNS,CIRCUMVENTING_SYSTEMS,PHISHING,DOWNLOAD_PROMPT_IN_CREATIVE,UNAUTHORIZED_COOKIE_DETECTED,TEMPORARY_PAUSE_FOR_VENDOR_INVESTIGATION,ABUSIVE_EXPERIENCE,TRICK_TO_CLICK,USE_OF_NON_ALLOWLISTED_OMID_VERIFICATION_SCRIPT,MISUSE_OF_OMID_API,UNACCEPTABLE_HTML_AD,UNKNOWN */
    policyLabels?: Array<string>;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
    /** customFieldValues[] */
    customFieldValues?: Array<CustomFieldValues>;
    /** thirdPartyDataDeclaration */
    thirdPartyDataDeclaration?: ThirdPartyDataDeclaration;
}
