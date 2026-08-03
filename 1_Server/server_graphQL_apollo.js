// File: server_graphQL_apollo.js

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } 
   from '@apollo/server/standalone';

import { Course, Coordinator } from './models/index.js';

import * as courseDB
    from './courseModule.js';

const typeDefs_Queries = `#graphql
  type Course {
    
  }

  type Coordinator {
    
  }

  type Description {
    
  }

  type Query {
    randomCourse: Course
    courseDescription(id: String!): Description
    courseIdLookup(id: String!): [Course]!
    courseNameLookup(name: String!): [Course]!
    coordinator(id: String!): Coordinator
  }
`

const resolvers_Queries = {

  Query: {

    randomCourse: async (parent, args, context) => {
      const result = await courseDB.getRandomCourse();
      return result;
    },
    courseDescription: async (parent, args, context) => {
      console.log(" Lookup description", args.id)
      const result = await courseDB.getCourseDescription(args.id);
      return result;
    },
    courseIdLookup: async (parent, args, context) => {
      console.log(" Lookup course by Id", args.id)
      // fill in the code

    },
    courseNameLookup: async (parent, args, context) => {
      console.log(" Lookup course by Name", args.name)
      // fill in the code

    },
    coordinator: async (parent, args, context) => {
      console.log(" Lookup coordinator", args.id)
      // fill in the code

    }

  },

  // chain resolver for Course -> coordinator
  Course: {
    coordinator:  async (parent, args, context) => {
      console.log(" (2) Parent course number", parent._id, " Args", args);
      const result = await parent.populate("coordinator");
      return result.coordinator;
    }
  },

  // chain resolver for Instructor -> instructorCourses
  Coordinator: {
    courses: async (parent, args, context) => {
      console.log(" (2) Parent coordinator id", parent._id, "Args", args);
      // fill in the code
      
    }
  }

};

const server = new ApolloServer(
  {typeDefs: [typeDefs_Queries], 
   resolvers: [resolvers_Queries]});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

