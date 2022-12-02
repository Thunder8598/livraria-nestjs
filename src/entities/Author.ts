import {Entity, Property} from "@mikro-orm/core";
import Model from "./Model";

@Entity()
class Author extends Model {
    @Property()
    private name: string;

    @Property({columnType: "datetime"})
    private birthday: Date;

    @Property()
    private description: string;

    constructor(name: string, birthday: string, description: string) {
        super();

        this.name = name;
        this.birthday = new Date(birthday);
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getBirthday(): Date {
        return this.birthday;
    }

    public setBirthday(value: string) {
        this.birthday = new Date(value);
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(value: string) {
        this.description = value;
    }
}

export default Author;