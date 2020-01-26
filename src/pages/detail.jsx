import React, {useState, useEffect} from 'react';
import api from '../utils/api';
function Detail({match}) {
    const [data, setData] =useState({})

    useEffect(()=> {
        const fetchData = async () => {
            const result = await api.getMovieDetail(match.params.mid)
            setData(result.data)
            console.log(result);
        }
        fetchData();
        console.log(data);
        return () => {setData({})};
    }, [])

    return (
        <div>
            <h1>Detail {match.params.mid}페이지입니다.</h1>
            <p>{data.title}</p>
            <img src={process.env.REACT_APP_IMG_URL+data.poster_path} />
        </div>
    )
}

export default Detail
