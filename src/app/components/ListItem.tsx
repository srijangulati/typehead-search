import React from 'react';
import '../styles/ListItem.scss';
import { dateDiff } from '../utils/common.utils';

function ListItem({props}: any) {


  const renderStoryTitle = () => {
    switch (true) {
      case !!props._highlightResult.title && !!props._highlightResult.title.value:
        return (
          <a href={props.url}><span dangerouslySetInnerHTML={{ __html: `${props._highlightResult.title.value}`}}></span></a>
        )
      case !!props.title:
          return (
            <a href={props.url}><span>{props.title}</span></a>
          );
      default:
        return ('');
    }
  }

  const renderStoryLink = () => {
    switch (true) {
      case !!props._highlightResult.url && !!props._highlightResult.url.value:
        return (
          <a href="{props.url}" className="Story_link" target="_black"><span dangerouslySetInnerHTML={{ __html: `(${props._highlightResult.url.value})`}}></span></a>
        )
      case !!props.url:
          return (
            <a href="{props.url}" className="Story_link" target="_black"><span> ({props.url}) </span></a>
          );
      default:
        return ('');
    }
  }

  const renderStoryAuthor = () => {
    switch (true) {
      case !!props._highlightResult.author:
        return (
          <span>
            <span dangerouslySetInnerHTML={{ __html: `Author: ${props._highlightResult.author.value}`}}></span>
            <span className="Stoy_separator"> | </span>
          </span>
        )
      case !!props.Author:
          return (
            <span>
              <span>{props.author}</span>
              <span className="Stoy_separator"> | </span>
            </span>
          );
      default:
        return ('');
    }
  }
  
  const renderStoryText = () => {
    switch (true) {
      case !!props._highlightResult.story_text && !!props._highlightResult.story_text.value:
        return (
          <div className="Story_text" dangerouslySetInnerHTML={{ __html: `${props._highlightResult.story_text.value}`}}></div>
        )
      case !!props.story_text:
          return (
            <div className="Story_text"> {props.story_text}</div>
          );
      default:
        return ('');
    }
  }
  
  return (
    <div className="Story">
      <div className="Story_container">
        <div className="Story_data">
          <div className="Story_title">
            { renderStoryTitle() }
            { renderStoryLink() }
            </div>
          <div className="Story_meta">
              {renderStoryAuthor()}
              <span>
                <span>{props.comments || 0} Comments</span>
                <span className="Stroy_separator"> | </span>
            </span>
            <span>
              <span>{dateDiff(props.created_at_i * 1000)}</span>
            </span>
            {renderStoryText()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem;