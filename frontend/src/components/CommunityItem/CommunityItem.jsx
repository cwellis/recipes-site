import communityService from "../../features/communities/communityService"

const CommunityItem = ({ community }) => {
    return (
        <div>
            <h3>Communities</h3>
            <div>Community: {community.communityName}</div>
        </div>
    )
}

export default CommunityItem