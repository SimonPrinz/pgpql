import {Field, ObjectType} from 'type-graphql';
import {User} from './User';
import * as openpgp from 'openpgp';
import {SubKey} from './SubKey';

@ObjectType()
export class Key {
    @Field()
    public get id(): string {
        console.log(this.key.keyPacket);
        return this.key.getKeyID().toHex();
    }

    @Field(returns => Number, {nullable: true})
    public get bits(): number | undefined {
        return this.key.getAlgorithmInfo().bits;
    }

    @Field(returns => String, {nullable: true})
    public get curve(): string | undefined {
        return this.key.getAlgorithmInfo().curve;
    }

    @Field()
    public algorithm(): string {
        return this.key.getAlgorithmInfo().algorithm;
    }

    @Field()
    public get creationDate(): Date {
        return this.key.getCreationTime();
    }

    @Field(returns => Date, {nullable: true})
    public get expirationDate() {
        return this.key.getExpirationTime().catch(_ => undefined) as Promise<Date | undefined>;
    }

    @Field()
    public get fingerprint(): string {
        return this.key.getFingerprint();
    }

    // ToDo: flags?

    @Field(returns => User)
    public get primaryUser() {
        return this.key.getPrimaryUser().then(user => new User(user.user));
    }

    @Field(returns => [User])
    public get users() {
        return this.key.users.filter((user: openpgp.User) => user).map(user => new User(user));
    }

    @Field(returns => [SubKey])
    public get subKeys() {
        return this.key.subkeys.filter((subKey: openpgp.Subkey) => subKey).map(subKey => new SubKey(subKey));
    }

    constructor(private key: openpgp.Key) {
    }
}
