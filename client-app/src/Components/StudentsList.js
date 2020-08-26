import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      name,
      id,
      email,
      age
    }
  }
`;

const ADD_STUDENTS = gql`
  mutation AddStudents($id: Int!, $name: String!, $email: String!, $age: Int!){
    addStudent(
      input: {id: $id, name: $name, email: $email, age: $age}
      ) {
      id,
      name
    }
  }
`

export const StudentsList = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);

  const [addStd] = useMutation(ADD_STUDENTS);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error !!</h1>;
  }
  const { students } = data;
  // console.log(students);
  return (  
    <div>
      <table  border="2" width="500px" height="200px">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
          {students.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={()=>{
          addStd({variables: {
            id: 6, name: "touseef", age: 20, email: "touseef@gmail.comf"
          }})
        }} >Add Students</button>
      </div>
    </div>
  );
};
