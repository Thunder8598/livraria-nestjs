import { Migration } from '@mikro-orm/migrations';

export class Migration20221202222005 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `author` (`id` bigint unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime null, `deleted_at` datetime null, `name` varchar(255) not null, `birthday` datetime not null, `description` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `book` (`id` bigint unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime null, `deleted_at` datetime null, `name` varchar(255) not null, `author_id` bigint unsigned not null, `edition` int not null, `pages` int not null, `price` decimal not null, `active` boolean not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `book` add index `book_author_id_index`(`author_id`);');

    this.addSql('alter table `book` add constraint `book_author_id_foreign` foreign key (`author_id`) references `author` (`id`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `book` drop foreign key `book_author_id_foreign`;');

    this.addSql('drop table if exists `author`;');

    this.addSql('drop table if exists `book`;');
  }

}
