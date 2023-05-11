import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {

    let { tittle, description,imageurl ,newsurl,author,date,sourse} = this.props;
    return (
      <div className="container my-4">
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1 '}}>
    {sourse}
    <span className="visually-hidden">unread messages</span>
  </span>
          <img
            src={imageurl?imageurl:"https://static.toiimg.com/thumb/msid-99906916,width-1070,height-580,imgsize-39718,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}...</p>
             <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
