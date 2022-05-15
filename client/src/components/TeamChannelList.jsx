import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({children,error = false,loading,type}) => {
  if(error){
      return type == 'team' ?(
          <div className='team-channel-list'>
              <p className='team-channel-list__message'>
                  Bağlantı hatası,lütfen bir müddet bekleyin ve tekrar deneyin.
              </p>
          </div>
      ):null
  }
  if(loading){
    return(
        <div className='team-channel-list'>
            <p className='team-channel-list__message loading'>
                {type == 'team' ? 'Kanallar' : 'Mesajlar'} Yükleniyor... 
            </p>
        </div>
    )
  }

  return(
      <div className='team-channel-list'>
          <div className='team-channel-list__headr'>
              <p className='team-channel-list__header__title'>
                  {type == 'team' ? 'Mesajlar' : 'Direct Messages'}
              </p>
          </div>
      </div>
  )
}

export default TeamChannelList;