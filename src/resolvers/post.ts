import {Resolver, Query, Ctx, Arg, Int, Mutation} from "type-graphql";
import {Post} from "../entities/Post";
import {MyContext} from "../types";

//PostResolver

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() {em}: MyContext
    ): Promise<Post[]> {
        return em.find(Post,{});
    }
    @Query(() => Post,{nullable: true})
    post(
        @Arg("id",() => Int) id: number,
        @Ctx() { em }: MyContext): Promise<Post | null>{
        return em.findOne(Post,{id});
    }

    @Mutation(() => Post,{nullable: true})
    async updatePost(
        @Arg("id", () => String) id: number,
        @Arg("title", () => String) title: string,
        @Ctx() { em }: MyContext
    ): Promise<Post | null>{
        const post = await em.findOne(Post,{id})
        if(!post){
            return null;
        }
        if(typeof title !== "undefined"){
            post.title = title;
            await em.persistAndFlush(post);
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg("id", () => String) id: number,
        @Ctx() { em }: MyContext
    ): Promise<boolean>{
        try{
            await em.nativeDelete(Post,{id});
            return true;
        } catch{
            return false
        }
    }
}