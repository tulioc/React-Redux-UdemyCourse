import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyAckHwg3LSqs6k8ucCbklGOTLV3NTipm0g";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Um Barril de Rap');
  };

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 900);
    return(
        <div className="row">
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
              videos={this.state.videos} />
        </div>
    );
  }

};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.getElementById('container'));
