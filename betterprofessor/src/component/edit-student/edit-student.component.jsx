import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// import axios with auth
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
  },
  input: {
    marginBottom: '10px',
  },
});

const EditStudent = props => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);

  // handle name changes
  const handleFirstName = e => {
    setFirstName(e.target.value);
  };
  // handle name changes
  const handleLastName = e => {
    setLastName(e.target.value);
  };
  // handle email changes
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put(`/api/students/${props.id}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        professor_Id: parseInt(localStorage.getItem("professor_id"))
      })
      .then(props.update(), props.cancelEdit())
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-student">
      <h3 className="edit-title">Edit Student's Info</h3>

      <form onSubmit={handleSubmit} className={`edit-container ${classes.root}`}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
          className={`edit-input ${classes.input}`}
        />

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
          className={`edit-input ${classes.input}`}
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmail}
          className={`edit-input ${classes.input}`}
        />

        <button className="edit-button">Submit</button>
      </form>
    </div>
  );
};

export default EditStudent;
