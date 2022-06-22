import { ContentServiceInterfacePort } from "../ports/ContentServiceInterfacePort";

export interface ContentService {
    readonly ContentServiceInterfacePort: ContentServiceInterfacePort;
}
