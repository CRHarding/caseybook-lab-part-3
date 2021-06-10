import React from 'react';

const Footer = (props) => {
  return (
    <div>
      <h2>{props.info.name}</h2>
      <h3>{props.info.creator}</h3>
      <a href={props.info.social.facebook}>Facebook</a>
      <a href={props.info.social.twitter}>Twitter</a>
      <a href={props.info.social.instagram}>Instagram</a>
    </div>
  )
}

export default Footer;
