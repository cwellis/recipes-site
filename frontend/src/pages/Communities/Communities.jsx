import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCommunities } from '../../features/communities/communitySlice'
import { reset } from '../../features/auth/authSlice'
import CommunityItem from '../../components/CommunityItem/CommunityItem'
import CommunityForm from '../../components/CommunityForm/CommunityForm'

const Communities = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { communities, isLoading, isError, message } = useSelector((state) => state.communities)

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

        dispatch(getCommunities())

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch])

    return (

        <div>
            
            <div className='communities'>

                <div>
                    Communities
                </div>

                {communities.length > 0 ? (
                    <div>
                        {communities.map((community) => (
                            <CommunityItem key={community._id} community={community} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not joined any communities yet</h3>
                )}
            </div>

            <CommunityForm />

        </div>
        
    )

}

export default Communities