import { ForecastServiceInterfacePort } from "../ports/ForecastServiceInterfacePort";

export interface ForecastService {
    readonly ForecastServiceInterfacePort: ForecastServiceInterfacePort;
}
