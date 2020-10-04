import { connect } from "react-redux";
import Home from "../components/HomeComp";
import { addTask } from "../service/actions/action";

const mapStateToProps = (state) => ({
  //   state: state.todolist,
});

const mapDispatchToProps = (dispatch) => ({
  addtolist: (data) => dispatch(addTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
