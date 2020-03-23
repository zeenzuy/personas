import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { personaResolver } from "./resolver/personasResolver";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [personaResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}
main();