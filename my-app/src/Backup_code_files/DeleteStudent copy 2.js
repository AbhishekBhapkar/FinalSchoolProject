import { useParams } from "react-router-dom";
/* import StudentList from "./StudentList";
import { useState, useEffect } from "react"; */
import useFetch from "./useFetch";

  
const DeleteStudent = () => {
  const { id } = useParams();
  const { data: Student, error, isPending } = useFetch('http://localhost:4646/StudentInfo/' + id );
  

/*           const jsonString = JSON.stringify(Student); // Convert data to a JSON string
          const trimmedJsonString = jsonString.slice(8, -1); // Remove the first 8 and last 1 characters
          const trimmedData = JSON.parse(trimmedJsonString); // Convert the trimmed JSON string back to an object
          console.log(trimmedData); // Output the trimmed data
          Student = trimmedData; */
          //console.log("before Student");
         // console.log(Student);

  return (
    <div className="Delete-Student">
      {isPending && <div>Loading...</div>}
      {error && <div></div>}
      {Student && (
        <article>
          <p>I am here </p>
        </article>
      )}
    </div>
  );
};

export default DeleteStudent;
