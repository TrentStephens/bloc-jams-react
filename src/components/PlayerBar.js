import React, { Component } from 'react';



class PlayerBar extends Component {

  handleTimeFormat(time) {
    var newTime = Math.floor(time / 60) + ':' + Math.floor(time % 60);
    var displayTime = newTime.toString();
    return displayTime
  }

  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-md-skip-backward"></span>
           </button>zz
           <button id="play-pause" onClick={this.props.handleSongClick} >
             <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-md-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">
         <div className="current-time">{this.props.currentTime}</div>
          <input
            type="range"
            className="seek-bar"
            value={handleTimeFormat(this.props.currentTime / this.props.duration)}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.duration}</div>
         </section>
         <section id="volume-control">
           <div className="icon ion-md-volume-low"></div>
           <input
            type="range"
            className="seek-bar"
            value={(this.props.currentVolume)}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            />
           <div className="icon ion-md-volume-high"></div>
         </section>
      </section>
    );
  }
}

export default PlayerBar;
