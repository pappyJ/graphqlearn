import { graphqlHTTP } from "express-graphql";

import express from "express";

import schema from "./schema/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
