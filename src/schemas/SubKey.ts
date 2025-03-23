import {Field, ObjectType} from 'type-graphql';
import * as openpgp from 'openpgp';
import {IKey} from "./IKey";

@ObjectType({implements: [IKey]})
export class SubKey implements IKey {
    @Field()
    public get id(): string {
        return this.subKey.getKeyID().toHex();
    }

    @Field(returns => Number, {nullable: true})
    public get bits(): number | undefined {
        return this.subKey.getAlgorithmInfo().bits;
    }

    @Field(returns => String, {nullable: true})
    public get curve(): string | undefined {
        return this.subKey.getAlgorithmInfo().curve;
    }

    @Field()
    public algorithm(): string {
        return this.subKey.getAlgorithmInfo().algorithm;
    }

    @Field()
    public get creationDate(): Date {
        return this.subKey.getCreationTime();
    }

    @Field()
    public get fingerprint(): string {
        return this.subKey.getFingerprint();
    }

    constructor(private subKey: openpgp.Subkey) {
    }
}
