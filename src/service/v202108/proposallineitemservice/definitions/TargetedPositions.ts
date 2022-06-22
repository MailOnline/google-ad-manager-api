import { VideoPosition } from "./VideoPosition";
import { VideoPositionWithinPod } from "./VideoPositionWithinPod";

/**
 * targetedPositions
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface TargetedPositions {
    /** videoPosition */
    videoPosition?: VideoPosition;
    /** VideoBumperType|xsd:string|BEFORE,AFTER */
    videoBumperType?: string;
    /** videoPositionWithinPod */
    videoPositionWithinPod?: VideoPositionWithinPod;
    /** xsd:long */
    adSpotId?: string;
}
