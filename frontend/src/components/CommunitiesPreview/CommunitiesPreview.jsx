import './CommunitiesPreview.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { reset } from "../../features/auth/authSlice"
import Spinner from "../../components/Spinner/Spinner"
import { getCommunities } from "../../features/communities/communitySlice"
import CommunityItem from '../CommunityItem/CommunityItem'



let CommunitiesPreview = () => {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { communities, isLoading, isError, message } = useSelector((state) => state.communities)

    useEffect(() => {

        if (isError) {
          console.log(message)
        }
    
        dispatch(getCommunities())
    
        return () => {
          dispatch(reset())
        }
      }, [user, isError, message, dispatch])
    
      if (isLoading) {
        return <Spinner />
      }
    
    return (
        <div>

          <div>
            {communities.length > 0 ? (
                  <div>
                      {communities.slice(0, 3).map((community) => (
                          <CommunityItem key={community._id} community={community} />
                      ))}
                  </div>
              ) : (
                  <h3>You have not joined any communities yet</h3>
              )}
          </div>

          <div >
            View All
          </div>

            

        </div>
    )
}

export default CommunitiesPreview