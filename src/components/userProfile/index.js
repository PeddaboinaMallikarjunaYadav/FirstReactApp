import './index.css'


const UserProfile = (props) => {
    const {userDetailsList} = props
    const {imageUrl, Name, Role} = userDetailsList
    return (
        <div className="user-card-container">
            <img src={imageUrl} className="avatar" alt= "avatar" />
            <div className='user-details-container'>
                <h1 className='user-name'>{Name}</h1>
                <p className='user-designation'>{Role}</p>
            </div>
        </div>
    )
}

export default UserProfile

