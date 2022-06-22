import { ParentPath } from "./ParentPath";
import { SuggestedAdUnitSizes } from "./SuggestedAdUnitSizes";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Results {
    /** xsd:string */
    id?: string;
    /** xsd:long */
    numRequests?: string;
    /** xsd:string */
    path?: Array<string>;
    /** parentPath[] */
    parentPath?: Array<ParentPath>;
    /** AdUnit.TargetWindow|xsd:string|TOP,BLANK */
    targetWindow?: string;
    /** TargetPlatform|xsd:string|WEB,MOBILE,ANY */
    targetPlatform?: string;
    /** suggestedAdUnitSizes[] */
    suggestedAdUnitSizes?: Array<SuggestedAdUnitSizes>;
}
