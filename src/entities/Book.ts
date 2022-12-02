import {Entity, ManyToOne, Property} from "@mikro-orm/core";
import Model from "./Model";
import Author from "./Author";

@Entity()
class Book extends Model {
    @Property()
    private name: string;

    @ManyToOne(() => Author, {eager: true})
    private author: Author;

    @Property({columnType: "int"})
    private edition: number;

    @Property({columnType: "int"})
    private pages: number;

    @Property({columnType: "decimal"})
    private price: number;

    @Property({columnType: "boolean"})
    private active: boolean;

    constructor(name: string, author: Author, edition: number, pages: number, price: number, active: boolean) {
        super();
        this.name = name;
        this.author = author;
        this.edition = edition;
        this.pages = pages;
        this.price = price;
        this.active = active;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setAuthor(value: Author) {
        this.author = value;
    }

    public setEdition(value: number) {
        this.edition = value;
    }

    public setPages(value: number) {
        this.pages = value;
    }

    public setPrice(value: number) {
        this.price = value;
    }

    public setActive(value: boolean) {
        this.active = value;
    }
}

export default Book;