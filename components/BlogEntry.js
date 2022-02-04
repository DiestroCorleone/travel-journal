import React from "react";

export default function BlogEntry(props) {
    return(
        <article className="blog-entry">
            <div className="blog-entry-img">
                <img src={props.imageUrl} />
            </div>
            <div className="blog-entry-body">                
                <p><i className="fa fa-fw fa-map-marker"></i>{props.location.toUpperCase()}    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a></p>                
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </article>
    );
}