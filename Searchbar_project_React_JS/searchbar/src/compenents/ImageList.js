import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    console.log(props.images)
    const images = props.images.map( ({ id, urls, description}) => {return (<img className="ui segment" width="250"key={id} src={urls.small} alt={description} />)})
return (

<div className="image-list">{images}</div>
)
}

export default ImageList;