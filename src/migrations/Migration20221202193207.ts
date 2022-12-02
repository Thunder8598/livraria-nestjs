import { Migration } from '@mikro-orm/migrations';

export class Migration20221202193207 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `author` (`id` auto not null, `created_at` varchar(255) not null, `updated_at` varchar(255) not null, `deleted_at` varchar(255) not null, `name` varchar(255) not null, `birthday` varchar(255) not null, `description` varchar(255) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `author`;');
  }

}
