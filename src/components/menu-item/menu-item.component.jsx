import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//withRouter prevents props drilling within componets, lets the props pass down from parents without from going component to component down
// now what with router is is it's a higher order component and a higher order component is essentially
// So it's kind of like a function that gives you back a powered up component.


//match the url and link the url

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
