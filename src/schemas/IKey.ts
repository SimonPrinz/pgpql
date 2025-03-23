import {Field, InterfaceType} from "type-graphql";

@InterfaceType()
export abstract class IKey {
    @Field()
    public get id(): string {
            throw new Error("Method not implemented!");
    }

    @Field(returns => Number, {nullable: true})
    public get bits(): number | undefined {
        throw new Error("Method not implemented!");
    }

    @Field(returns => String, {nullable: true})
    public get curve(): string | undefined {
        throw new Error("Method not implemented!");
    }

    @Field()
    public algorithm(): string {
        throw new Error("Method not implemented!");
    }

    @Field()
    public get creationDate(): Date {
        throw new Error("Method not implemented!");
    }

    @Field()
    public get fingerprint(): string {
        throw new Error("Method not implemented!");
    }
}