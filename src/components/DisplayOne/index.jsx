import React from 'react'

import './index.css'

function index({data}) {
  console.log(data)
  return (
    <div className='root'>
      <a className='title' href={data["html_url"]}>{data.name}</a><span className='pill'>{data.visibility}</span>
      <p>{data.description ? data.description : data.name +' by ' +data.owner.login}</p>
      
    </div>
  )
}

export default index