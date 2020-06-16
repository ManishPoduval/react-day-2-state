import React, {Component} from 'react';
import Student from './components/Student';

class App extends Component {

  state = {
    students: [
      {name:'Joe', location: 'Berlin', color: 'red'},
      {name:'Jacob', location: 'Madrid', color: 'blue'},
      {name:'John', location: 'Istanbul', color: 'green'},
      {name:'Justin', location: 'Miami', color: 'purple'},
      {name:'Javier', location: 'Paris', color: 'yellow'},
    ],
    buttonText: 'Hide',
    showSection: true,
  }

  handleClick = () => {
    let newText = '';
    if (this.state.buttonText == 'Hide'){
      newText = 'Show'
    }
    else {
      newText = 'Hide'
    }

    //update state here
    this.setState({
      buttonText: newText,
      showSection: !this.state.showSection
    })
  }
  

  addStudent = () => {
      let cloneStudents = JSON.parse(JSON.stringify(this.state.students)) //deep
      cloneStudents.push({name:'Manish', location:'China', color: 'skyblue'})
      this.setState({
        students: cloneStudents
      })
  }

  deleteStudent = (name) => {
      console.log(name)//Joe
      let clonedArray = JSON.parse(JSON.stringify(this.state.students))
      clonedArray = clonedArray.filter((student) => {
        return student.name !== name;
      });
      this.setState({
        students: clonedArray
      })
  }


  render(){  
    return (
      <div>
        <button onClick={this.addStudent}>Add Student</button>
        {
          this.state.students.map((student, index) => {
            return <Student
                key={index} 
                name={student.name}
                delete={this.deleteStudent}
                color={student.color}
                location={student.location} 
              />
          })
        }
      </div>
  );
  }
}

export default App;


