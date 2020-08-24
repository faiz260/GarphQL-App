import React from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { client } from "./config/gql_config";
import {StudentsList} from './Components/StudentsList';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
          <StudentsList/>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
