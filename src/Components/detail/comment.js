import React from 'react';
import { useTranslation } from 'react-i18next';
import { FacebookProvider, Comments } from 'react-facebook';


const url = window.location.protocol+"//"+window.location.host;

const Comment = (props) => {

  const { t } = useTranslation();
  return (
    <div className="tag__text">
      <div className="fb-comments" data-href={url+"/detail/"+props.id} data-width="200px" data-numposts="5"></div>
    </div>
  )
}

export default Comment;