const graphql = require("graphql");

import _ from "lodash";

import * as users from "../data/users.json";

import * as products from "../data/data.json";

import User from "../models/userModel";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const TempUserType = new GraphQLObjectType({
  name: "TempUser",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    items: {
      type: ProductType,
      resolve(parent, args) {
        return _.find(products, { id: parent.id });
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    hobbies: { type: new GraphQLList(GraphQLString) },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    productName: { type: GraphQLString },
    image: { type: GraphQLString },
    from: { type: GraphQLString },
    description: { type: GraphQLString },
    buyers: {
      type: TempUserType,
      resolve(parent, args) {
        return _.find(users, { id: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tempUser: {
      type: TempUserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
      },
    },

    product: {
      type: ProductType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(products, { id: args.id });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        hobbies: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          age: args.age,
          hobbies: args.hobbies,
        });

        return user.save();
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
