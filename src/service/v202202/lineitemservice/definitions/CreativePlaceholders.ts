import { Size } from "./Size";
import { AppliedLabels } from "./AppliedLabels";

/**
 * creativePlaceholders
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface CreativePlaceholders {
    /** size */
    size?: Size;
    /** xsd:long */
    creativeTemplateId?: string;
    /** companions[] */
    companions?: Array<CreativePlaceholders>;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:int */
    expectedCreativeCount?: string;
    /** CreativeSizeType|xsd:string|PIXEL,ASPECT_RATIO,INTERSTITIAL,IGNORED,NATIVE,AUDIO */
    creativeSizeType?: string;
    /** xsd:string */
    targetingName?: string;
    /** xsd:boolean */
    isAmpOnly?: string;
}
