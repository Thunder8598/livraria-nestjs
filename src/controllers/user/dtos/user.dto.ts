import Roles from "../../../enums/Roles";

class UserDto{
    public name:string;
    public email:string;
    public password:string;
    public roles:Roles;
}

export default UserDto;