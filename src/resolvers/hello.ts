import {Resolver,Query} from "type-graphql";

//HelloResolver (Test Resolver)


@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello(){
        return "hello world";
    }
}