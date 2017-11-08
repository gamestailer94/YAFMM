import React from 'react'
import ProfileList from './ProfileList'
import AddProfile from './AddProfile'
import ProfileEditPanel from './ProfileEditPanel'

class ProfileConfig extends React.Component {
    render(){
        return <div className="row mt-1">
            <div className="col-6">
                <AddProfile />
                <ProfileList />
            </div>
            <div className="col-6">
                <ProfileEditPanel/>
            </div>
        </div>
    }
}

export default ProfileConfig