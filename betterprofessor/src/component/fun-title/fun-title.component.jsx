import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { toggleEditing, updateTitle } from "../../redux/title/title.actions";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  },
  h1: {
    margin: "0"
  },
  button: {
    width: "100px",
    margin: "5px auto"
  },
  input: {
    width: "300px",
    margin: "0 auto"
  }
});

const FunTitle = props => {
  const classes = useStyles();
  console.log(props);
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <div className={classes.root}>
          <h1 className={classes.h1}>{props.title} </h1>
          <button
            className={`edit ${classes.button}`}
            onClick={props.toggleEditing}
          >
            !Touch me
          </button>
        </div>
      ) : (
        <div className={classes.root}>
          <input
            className={`title-input ${classes.input}`}
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            className={classes.button}
            onClick={() => props.updateTitle(newTitleText)}
          >
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
