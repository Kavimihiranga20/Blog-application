import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className = "singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/4553365/pexels-photo-4553365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Etttt" 
                className="singlePostImg" />

                <h1 className ="singlePostTitle">
                    Sacred City of Anuradhapura
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>

                    </div>
                </h1>
                <div className="singlePostInfo">

                    <span className="singlePostAuthor">Author: <b>kavindu</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                    
                     </div>

                <p className="singlePostDesc">

                The city of Anuradhapura was the first ancient capital of Sri Lanka, and it is still a sacred Buddhist religious center. It lies around 200 kilometers (124 miles) north of Colombo, the current capital. Buddhist worshippers and pilgrims visit the well-preserved ruins of the temples and religious centers along the bank of the river Malwathu Oya year-round. The city is also home to one of the largest and most sacred Bodhi trees in Sri Lanka, believed to be a descendant of the Bodhi tree where Buddha was illuminated. Anuradhapura became a UNESCO World Heritage Site in 1982.


                </p>




            </div>
            
        </div>
    )
}
