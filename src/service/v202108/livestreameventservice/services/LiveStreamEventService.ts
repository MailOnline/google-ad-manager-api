import { LiveStreamEventServiceInterfacePort } from "../ports/LiveStreamEventServiceInterfacePort";

export interface LiveStreamEventService {
    readonly LiveStreamEventServiceInterfacePort: LiveStreamEventServiceInterfacePort;
}
