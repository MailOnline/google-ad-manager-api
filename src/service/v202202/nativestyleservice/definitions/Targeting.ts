import { GeoTargeting } from "./GeoTargeting";
import { InventoryTargeting } from "./InventoryTargeting";
import { DayPartTargeting } from "./DayPartTargeting";
import { DateTimeRangeTargeting } from "./DateTimeRangeTargeting";
import { TechnologyTargeting } from "./TechnologyTargeting";
import { CustomTargeting } from "./CustomTargeting";
import { UserDomainTargeting } from "./UserDomainTargeting";
import { ContentTargeting } from "./ContentTargeting";
import { VideoPositionTargeting } from "./VideoPositionTargeting";
import { MobileApplicationTargeting } from "./MobileApplicationTargeting";
import { BuyerUserListTargeting } from "./BuyerUserListTargeting";
import { InventoryUrlTargeting } from "./InventoryUrlTargeting";
import { RequestPlatformTargeting } from "./RequestPlatformTargeting";

/**
 * targeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Targeting {
    /** geoTargeting */
    geoTargeting?: GeoTargeting;
    /** inventoryTargeting */
    inventoryTargeting?: InventoryTargeting;
    /** dayPartTargeting */
    dayPartTargeting?: DayPartTargeting;
    /** dateTimeRangeTargeting */
    dateTimeRangeTargeting?: DateTimeRangeTargeting;
    /** technologyTargeting */
    technologyTargeting?: TechnologyTargeting;
    /** customTargeting */
    customTargeting?: CustomTargeting;
    /** userDomainTargeting */
    userDomainTargeting?: UserDomainTargeting;
    /** contentTargeting */
    contentTargeting?: ContentTargeting;
    /** videoPositionTargeting */
    videoPositionTargeting?: VideoPositionTargeting;
    /** mobileApplicationTargeting */
    mobileApplicationTargeting?: MobileApplicationTargeting;
    /** buyerUserListTargeting */
    buyerUserListTargeting?: BuyerUserListTargeting;
    /** inventoryUrlTargeting */
    inventoryUrlTargeting?: InventoryUrlTargeting;
    /** requestPlatformTargeting */
    requestPlatformTargeting?: RequestPlatformTargeting;
}
