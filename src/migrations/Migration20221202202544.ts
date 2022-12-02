import { Migration } from '@mikro-orm/migrations';

export class Migration20221202202544 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `author` modify `id` int unsigned not null auto_increment, modify `created_at` timestamp not null, modify `updated_at` timestamp not null, modify `deleted_at` datetime not null, modify `birthday` datetime not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `author` modify `id` varchar(255) not null, modify `created_at` varchar(255) not null, modify `updated_at` varchar(255) not null, modify `deleted_at` varchar(255) not null, modify `birthday` varchar(255) not null;');
  }

}
