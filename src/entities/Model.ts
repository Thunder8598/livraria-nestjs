import {PrimaryKey, Property} from "@mikro-orm/core";

class Model {
    @PrimaryKey({autoincrement: true})
    private id: number;

    @Property({columnType: "datetime", onCreate: () => new Date()})
    private createdAt: Date;

    @Property({columnType: "datetime", nullable: true, onUpdate: () => new Date()})
    private updatedAt: Date;

    @Property({columnType: "datetime", nullable: true})
    private deletedAt: Date;
}

export default Model;