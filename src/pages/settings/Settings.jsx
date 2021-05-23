
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
    return (
        <div className="settings"   >
            <div className="settingsWrapper">
                <div className="settingsTitle">

                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>

                </div>

                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/4348589/pexels-photo-4348589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="" />

                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user"></i>

                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}    />
                 </div>
                        <label>Username</label>
                        <input type="text" placeholder="User Name" />
                        <label>Email</label>
                        <input type="email" placeholder="User@gmail.com" />
                        <label>Password</label>
                        <input type="Password" />
                        <button className="settingsSubmit">Update </button>
                       



                </form>


            </div>
            <Sidebar/>
            
           
            
        </div>
    )
}
