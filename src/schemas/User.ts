import {Field, ObjectType} from 'type-graphql';
import * as openpgp from 'openpgp';

@ObjectType()
export class User {
    @Field()
    public get id(): string {
        return this.user.userID?.userID!;
    }

    @Field()
    public get name(): string {
        return this.user.userID?.name!;
    }

    @Field()
    public get email(): string {
        return this.user.userID?.email!;
    }

    @Field()
    public get comment(): string {
        return this.user.userID?.comment!;
    }

    constructor(private user: openpgp.User) {
    }
}
