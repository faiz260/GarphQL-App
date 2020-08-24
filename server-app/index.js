const{ ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "id": "1",
        "name": "faiz",
        "email": "faiz@gmail.com",
        "age": "19"
    },
    {
        "id": "2",
        "name": "sameer",
        "email": "sameer@gmail.com",
        "age": "19"
    },
    {
        "id": "3",
        "name": "shayan",
        "email": "shayan@gmail.com",
        "age": "19"
    }

]

const resolvers = {
    Query: {
      students: () => students,
    },
  };

const typeDefs = gql`

  type Student {
    id: Int  
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Server running on port ${url}`);
})
