import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
  }
  type User {
    id: ID
    name: String!
    age: Int
    hobbies: [String!]!
  }

  type Mutation {
    createUser(name: String, age: Int, hobbies: [String]): User!
  }
`;
