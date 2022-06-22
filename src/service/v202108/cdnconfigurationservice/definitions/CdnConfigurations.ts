import { SourceContentConfiguration } from "./SourceContentConfiguration";

/**
 * cdnConfigurations
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface CdnConfigurations {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** CdnConfigurationType|xsd:string|UNKNOWN,LIVE_STREAM_SOURCE_CONTENT */
    cdnConfigurationType?: string;
    /** sourceContentConfiguration */
    sourceContentConfiguration?: SourceContentConfiguration;
    /** CdnConfigurationStatus|xsd:string|UNKNOWN,ACTIVE,ARCHIVED */
    cdnConfigurationStatus?: string;
}
