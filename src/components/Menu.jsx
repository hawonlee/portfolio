import React from "react";
import ReactDOM from "react-dom";
import './Menu.css'


function Menu() {

  const currDate = new Date().toLocaleDateString();

  const onClickMusic = () => {
    window.open("https://open.spotify.com/artist/6R5n86gJJwS69t22FAW27M?si=Xf9ffCDAQiuaR59rf-nsbQ", "_blank", "noreferrer");
  }


  return (
    <div className='menu-container'>
      <div className='vertical-container'>
        <div className='text'>
          (이하원)

        </div>
      </div>

      <div className='time-container'>
        Hawon Lee
      </div>

      <div className='logo-container'>

        <nav className="menu" onClick={() => onClickMusic()}>
          <div className="menu__item">
            <div className="marquee">
              <div className="marquee__inner">
                <span> * + :｡ .｡˚ · • * . ° . </span>
                <span> * + :｡ .｡˚ · • * . ° . </span>
                <span> * + :｡ .｡˚ · • * . ° . </span>
                <span> * + :｡ .｡˚ · • * . ° . </span>
              </div>
            </div>
          </div>
        </nav>
        {/* <div className='korean-text'>
          (이하원)
        </div> */}
      </div>



      {/* <div className='time-container'>
        <div className='loop'>
          <div className='loop-slide'>
            <div className='time'>*</div>
          </div>
          <div className='loop-slide'>
            <div className='time'>*</div>
          </div>
        </div>


      </div> */}

    </div>


  )
}

export default Menu
