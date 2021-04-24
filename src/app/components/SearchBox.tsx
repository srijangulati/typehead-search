import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypeHeadResults } from '../store/actions/type-head-actions';
import { debounce } from '../utils/common.utils';
import '../styles/SearchBox.scss';

function SearchBox() {
  
  const dispatch: any = useDispatch();

  const onSearchChange = ($event: any) => {
    dispatch(fetchTypeHeadResults($event.target.value));
  }


  return (
    <div>
      <div className="header">
        Search Hacker News
      </div>
      <div className="input-box">
        <input type="text" className="search-box" onChange={debounce(onSearchChange, 100)}/>
      </div>
    </div>
  )
}

export default SearchBox;