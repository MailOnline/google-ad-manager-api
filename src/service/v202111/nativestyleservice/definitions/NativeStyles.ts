import { Targeting } from "./Targeting";
import { Size } from "./Size";

/**
 * nativeStyles
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface NativeStyles {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    htmlSnippet?: string;
    /** xsd:string */
    cssSnippet?: string;
    /** xsd:long */
    creativeTemplateId?: string;
    /** xsd:boolean */
    isFluid?: string;
    /** targeting */
    targeting?: Targeting;
    /** NativeStyleStatus|xsd:string|ACTIVE,ARCHIVED,INACTIVE,UNKNOWN */
    status?: string;
    /** size */
    size?: Size;
}
