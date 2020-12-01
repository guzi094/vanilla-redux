import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { remove } from "../store";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DELETE</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
};
export default connect(null, mapDispatchToProps)(ToDo);
