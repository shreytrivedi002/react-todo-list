import { connect } from "react-redux";
import List from "../components/TodolistComp";
// import { addTask } from "../service/actions/action";

const mapStateToProps = (state) => ({
  state: state.todolist,
});

const mapDispatchToProps = (dispatch) => ({
  //   addtolist: (data) => dispatch(addTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
