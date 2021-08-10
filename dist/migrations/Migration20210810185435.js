"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210810185435 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210810185435 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
        this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
    }
}
exports.Migration20210810185435 = Migration20210810185435;
//# sourceMappingURL=Migration20210810185435.js.map