import { gql } from 'apollo-server-express';
import { User, UserQueries, UserMutations } from './user';

const schema = gql`
    ${User}
    
    type Query {
        ${UserQueries}
    }

    type Mutation {
        ${UserMutations}
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

export default schema;
