import React from 'react'


const infoContainerStyle = {
    display:'flex', 
    justifyContent: 'space-between',
    width: '700px', 
    background: 'white',
    margin: '-50px auto 50px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}

const infoContentStyle = {
    width: '400px',
    padding: '20px',
    textAlign: 'left',
}

const infoPosterStyle = {
    width: '300px',
    display: 'block',
}

const subStyle = {
    fontSize: '2em',
    lineHeight: '1em',
    // color: 'rgba(255, 255, 255, 0.5)',
}

function DetailInfo({data}) {
    const _data = data;
    const genresStr = _data.genres ? _data.genres.map(n=>n.name).join(' | ') : ''

    return (
        <div style={infoContainerStyle}>
            <div>
                <img style={infoPosterStyle} src={process.env.REACT_APP_IMG_URL+data.poster_path} />
            </div>
            <div style={infoContentStyle}>
                <h2 style={subStyle}>{data.original_title}</h2>
                <p>{genresStr}</p>
                <hr />
                <p>개봉: {data.release_date}</p>
                <p>수익: {data.revenue ? '$ ' + data.revenue.toLocaleString() : '알 수 없음'}</p>
            </div>
        </div>
    )
}

export default DetailInfo
