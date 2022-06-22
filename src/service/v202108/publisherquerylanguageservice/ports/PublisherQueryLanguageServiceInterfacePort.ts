import { Select } from "../definitions/Select";
import { SelectResponse } from "../definitions/SelectResponse";

export interface PublisherQueryLanguageServiceInterfacePort {
    select(select: Select, callback: (err: any, result: SelectResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
