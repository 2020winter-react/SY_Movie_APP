import React from 'react'


const infoContainerStyle = {
    display:'flex', 
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '700px', 
    background: 'white',
    margin: '50px auto 50px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}

const infoContentStyle = {
    padding: '0px 20px',
    textAlign: 'left',
}


const subStyle = {
    fontSize: '2rem',
    // lineHeight: '1em',
    margin: '15px 0 0 15px',
    // color: 'rgba(255, 255, 255, 0.5)',
}

function DetailInfo({data}) {
    const _data = data;
    const genresStr = _data.genres ? _data.genres.map(n=>n.name).join(' | ') : ''

    return (
        <div style={infoContainerStyle}>
            <h3 style={subStyle}>Overview</h3>
            <div style={infoContentStyle}>
                <p>{data.overview}</p>
            </div>
        </div>
    )
}

export default DetailInfo
