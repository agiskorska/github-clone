
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { SearchForm, DisplayOne } from '../../components'

import './index.css'

const index = () => {
    const [slug, setSlug] = useState()
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState("true")

    useEffect(() => {
        async function searchAPI() {
            setIsLoading(true)
            const result = await axios.get(`https://api.github.com/users/${slug}/repos`);
            setRepos(result.data);
            setIsLoading(false)
        }
        searchAPI();
    }, [slug]);

    const handleSearch = (userInput) => {
        setSlug(userInput);
    }
  return (
    <div className = 'formSearch'>
        <SearchForm handleSearch={handleSearch} />
        {isLoading ? <em>Loading</em> :repos.map((s) => <DisplayOne key={s.id} data={s}/>)}
    </div>
  );
}

export default index;