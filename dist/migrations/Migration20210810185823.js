"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210810185823 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210810185823 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null default \'NOW()\', "updated_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
        this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
        this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
    }
}
exports.Migration20210810185823 = Migration20210810185823;
//# sourceMappingURL=Migration20210810185823.js.map