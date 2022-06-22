import { AdRuleServiceInterfacePort } from "../ports/AdRuleServiceInterfacePort";

export interface AdRuleService {
    readonly AdRuleServiceInterfacePort: AdRuleServiceInterfacePort;
}
