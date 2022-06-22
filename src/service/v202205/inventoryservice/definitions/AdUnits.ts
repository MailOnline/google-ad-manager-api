import { ParentPath } from "./ParentPath";
import { AdUnitSizes } from "./AdUnitSizes";
import { AdSenseSettings } from "./AdSenseSettings";
import { AppliedLabelFrequencyCaps } from "./AppliedLabelFrequencyCaps";
import { AppliedLabels } from "./AppliedLabels";
import { LastModifiedDateTime } from "./LastModifiedDateTime";

/**
 * adUnits
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface AdUnits {
    /** xsd:string */
    id?: string;
    /** xsd:string */
    parentId?: string;
    /** xsd:boolean */
    hasChildren?: string;
    /** parentPath[] */
    parentPath?: Array<ParentPath>;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** AdUnit.TargetWindow|xsd:string|TOP,BLANK */
    targetWindow?: string;
    /** InventoryStatus|xsd:string|ACTIVE,INACTIVE,ARCHIVED */
    status?: string;
    /** xsd:string */
    adUnitCode?: string;
    /** adUnitSizes[] */
    adUnitSizes?: Array<AdUnitSizes>;
    /** xsd:boolean */
    isInterstitial?: string;
    /** xsd:boolean */
    isNative?: string;
    /** xsd:boolean */
    isFluid?: string;
    /** xsd:boolean */
    explicitlyTargeted?: string;
    /** adSenseSettings */
    adSenseSettings?: AdSenseSettings;
    /** ValueSourceType|xsd:string|PARENT,DIRECTLY_SPECIFIED,UNKNOWN */
    adSenseSettingsSource?: string;
    /** appliedLabelFrequencyCaps[] */
    appliedLabelFrequencyCaps?: Array<AppliedLabelFrequencyCaps>;
    /** effectiveLabelFrequencyCaps[] */
    effectiveLabelFrequencyCaps?: Array<AppliedLabelFrequencyCaps>;
    /** appliedLabels[] */
    appliedLabels?: Array<AppliedLabels>;
    /** effectiveAppliedLabels[] */
    effectiveAppliedLabels?: Array<AppliedLabels>;
    /** xsd:long */
    effectiveTeamIds?: Array<string>;
    /** xsd:long */
    appliedTeamIds?: Array<string>;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
    /** SmartSizeMode|xsd:string|UNKNOWN,NONE,SMART_BANNER,DYNAMIC_SIZE */
    smartSizeMode?: string;
    /** xsd:int */
    refreshRate?: string;
    /** xsd:string */
    externalSetTopBoxChannelId?: string;
    /** xsd:boolean */
    isSetTopBoxEnabled?: string;
    /** xsd:long */
    applicationId?: string;
}
