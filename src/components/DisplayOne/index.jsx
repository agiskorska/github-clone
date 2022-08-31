import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons'

import './index.css'

function index({data}) {
  console.log(data)
  return (
    <div className='root'>
      <a className='title' href={data["html_url"]}>{data.name}</a><span className='pill'>{data.visibility}</span>
      <p>{data.description ? data.description : data.name +' by ' +data.owner.login}</p>
      <div className='icons-wrapper'>
        <FontAwesomeIcon icon={faCodeFork} />
        <div>{data.forks}</div>
      </div>
      <div className='icons-wrapper'>
        <FontAwesomeIcon icon={faStar} />
        <div>{data.stargazers_count}</div>
      </div>
      <div className='icons-wrapper'>Updated on {data.updated_at}</div>      
    </div>
  )
}

export default index