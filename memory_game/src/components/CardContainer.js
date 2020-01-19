import React from 'react';
import Card from '../images/Card.jpg'
import Card2 from '../images/Card2.png'
const CardContainer = (props) => {
 
const onClick = (ex) => {
  
  this.props.SendId(ex)
}

const PicList = props.ListState.map(el => {
    return (
        <li key={el.specialid} className="Card" onClick={() => props.SendId(el.specialid, el.id)}>
              <div className="flip-card">
        <div className={ el.status === "closed" ? "transform flip-card-inner" : "flip-card-inner"}>
          <div className="flip-card-front">
            <img className="imgStyle" src={el.img === "won" ? Card2 : el.img}alt="Loading..." />
          </div>
          <div className="flip-card-back">
            <img className="imgStyle" src={Card} alt="Card Background" />
          </div>
        </div>
      </div>
        </li>
     
    )
})

  return (
    <ul className="CardContainer">
{PicList}
    </ul>
  );
}

export default CardContainer;