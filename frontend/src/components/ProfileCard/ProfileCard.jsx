import { useSelector } from "react-redux"
import './ProfileCard.css'

const ProfileCard = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className="profileCard">

            <div>
                <h3>Profile Side WIP</h3>
            </div>
            
            <div className="profileName">
                <h1>{user.name}</h1>
            </div>

        </div>
    )
}

export default ProfileCard