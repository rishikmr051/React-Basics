import * as React from 'react';
import './App.css';


interface IState {
  title: string;
  users: IUser[];
}

interface IUser {
  name: string;
}

class App extends React.Component<{}, IState> {

public state: Readonly<IState> = {
  title: 'initial title',
  users: [
    {
      name: 'Rajnikanth'
    },
    {
      name: 'Salman'
    },
    {
      name: 'Akshay'
    },
    {
      name: 'Amitabh'
    }
  ]
}

  // public name = 'mycomponent';
    
  public onBtnClick = () => {
    // alert(this.name);
    // alert('Hello React');
    this.setState({
      title: 'new title'
    });
  }

  public onQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }


  public render() {

const liItems = this.state.users.map(user => (<li>{user.name}</li>));

    return (
      <div className="App">

      <input type="text" onChange={this.onQuery}/>

      <ul>
        {liItems}
      </ul>
      
      
      {this.state.title}
      <br /><button onClick={this.onBtnClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
