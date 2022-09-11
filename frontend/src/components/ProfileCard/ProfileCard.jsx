import { useSelector } from "react-redux"
import './ProfileCard.css'

const ProfileCard = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className="profileCard">

            <div className="profileSideHeader">
                <h3>Profile Side</h3>
            </div>
            
            <div className="profileName">
                <h1>{user ? user.name : null}</h1>
            </div>

        </div>
    )
}

export default ProfileCard