import React from "react";
import { withStyles } from "@material-ui/core/styles";

// import axios with auth
import { axiosWithAuth } from "../../utils/axiosWithAuth";

// import add student and edit student components
import AddStudent from "../../component/add-student/add-student.component";
import EditStudent from "../../component/edit-student/edit-student.component";

import Navigation from "../../component/navigation/navigation.component";

const styles = {
  root: {
    width: "500px",
    margin: "0 auto"
  },
  student: {
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#fafafa",
    width: "300px",
    paddingBottom: "20px",
    margin: "0 auto 20px"
  }
};

class StudentsPage extends React.Component {
  state = {
    students: [],
    firstName: "",
    lastName: "",
    email: "",
    id: localStorage.getItem("professor_id"),
    edit: false,
    count: null
  };

  componentDidMount() {
    console.log("hello");
    console.log(this.state.students);
    axiosWithAuth()
      .get(`/api/users/${this.state.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          students: res.data.students,
          count: res.data.students.length
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      const profID = localStorage.getItem("professor_id");
      axiosWithAuth()
        .get(`/api/users/${profID}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            students: res.data.students,
            count: res.data.students.length
          });
        })
        .catch(err => console.log(err));
    }
  }

  // // update students with counts
  updateStudents = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  // // remove student by id
  removeStudent = id => {
    axiosWithAuth()
      .delete(`/api/students/${id}`)
      .then(
        this.updateStudents(state => {
          return { count: state.count - 1 };
        })
      )
      .catch(err => console.log(err));
  };

  // // edit student with edit to true
  editStudent = (firstName, lastName, email, id) => {
    this.setState({ firstName: firstName });
    this.setState({ lastName: lastName });
    this.setState({ email: email });
    this.setState({ id: id });
    this.setState({ edit: true });
  };

  // // cancel edit by change the state to false
  cancelEdit = () => {
    this.setState({ edit: false });
  };

  // render students with features from above
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navigation />

        <h1 className="student-title">My Students</h1>

        <div className={`students ${classes.root}`}>
          {this.state.students.map(student => (
            <div key={student.id} className={`student ${classes.student}`}>
              <div className="student-info">
                <p className="info">
                  {student.firstName} {student.lastName}
                </p>

                <p className="info">{student.email}</p>

                <button
                  onClick={() =>
                    this.editStudent(
                      student.firstName,
                      student.lastName,
                      student.email,
                      student.id
                    )
                  }
                >
                  Edit
                </button>

                <button onClick={() => this.removeStudent(student.id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {this.state.edit === true ? (
          <EditStudent
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            id={this.state.id}
            update={this.updateStudents}
            cancelEdit={this.cancelEdit}
          />
        ) : (
          <AddStudent update={this.updateStudents} />
        )}
      </div>
    );
  }
}

// const StudentsPage = "Hello";
// console.log(StudentsPage);

export default withStyles(styles)(StudentsPage);
