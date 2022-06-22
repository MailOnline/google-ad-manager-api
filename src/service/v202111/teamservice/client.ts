import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateTeams } from "./definitions/CreateTeams";
import { CreateTeamsResponse } from "./definitions/CreateTeamsResponse";
import { GetTeamsByStatement } from "./definitions/GetTeamsByStatement";
import { GetTeamsByStatementResponse } from "./definitions/GetTeamsByStatementResponse";
import { PerformTeamAction } from "./definitions/PerformTeamAction";
import { PerformTeamActionResponse } from "./definitions/PerformTeamActionResponse";
import { UpdateTeams } from "./definitions/UpdateTeams";
import { UpdateTeamsResponse } from "./definitions/UpdateTeamsResponse";
import { TeamService } from "./services/TeamService";

export interface TeamServiceClient extends SoapClient {
    TeamService: TeamService;
    createTeamsAsync(createTeams: CreateTeams): Promise<[result: CreateTeamsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getTeamsByStatementAsync(getTeamsByStatement: GetTeamsByStatement): Promise<[result: GetTeamsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performTeamActionAsync(performTeamAction: PerformTeamAction): Promise<[result: PerformTeamActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateTeamsAsync(updateTeams: UpdateTeams): Promise<[result: UpdateTeamsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create TeamServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<TeamServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
