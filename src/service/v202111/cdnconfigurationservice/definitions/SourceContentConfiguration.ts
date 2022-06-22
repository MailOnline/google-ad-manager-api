import { IngestSettings } from "./IngestSettings";

/**
 * sourceContentConfiguration
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface SourceContentConfiguration {
    /** ingestSettings */
    ingestSettings?: IngestSettings;
    /** defaultDeliverySettings */
    defaultDeliverySettings?: IngestSettings;
}
