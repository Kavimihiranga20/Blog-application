import "./post.css"
import {Link} from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/4169720/pexels-photo-4169720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt =""
                />

                <div className ="postInfo">
                    <div className="postCats">

                        <span className="postCat">Srilankan</span>
                        <span className="postCat">Heritage</span>
                        </div>

                        <span className ="postTitle">
                        <Link className="link" to ="/singlePost" >Sacred City of Anuradhapura  </Link>
                        <span className="postCat">( Click this)</span>
                            

                         </span>

                         <hr/>
                         <span className="postDate">1 hour ago</span>

                     </div>

                     <p className="postDesc">
                     With a history expanding over 3000years, Sri Lanka holds some of world’s ancient cities including Anuradhapura, Polonnaruwa and Digamadulla; their once glorious townships, palaces, temples, monasteries, hospitals and theaters intricately carved and modeled out of stone lay and abandoned and forgotten with time amidst the soaring jungles.

Of all the ancient cities of Lanka, the most famed and most exquisite is the Kingdom of Anuradhapura. Sri Lanka’s third and the longest serving capital and one of the oldest continuously inhabited cities in the world is also one of the most sacred cities of World Buddhists. It was the capital of Sri Lanka from the Fourth Century BC up to the turn of the eleventh Century and was one of the most stable and durable centers of political power and urban life in South Asia.
                         
                         
                          </p>


                </div>
            
    
    );
}
