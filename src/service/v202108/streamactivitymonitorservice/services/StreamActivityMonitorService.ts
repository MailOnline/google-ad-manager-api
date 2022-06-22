import { StreamActivityMonitorServiceInterfacePort } from "../ports/StreamActivityMonitorServiceInterfacePort";

export interface StreamActivityMonitorService {
    readonly StreamActivityMonitorServiceInterfacePort: StreamActivityMonitorServiceInterfacePort;
}
