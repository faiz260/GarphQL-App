import React from "react";
import { useQuery, gql } from "@apollo/client";

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

export const StudentsList = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error !!</h1>;
  }
  const { students } = data;
  console.log(students);
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
    </div>
  );
};
