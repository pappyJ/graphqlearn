import User from "../models/userModel";

export const resolvers = {
  Query: {
    hello: () => "Helooo",
  },
  Mutation: {
    createUser: async (_, { name, age, hobbies }) => {
      await User.create({
        name,

        age,

        hobbies,
      });
    },
  },
};
