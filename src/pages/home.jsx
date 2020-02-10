import React, {useState, useEffect} from 'react';
import { Link,  useHistory } from "react-router-dom";
import api from '../utils/api';
import qs from 'qs';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
function Home({ location }) {
    const classes = useStyles();
    let history = useHistory();
    const [data, setData] = useState({"results":[]})
    const [input, setInput] = useState('');
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    useEffect(()=> {
        const fetchData = async () => {
            console.log(query)
            const result =  query.q ? await api.getSearchResult(query.q) : await api.getNowPlaying();
            setData(result.data)
            console.log(result);
        }
        fetchData();
        // console.log(data);
    }, [query.q])


    const handleSearch = async (e) => {
        e.preventDefault();
        history.push("/?q="+input);
    }

    return (
        <div>
            <Container maxWidth="lg">
            <h1>Home Page 입니다.</h1>
            <form onSubmit={handleSearch}>
                <TextField value={input} onChange={(e)=>setInput(e.target.value)} required id="standard-required" label="영화 제목을 입력해주세요!" />
            </form>
            <Grid container spacing={3} className={classes.gridContainer}> 
                {data.results.map(d => (
                <Link key={d.id} to={"/detail/"+d.id}>
                <Grid item xs={12}>
                    <img height={420} width={300} src={process.env.REACT_APP_IMG_URL+d.poster_path} alt={d.title} />
                </Grid>
                </Link>
                ))}
            </Grid>
            <Link to="/detail/1">1번 디테일!</Link>
            </Container>
        </div>
    )
}

export default Home
