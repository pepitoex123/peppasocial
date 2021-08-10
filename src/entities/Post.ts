import { BaseEntity } from '@mikro-orm/core';

@Entity()
export class Book extends BaseEntity<Book, 'id'> {

    @PrimaryKey()
    id!: number;

    @Property()
    title!: string;

    @ManyToOne()
    author!: Author;

}

const book = new Book();
console.log(book.isInitialized()); // true