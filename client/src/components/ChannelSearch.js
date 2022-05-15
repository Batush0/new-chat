import React,{useState,useEffect}from 'react'
import { getChannel, useChatContext } from 'stream-chat-react';
import {SearchIcon} from '../assets';

const ChannelSearch = () => {
    const [query,setQuery] = useState('');
    const [loading,setLoading] = useState(false);


    const getChannels = async (text) => {
        try{}catch(error){setQuery('')}
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

  return (
    <div className='channel-list__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon/>
            </div>
            <input
                className='channel-search__input__text'
                placeholder='type channel'
                type="text"
                value={query}
                onChange={onSearch}
            />
        </div>
    </div>
  )
}

export default ChannelSearch;