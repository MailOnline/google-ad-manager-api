import { UserServiceInterfacePort } from "../ports/UserServiceInterfacePort";

export interface UserService {
    readonly UserServiceInterfacePort: UserServiceInterfacePort;
}
