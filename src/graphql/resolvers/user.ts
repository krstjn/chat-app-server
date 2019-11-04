export const me = (parent: void, args: void, context: void) => {
  return { id: '1', username: 'Ananas' };
};

export const UserQueryResolvers = {
  me,
};

export const UserMutationResolvers = {};
