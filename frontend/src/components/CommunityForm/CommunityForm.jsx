import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommunity } from "../../features/communities/communitySlice";

let CommunityForm = () => {

    const dispatch = useDispatch()

    const [communityName, setCommunityName] = useState('')

    const { isError, message } = useSelector(
        (state) => state.auth
    )

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createCommunity({communityName}))
        setCommunityName('')
    }

    return (
        <section className="form">

            <form onSubmit={onSubmit}>

                <div className="form-group">

                    <label htmlFor="text">Recipe Name</label>

                    <input 
                        type="text" 
                        name="communityName"
                        id="communityName"
                        value={communityName}
                        onChange={(e) => setCommunityName(e.target.value)}
                    />

                    <div className="form-group">
                        <button
                            className="btn btn-block"
                            type="submit"
                        >
                            Add Community
                        </button>
                    </div>

                </div>

            </form>

        </section>
    )
}

export default CommunityForm