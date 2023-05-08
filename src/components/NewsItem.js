import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {

    let { tittle, description,imageurl ,newsurl} = this.props;
    return (
      <div className="container my-4">
        <div className="card" style={{ width: " 18rem" }}>
          <img
            src={imageurl?imageurl:"https://static.toiimg.com/thumb/msid-99906916,width-1070,height-580,imgsize-39718,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
