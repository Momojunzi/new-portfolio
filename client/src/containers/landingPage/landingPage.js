import React, {Component} from 'react';
import BaguaImage from '../../components/baguaImage/baguaImage';
import Radium from 'radium';

class Landing extends Component {
  state = {
    rotating: true,
    rotStart: 0,
    rotEnd: 0
  }

  componentDidMount(){
    this.rotationFunc();
  }

  rotationFunc = () => {
    setInterval(()=>{
      let rotStart = this.state.rotStart;
      if(rotStart === 360) rotStart = 0;
      let rotEnd = rotStart += 3;
      this.setState({rotEnd}, ()=> {
        this.setState({rotating: !this.state.rotating}, ()=>{

          this.setState({rotStart: rotEnd}, ()=> {
        })

        })
      })
    }, 60)
  }

  render(){
    let state = this.state;
    const enterBtn ={
      marginTop: '8vh'
    }

    const landingStyle = {
      '@media (max-width: 767px) and (orientation: portrait)':{
        paddingTop: '10vh'
      },

      '@media (max-width: 767px) and (orientation: landscape)': {
        paddingTop: '10vh'
      }
    }
    return(
      <div className="container" style={landingStyle}>
          <div className="row justify-content-center" >
            <BaguaImage state={state}/>
            <div className="col-12">
              <a href="/history">
                <div className="btn btn-danger btn-lg col-4 col-md-2" style={enterBtn}>Enter</div>
              </a>
            </div>
          </div>
      </div>
    )
  }
}

Landing = Radium(Landing);
export default Landing;
