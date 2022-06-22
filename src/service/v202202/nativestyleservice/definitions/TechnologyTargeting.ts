import { BandwidthGroupTargeting } from "./BandwidthGroupTargeting";
import { BrowserTargeting } from "./BrowserTargeting";
import { BrowserLanguageTargeting } from "./BrowserLanguageTargeting";
import { DeviceCapabilityTargeting } from "./DeviceCapabilityTargeting";
import { DeviceCategoryTargeting } from "./DeviceCategoryTargeting";
import { DeviceManufacturerTargeting } from "./DeviceManufacturerTargeting";
import { MobileCarrierTargeting } from "./MobileCarrierTargeting";
import { MobileDeviceTargeting } from "./MobileDeviceTargeting";
import { MobileDeviceSubmodelTargeting } from "./MobileDeviceSubmodelTargeting";
import { OperatingSystemTargeting } from "./OperatingSystemTargeting";
import { OperatingSystemVersionTargeting } from "./OperatingSystemVersionTargeting";

/**
 * technologyTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface TechnologyTargeting {
    /** bandwidthGroupTargeting */
    bandwidthGroupTargeting?: BandwidthGroupTargeting;
    /** browserTargeting */
    browserTargeting?: BrowserTargeting;
    /** browserLanguageTargeting */
    browserLanguageTargeting?: BrowserLanguageTargeting;
    /** deviceCapabilityTargeting */
    deviceCapabilityTargeting?: DeviceCapabilityTargeting;
    /** deviceCategoryTargeting */
    deviceCategoryTargeting?: DeviceCategoryTargeting;
    /** deviceManufacturerTargeting */
    deviceManufacturerTargeting?: DeviceManufacturerTargeting;
    /** mobileCarrierTargeting */
    mobileCarrierTargeting?: MobileCarrierTargeting;
    /** mobileDeviceTargeting */
    mobileDeviceTargeting?: MobileDeviceTargeting;
    /** mobileDeviceSubmodelTargeting */
    mobileDeviceSubmodelTargeting?: MobileDeviceSubmodelTargeting;
    /** operatingSystemTargeting */
    operatingSystemTargeting?: OperatingSystemTargeting;
    /** operatingSystemVersionTargeting */
    operatingSystemVersionTargeting?: OperatingSystemVersionTargeting;
}
