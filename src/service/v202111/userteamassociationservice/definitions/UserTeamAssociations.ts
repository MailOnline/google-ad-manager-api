
/**
 * userTeamAssociations
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface UserTeamAssociations {
    /** xsd:long */
    teamId?: string;
    /** TeamAccessType|xsd:string|NONE,READ_ONLY,READ_WRITE */
    overriddenTeamAccessType?: string;
    /** TeamAccessType|xsd:string|NONE,READ_ONLY,READ_WRITE */
    defaultTeamAccessType?: string;
    /** xsd:long */
    userId?: string;
}
