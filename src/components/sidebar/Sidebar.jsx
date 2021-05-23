import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className = "sidebarItem">
                <span className ="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg"
                src ="https://images.pexels.com/photos/6337422/pexels-photo-6337422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="about me"
                />

                <p>Sri Lanka, formerly known as Ceylon, and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. </p>
        
            </div>

               <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                        <li className="sidebarListItem">WILD</li>
                        <li className="sidebarListItem">THRILLS</li>
                        <li className="sidebarListItem">BLISS</li>
                        <li className="sidebarListItem">PRISTINE</li>
                        <li className="sidebarListItem">HERITAGE</li>
                        <li className="sidebarListItem">SCENIC</li>

                </ul>

            </div>

                <div className ="sidebarItem">
                  <span className="sidebarTitle">Follow US</span>
                  <div className="sidebarSocial">

                     <i className="sidebarIcon fab fa-facebook"></i>
                     <i className="sidebarIcon fab fa-twitter-square"></i>
                     <i className="sidebarIcon fab fa-pinterest-square"></i> 
                     <i className="sidebarIcon fab fa-instagram-square"></i>


                  </div>




                </div>




            
        </div>
    )
}
