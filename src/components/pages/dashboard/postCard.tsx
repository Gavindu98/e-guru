import React, { useEffect, useState } from "react";
import Cover from "../../vendors/images/img1.jpg";
import defaultDp from "../../vendors/images/user.png";
import CommentList from "./CommentList";

const PostCard: React.FC<{
  post: any;
  index: any;
}> = (props) => {
  const [show, setShow] = useState(false)

  const handleShowComment = () => {
    setShow(!show)
  }
  console.log("sss==>", props.post)
  return (
    <div className=" bg-light text-white pb-3" key={props.index}>
      <div className="dp-card">
        <img className="dp-icon" src={defaultDp} alt="Dp" />
        <div className="mt-1">
          <h6 className="text-info font-13">James warn </h6>
          <p className="text-info  font-11">{props.post?.creator}</p>
          <p className="paddingTop font-9 text-muted">10 min ago</p>
        </div>
      </div>

      <img className="card-img" src={Cover} alt="Card image" />
      {/* <div className="card-img-overlay mt-70">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div> */}
      <div>
        <div className=" pt-2">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="">
                <h6 className="text-dark font-13 pl-4 pr-4">{props.post?.likeCount} Like</h6>
              </div>
              <div className=""></div>
              <div className=" d-flex flex-row-reverse">
                <h6 className="text-dark font-13 pl-4 pr-4">10 Comment</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-warning border-2 border-top border-primary"></hr>
        <div className="dp-card pl-4 pr-4 ">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="">
                <button className="btn btn-warning font-13 ">Like</button>
              </div>
              <div className=""></div>
              <div className=" ">
                <button className="btn btn-warning font-13 " onClick={() => setShow(!show)}>Comment</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-warning border-2 border-top border-primary"></hr>

      </div>
      <div className="container mt-1">
        <div className="row  d-flex justify-content-center">
          <div className="">
            <div className=" p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" />
                  <span><small className="font-weight-bold text-primary">james_olesenn</small></span>
                </div>
                <div>
                  <small className="font-weight-bold text-primary">
                    <input className="w-full" type="text" placeholder="Type here..." />
                  </small>
                </div>
                <div>
                  <button className="btn btn-warning">send</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {
        show ? <CommentList /> : null
      }

    </div>
  );
};

export default PostCard;
