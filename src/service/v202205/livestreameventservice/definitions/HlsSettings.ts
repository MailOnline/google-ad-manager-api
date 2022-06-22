import { MasterPlaylistSettings } from "./MasterPlaylistSettings";

/**
 * hlsSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface HlsSettings {
    /** PlaylistType|xsd:string|EVENT,LIVE,UNKNOWN */
    playlistType?: string;
    /** masterPlaylistSettings */
    masterPlaylistSettings?: MasterPlaylistSettings;
}
