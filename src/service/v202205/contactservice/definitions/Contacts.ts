
/**
 * contacts
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Contacts {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:long */
    companyId?: string;
    /** Contact.Status|xsd:string|UNINVITED,INVITE_PENDNG,INVITE_EXPIRED,INVITE_CANCELED,USER_ACTIVE,USER_DISABLED,UNKNOWN */
    status?: string;
    /** xsd:string */
    address?: string;
    /** xsd:string */
    cellPhone?: string;
    /** xsd:string */
    comment?: string;
    /** xsd:string */
    email?: string;
    /** xsd:string */
    faxPhone?: string;
    /** xsd:string */
    title?: string;
    /** xsd:string */
    workPhone?: string;
}
