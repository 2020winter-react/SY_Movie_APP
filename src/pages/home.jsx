import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import api from '../utils/api';
import qs from 'qs';

function Home({ location }) {
    const [data, setData] =useState({"results":[]})

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    useEffect(()=> {
        const fetchData = async () => {
            console.log(api.getNowPlaying)
            const result =  query.q ? await api.getSearchResult(query.q) : await api.getNowPlaying();
            setData(result.data)
            console.log(result);
        }
        fetchData();
        // console.log(data);
    }, [query.q])

    return (
        <div>
            <h1>Home Page 입니다.</h1>
            {
                data.results.map((d) => (
                <Link key={d.id} to={"/detail/"+d.id}>
                <div>{d.title}<img src={process.env.REACT_APP_IMG_URL+d.poster_path}></img></div>
                </Link>
                ))
            }
            <p></p>
            <Link to="/detail/1">1번 디테일!</Link>
        </div>
    )
}

export default Home
