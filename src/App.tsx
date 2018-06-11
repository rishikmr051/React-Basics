import * as React from 'react';
import './App.css';


interface IState {
  title: string;
  users: IUser[];
}

interface IUser {
  name: string;
}

const usersList = [
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

class App extends React.Component<{}, IState> {

  public state: Readonly<IState> = {
    title: 'initial title',
    users: usersList
  }

  public onBtnClick = () => {
    this.setState({
      title: 'new title'
    });
  }

  public onQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      const filteredUser = usersList.filter((user: IUser) =>{
        return user.name.includes(inputValue);
      });
      
      this.setState({
        users: filteredUser
      });
  }


  public render() {
    const liItems = this.state.users.map((u, index) => (<li key={index}>{u.name}</li>));
    return (
      <div className="App">
        <input type="text" onChange={this.onQuery}/>
        <ul>
            {liItems}
        </ul>
      </div>
    );
  }
}

export default App;
