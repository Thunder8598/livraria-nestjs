import { Migration } from '@mikro-orm/migrations';

export class Migration20221202202854 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `author` modify `updated_at` datetime null, modify `deleted_at` datetime null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `author` modify `updated_at` timestamp not null, modify `deleted_at` datetime not null;');
  }

}
