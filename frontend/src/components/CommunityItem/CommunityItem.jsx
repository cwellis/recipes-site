import communityService from "../../features/communities/communityService"



const CommunityItem = ({ community }) => {
    return (
        <div>
            <div>{community.communityName}</div>
        </div>
    )
}

export default CommunityItem