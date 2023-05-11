import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import UpdateStudent from "./UpdateStudent";

const DeleteStudent = () => {
  const { id } = useParams();
  const [buttonPopup, SetButtonPopUp] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  let {
    data: Student,
    error,
    isPending,
  } = useFetch("http://localhost:4646/StudentInfo/" + id);

  const handleDelete = () => {
    SetButtonPopUp(true);
    fetch("http://localhost:4646/StudentInfo/" + id, {
      method: "DELETE",
    }).then(() => {
         
      console.log("I am here in Pop Up");
      <popUp trigger={buttonPopup}>Record has been Deleted</popUp>;
    });
  };

  const handleUpdate = () => {
    setShowUpdateForm(true);

  };
  
  return (
    <div className="Delete-Student">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {Student && (
        <article>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{Student.data.id}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>{Student.data.studentFirstName}</td>
              </tr>
              <tr>
                <td>Middle Name</td>
                <td>{Student.data.studentMiddleName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{Student.data.studentLastName}</td>
              </tr>
              <tr>
                <td>Classroom</td>
                <td>{Student.data.classroom}</td>
              </tr>
              <tr>
                <td>Section</td>
                <td>{Student.data.section}</td>
              </tr>
            </tbody>
          </table>
          <button className="add_button" onClick={handleDelete}>
            Delete Student
          </button>
          <button className="add_button" onClick={handleUpdate}>
            Update
          </button>
          {showUpdateForm && <UpdateStudent students={Student} />}
        </article>
      )}
    </div>
  );
};

export default DeleteStudent;
