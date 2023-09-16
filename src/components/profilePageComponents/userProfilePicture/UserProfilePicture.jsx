import "./userProfilePicture.css"

export default function UserProfilePicture() {
    return (
        <>
        
            <div className="profileImage">
                <img className="profileUserImg" src="/assets/images/me.jpg" width="50px" alt="" />
            </div>
            <div className="updateBtn">

                <img src="/assets/images/pen.png" alt="" />
            </div>
        </>
    )
}
