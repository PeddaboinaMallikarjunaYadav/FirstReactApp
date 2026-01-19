import {Component} from 'react'
import UserProfile from './components/userProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: initialUserDetailsList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state
    const filterUserDate = userDetailsList.filter((each) => each.uniqueNo !== uniqueNo)
    this.setState({userDetailsList: filterUserDate})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchUsers = userDetailsList.filter((eachUser) => eachUser.name.includes(searchInput))
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onChangeSearchInput} value={searchInput} />
        <ul className="list-container">
          {searchUsers.map(eachUser => (
            <UserProfile userDetails={eachUser} deleteUser={this.deleteUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
