import { UserQueryResolvers, UserMutationResolvers } from './user';

const resolvers = {
  Query: {
    ...UserQueryResolvers,
  },
};

export default resolvers;
