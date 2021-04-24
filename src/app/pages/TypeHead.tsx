import React from 'react';
import SearchBox from '../components/SearchBox';
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';
import '../styles/TypeHead.scss';

function TypeHead() {

  const searchHits: any[] = useSelector((state: any) => 
    state.typeHead.data.hits ? state.typeHead.data.hits.sort((a: any, b: any) => {
      if (!a.relevancy_score) {
        return 1;
      }
      if (!b.relevancy_score) {
        return -1;
      }
      return b.relevancy_score - a.relevancy_score;
    }) : []
  )

  return (
    <div className="container">
      <SearchBox></SearchBox>
      <div>
        {searchHits.map((data: any) => (
          <ListItem props={data} key={data.created_at_i}></ListItem>
        ))}
      </div>
    </div>
  )
}

export default TypeHead;