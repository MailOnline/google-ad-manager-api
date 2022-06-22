import { AdRuleAction } from "./AdRuleAction";
import { Statement } from "./Statement";

/** performAdRuleAction */
export interface PerformAdRuleAction {
    /** adRuleAction */
    adRuleAction?: AdRuleAction;
    /** filterStatement */
    filterStatement?: Statement;
}
