
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { SearchForm, DisplayOne, Filters } from '../../components'
import { useRepos } from '../../contexts'
import './index.css'

const index = () => {
    const [slug, setSlug] = useState()
    const {repos, setRepos} = useRepos()
    const [isLoading, setIsLoading] = useState("true")
    const [filters, setFilters] = useState('')

    useEffect(() => {
        async function searchAPI() {
            setIsLoading(true)
            const result = await axios.get(`https://api.github.com/users/${slug}/repos`);
            setRepos(result.data);
            setIsLoading(false)
        }
        searchAPI();
    }, [slug]);

    useEffect(() => {
        if(filters != '') {
            const filtered = []
            const sth = repos.filter(r => r.name.search(filters)==0 ? filtered.push(r) : '' )
            console.log(filtered)
            setRepos(filtered)
        }
    }, [filters])

    const handleSearch = (userInput) => {
        setSlug(userInput);
        setFilters('')
    }

  return (
    <div className = 'formSearch'>
        <SearchForm handleSearch={handleSearch} />
        <Filters filters={filters} setFilters={setFilters} />
        {isLoading ? <em>Loading</em> :repos.map((s) => <DisplayOne key={s.id} data={s}/>)}
    </div>
  );
}

export default index;