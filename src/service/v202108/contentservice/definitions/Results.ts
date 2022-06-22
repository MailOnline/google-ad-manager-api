import { HlsIngestErrors } from "./HlsIngestErrors";
import { LastHlsIngestDateTime } from "./LastHlsIngestDateTime";
import { CmsSources } from "./CmsSources";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Results {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** ContentStatus|xsd:string|ACTIVE,INACTIVE,ARCHIVED,UNKNOWN */
    status?: string;
    /** ContentStatusDefinedBy|xsd:string|CMS,USER */
    statusDefinedBy?: string;
    /** DaiIngestStatus|xsd:string|SUCCESS,WARNING,FAILURE,UNKNOWN */
    hlsIngestStatus?: string;
    /** hlsIngestErrors[] */
    hlsIngestErrors?: Array<HlsIngestErrors>;
    /** lastHlsIngestDateTime */
    lastHlsIngestDateTime?: LastHlsIngestDateTime;
    /** DaiIngestStatus|xsd:string|SUCCESS,WARNING,FAILURE,UNKNOWN */
    dashIngestStatus?: string;
    /** dashIngestErrors[] */
    dashIngestErrors?: Array<HlsIngestErrors>;
    /** lastDashIngestDateTime */
    lastDashIngestDateTime?: LastHlsIngestDateTime;
    /** importDateTime */
    importDateTime?: LastHlsIngestDateTime;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastHlsIngestDateTime;
    /** cmsSources[] */
    cmsSources?: Array<CmsSources>;
    /** xsd:long */
    contentBundleIds?: Array<string>;
    /** xsd:long */
    cmsMetadataValueIds?: Array<string>;
    /** xsd:long */
    duration?: string;
}
