import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className = "sidebarItem">
                <span className ="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg"
                src ="https://images.unsplash.com/photo-1561426802-392f5b6290cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
