import { ThirdPartyDataDeclaration } from "./ThirdPartyDataDeclaration";

/**
 * creativeWrappers
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface CreativeWrappers {
    /** xsd:long */
    id?: string;
    /** xsd:long */
    labelId?: string;
    /** xsd:string */
    htmlHeader?: string;
    /** xsd:string */
    htmlFooter?: string;
    /** xsd:string */
    ampHead?: string;
    /** xsd:string */
    ampBody?: string;
    /** thirdPartyDataDeclaration */
    thirdPartyDataDeclaration?: ThirdPartyDataDeclaration;
    /** CreativeWrapperOrdering|xsd:string|NO_PREFERENCE,INNER,OUTER */
    ordering?: string;
    /** CreativeWrapperStatus|xsd:string|ACTIVE,INACTIVE */
    status?: string;
}
