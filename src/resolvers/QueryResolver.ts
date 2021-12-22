import {Arg, Query, Resolver} from 'type-graphql';
import {Key} from '../schemas/Key';
import * as openpgp from 'openpgp';

@Resolver()
export class QueryResolver {

    @Query(returns => Key)
    async readKey(
        @Arg('armoredKey') armoredKey: string,
    ): Promise<Key> {
        return openpgp.readKey({
            armoredKey,
        }).then(key => new Key(key));
    }
}
