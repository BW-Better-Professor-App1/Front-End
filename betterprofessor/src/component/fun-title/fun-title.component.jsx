import React, { useState } from "react";
import { connect } from "react-redux";

import { toggleEditing, updateTitle } from "../../redux/title/title.actions";

const FunTitle = props => {
  console.log(props);
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <button className="edit" onClick={props.toggleEditing}>
            !Touch me
          </button>
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    editing: state.titleReducer.editing,
    title: state.titleReducer.title
  };
};

export default connect(mapStateToProps, { toggleEditing, updateTitle })(
  FunTitle
);
