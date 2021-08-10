import {Post} from "./entities/Post";
import {__prod__} from "./constants";
import {MikroORM} from "@mikro-orm/core";
import path from "path";
import {User} from "./entities/User";

// The objective of this config file is to be able to access it through the CLI

export default {
    migrations: {
        path: path.join(__dirname,"./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/ // regex pattern for the migration files, I modified it the original regex pattern a little bit because I want this regex to identify both ts and js files :D
    },
    entities: [Post,User],
    dbName: "peppasocial",
    type: "postgresql",
    debug: !__prod__,
    user: "postgres",
    password: "root"
} as Parameters<typeof MikroORM.init>[0];


// TYPESCRIPT BLACK MAGIC! (✿✧∪✧) We don't want Typescript to identify this as "string type" therefore we cast this object literal into Parameters that fit the typeof MikroORM.init()