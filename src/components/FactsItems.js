import React from 'react'
import { Link } from "react-router-dom";

export default function FactsItems(props) {
  return (
    <div className="card mb-3 my-3">
    <div className="row g-0">
      <div className="col-md-6">
        <Link to={`/factitems/${props.id}`}>
            <img src={props.imageUrl} className="img-fluid rounded-start" alt="..." style={{ height:'216.75px', width:'272px'}} />
        </Link>
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0, 30)}..</h5>
          <p className="card-text">{props.description.slice(0, 50)}...</p>
          <p className="card-text"><small className="text-muted">{new Date(props.date).toUTCString()}</small></p>
          <Link to={`/factitems/${props.id}`} className="btn btn-primary">Read more</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
