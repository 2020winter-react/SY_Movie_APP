import axios from 'axios';

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

movieAPI.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = process.env.REACT_APP_TMDB_API_KEY;
    return config;
});

export default {

    getNowPlaying() {
        const url = 'movie/now_playing';
        const params = { 
            language:"ko-KR",
            page:1,
            region:"KR"
        };
        return movieAPI.get(url, {params})
    },

    getMovieDetail(movie_id) {
        const url = 'movie/'+movie_id.toString();
        const params = { 
            language:"ko-KR",
        };
        return movieAPI.get(url, {params})
    },


    getSearchResult(queryString) {
        const url = '/search/movie';
        const params = { 
            language:"ko-KR",
            query: queryString,
            page: 1
        };
        return movieAPI.get(url, {params})    
    }

}