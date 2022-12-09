import Model from "./Model";
import Roles from "../enums/Roles";
import {Entity, Property} from "@mikro-orm/core";
import * as bcrypt from "bcrypt";

@Entity()
class User extends Model {
    @Property()
    private email: string;

    @Property()
    private password: string;

    @Property()
    private name: string;

    @Property({columnType: "int"})
    private role: Roles;


    constructor(name: string, email: string, role: Roles) {
        super();
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public async setPassword(value: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(value, salt);
    }

    public setName(value: string) {
        this.name = value;
    }

    public setRole(value: Roles) {
        this.role = value;
    }

    public getEmail() {
        return this.email;
    }

    public getName() {
        return this.name;
    }

    public getRole() {
        return this.email;
    }
}

export default User;