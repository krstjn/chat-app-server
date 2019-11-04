export const User = `
    type User {
        id: ID!
        username: String!
        password: String
        image: String
    }
`;

export const UserQueries = `
    me: User
    getUser(id: ID!): User
`;

export const UserMutations = `
    createUser(username: String!, password: String!): User
`;
