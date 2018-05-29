import React, {Component} from 'react';
import historyData from './historyData.js';
import posed from 'react-pose';
import {tween, easing} from 'popmotion';
import Radium from 'radium';

class HistoryPage extends Component {
  state = {
    opacity: 0,
    opacity2: 0,
    opacity3: 0,
    scrolly: 0
  }

  componentDidMount() {
    this.delayOpacity("opacity");
    this.watchScroll();
  }

  watchScroll = () => {
    const cth = document.getElementById('cth').offsetTop;
    const cthHeight = document.getElementById('cth').offsetHeight
    const lzp = document.getElementById('lzp').offsetTop;
    const lzpHeight = document.getElementById('lzp').offsetHeight
    window.addEventListener("scroll", ()=>{
      let sctop = document.documentElement.scrollTop;
      if(sctop >=(cth - cthHeight)) this.delayOpacity("opacity2")
      if(sctop >=(lzp - lzpHeight)) this.delayOpacity("opacity3")
    })
  }

  delayOpacity = (opacityVal) => {
    let opacity = this.state[opacityVal];
    const interv = setInterval(()=>{
      if(opacity < 1){
        opacity+=.2
        if(opacityVal === "opacity"){
          this.setState({opacity: opacity});
        }
        else if(opacityVal === "opacity2"){
          this.setState({opacity2: opacity})
        }
        else if(opacityVal === "opacity3"){
          this.setState({opacity3: opacity})
        }
      }
    },100)
    if(opacity >= 1) {
      clearInterval(interv)
    }
  }

  render(){
    const cardStyle = {
      padding: ".25%",
      width: "70%",
      minHeight: "40vh",
      marginBottom: "5vh",
      fontFamily: "'Raleway', sans-serif",
      marginLeft: "auto",
      marginRight: "auto",
      '@media (max-width: 767px)': {
        width: '90vw'
      },

      //opacity: `${this.state.opacity}`
    }

    const cardTitleStyle = {
      fontFamily: "'Cabin', sans-serif"
    }

    const cardImgStyle = {
      maxHeight: "100%",
      '@media (max-width: 767px) and (orientation: landscape)': {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '50vw'
      },
    }

    const historyDiv = historyData.map((data)=>{
      let marginL;
      const opc = this.state[data.opacity];
      const opacity = {opacity: opc}
      //if(data.left) marginL = "5vw"
      //else marginL = "25vw"
      marginL = "auto"
      return(

        <div className="card" key={data.title} id={data.id} style={{...cardStyle, marginLeft:`${marginL}`,...opacity} }>
          <div className="row">
            <img className="col-10 offset-1 col-md-4 offset-md-0" style={cardImgStyle} src={data.image} alt={data.title} />
            <div className="card-body col-12 col-md-7">
              <h5 className="card-title text-center" style={cardTitleStyle}>{data.title} </h5>
              <p className="card-text text-left">{data.text}</p>
            </div>
          </div>
        </div>

      )
    })

    return(
      <div>{historyDiv}</div>
    )
  }
}

HistoryPage = Radium(HistoryPage);

export default HistoryPage;
