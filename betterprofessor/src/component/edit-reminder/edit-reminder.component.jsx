import React, { useState } from "react";

// import axios with auth
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const EditReminder = props => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [send_date, setSendDate] = useState(props.send_date);

  // handle name changes
  const handleName = e => {
    setName(e.target.value);
  };
  // handle name changes
  const handleDescription = e => {
    setDescription(e.target.value);
  };
  // handle email changes
  const handleSendDate = e => {
    setSendDate(e.target.value);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put(`/api/reminders/${props.id}`, {
        name: name,
        description: description,
        send_date: send_date,
        professor_Id: parseInt(localStorage.getItem("professor_id"))
      })
      .then(props.update(), props.cancelEdit())
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-reminder">
      <h3 className="edit-title">Edit Reminder</h3>

      <form onSubmit={handleSubmit} className="edit-container">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          className="edit-input"
        />

        <input
          type="text"
          name="send_date"
          value={send_date}
          onChange={handleSendDate}
          className="edit-input"
        />

        <input
          type="textarea"
          name="description"
          value={description}
          onChange={handleDescription}
          className="edit-input"
        />

        <button className="edit-button">Submit</button>
      </form>
    </div>
  );
};

export default EditReminder;
