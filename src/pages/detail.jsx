import React, {useState, useEffect} from 'react';
import api from '../utils/api';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import DetailHeader from '../components/DetailHeader';
import DetailCard from '../components/DetailCard';


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    header: {

    }
  });


const sectionStyle = (backdrop_path) => ({
    backgroundImage: `url(${process.env.REACT_APP_IMG_URL_ORIGINAL+backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '30vh',
    width: '100%',
    padding: '12em 0 6em 0',
})

const titleStyle = {
    fontSize: '3em',
    lineHeight: '0em',
    color: 'rgba(255, 255, 255, 0.7)',
}



function Detail({match}) {
    const [data, setData] =useState({})
    const classes = useStyles();

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
        <section style={sectionStyle(data.backdrop_path)}>
            <div className="inner">
                <h1 style={titleStyle}>{data.title}</h1>
                
            </div>
        </section>
        <Container maxWidth="lg">
            <DetailHeader data={data}/>
            <DetailCard data={data}/>
        </Container>
     </div>
    )
}

export default Detail
