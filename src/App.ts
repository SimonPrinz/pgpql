import "reflect-metadata";
import {Server, createServer} from 'http';
import express, {Application} from 'express';
import logger from 'morgan';
import {buildSchema} from 'type-graphql';
import {graphqlHTTP} from 'express-graphql';
import {QueryResolver} from './resolvers/QueryResolver';

export default class App {
    private readonly app: Application;
    private readonly server: Server;

    constructor(private port: number) {
        this.app = express();
        this.middlewares();
        this.graphql();
        this.server = createServer(this.app);
    }

    private middlewares(): void {
        this.app.use(logger('dev'));
    }

    private async graphql(): Promise<void> {
        const schema = await buildSchema({
            resolvers: [
                QueryResolver,
            ]
        });
        this.app.use(graphqlHTTP({
            schema,
            graphiql: true
        }));
    }

    public listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
