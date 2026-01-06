import UserProfile  from "./components/userProfile";
import './App.css'

const userDetailsList = [
    {
        uniqueNo: 1,
        imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
        Name : "Arjun",
        Role : "Software Developer"
    },
    {
        uniqueNo: 2,
        imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
        Name : "Janny",
        Role : "Tester"
    },
    {
        uniqueNo: 3,
        imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
        Name : "Sunny",
        Role : "Team Lead"
    },
    {
        uniqueNo: 4,
        imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
        Name : "Harry",
        Role : "Software Intern"
    }
]


const App = () => {
    return (
        <div className="list-container">
            <h1 className="title">User List</h1>
            <ul>
                {
                    userDetailsList.map(eachItem => (
                        <UserProfile userDetailsList={eachItem} key={eachItem.uniqueNo}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default App