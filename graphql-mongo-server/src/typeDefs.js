import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        hello: String!
        tasks: [Task!]!
    }
    type Task {
        id: ID!
        label: String!
        check: Boolean!
    }
    type Mutation {
        createTask(
            label: String!
        ): Task!
        toggleComplete(id: ID!): Task!
        removeTask(id: ID!): Task

    }
`;
