
/**
 * adSenseSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface AdSenseSettings {
    /** xsd:boolean */
    adSenseEnabled?: string;
    /** xsd:string */
    borderColor?: string;
    /** xsd:string */
    titleColor?: string;
    /** xsd:string */
    backgroundColor?: string;
    /** xsd:string */
    textColor?: string;
    /** xsd:string */
    urlColor?: string;
    /** AdSenseSettings.AdType|xsd:string|TEXT,IMAGE,TEXT_AND_IMAGE */
    adType?: string;
    /** AdSenseSettings.BorderStyle|xsd:string|DEFAULT,NOT_ROUNDED,SLIGHTLY_ROUNDED,VERY_ROUNDED */
    borderStyle?: string;
    /** AdSenseSettings.FontFamily|xsd:string|DEFAULT,ARIAL,TAHOMA,GEORGIA,TIMES,VERDANA */
    fontFamily?: string;
    /** AdSenseSettings.FontSize|xsd:string|DEFAULT,SMALL,MEDIUM,LARGE */
    fontSize?: string;
}
