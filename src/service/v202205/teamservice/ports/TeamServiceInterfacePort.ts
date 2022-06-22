import { CreateTeams } from "../definitions/CreateTeams";
import { CreateTeamsResponse } from "../definitions/CreateTeamsResponse";
import { GetTeamsByStatement } from "../definitions/GetTeamsByStatement";
import { GetTeamsByStatementResponse } from "../definitions/GetTeamsByStatementResponse";
import { PerformTeamAction } from "../definitions/PerformTeamAction";
import { PerformTeamActionResponse } from "../definitions/PerformTeamActionResponse";
import { UpdateTeams } from "../definitions/UpdateTeams";
import { UpdateTeamsResponse } from "../definitions/UpdateTeamsResponse";

export interface TeamServiceInterfacePort {
    createTeams(createTeams: CreateTeams, callback: (err: any, result: CreateTeamsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getTeamsByStatement(getTeamsByStatement: GetTeamsByStatement, callback: (err: any, result: GetTeamsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performTeamAction(performTeamAction: PerformTeamAction, callback: (err: any, result: PerformTeamActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateTeams(updateTeams: UpdateTeams, callback: (err: any, result: UpdateTeamsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
