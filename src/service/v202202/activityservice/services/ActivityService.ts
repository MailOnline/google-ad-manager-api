import { ActivityServiceInterfacePort } from "../ports/ActivityServiceInterfacePort";

export interface ActivityService {
    readonly ActivityServiceInterfacePort: ActivityServiceInterfacePort;
}
