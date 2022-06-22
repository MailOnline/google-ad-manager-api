import { CreationDateTime } from "./CreationDateTime";

/**
 * daiAuthenticationKeys
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface DaiAuthenticationKeys {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    key?: string;
    /** creationDateTime */
    creationDateTime?: CreationDateTime;
    /** DaiAuthenticationKeyStatus|xsd:string|UNKNOWN,ACTIVE,INACTIVE */
    status?: string;
    /** xsd:string */
    name?: string;
    /** DaiAuthenticationKeyType|xsd:string|UNKNOWN,API,HMAC */
    keyType?: string;
}
