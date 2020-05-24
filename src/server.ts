import express from 'express'; //servidor de Node express
import compression from 'compression';
import cors from 'cors';
//import graphQLHTTP from 'express-graphql';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';


const app = express();

app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
});

//{} esto es en formato objeto
server.applyMiddleware({ app }); //Asi ya podemos leer en formato JSON

/*const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
`;

const resolvers : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola Mundo!';
        },
        holaConNombre(__: void, { nombre } ): string {
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
}

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})*/

/*app.use('/', graphQLHTTP({
    schema,
    graphiql: true
}));*/

/*app.use('/', (re, res) => {
    res.send('Bienvenido al curso de GraphQL')
});*/

const PORT = 5300;
const httpServer = createServer(app);
httpServer.listen(
    { port : PORT },
    () => console.log(`Hola mundo API GraphQL http://localhost:${PORT}/graphql`)
);