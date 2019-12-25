import React from 'react';
import { connect } from 'react-redux';


const SongDetail = (props) => {
return props.song ? <div><h3>Details for:</h3><p>Title: {props.song.title}</p><p>Duration: {props.song.duration}</p></div> : <div>Select a song</div>
        // return <div>{props.song.title}</div>;
}
const mapStateToProps = (state) => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);