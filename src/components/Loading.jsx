import React, { useState, useEffect } from 'react';
import './Loading.css'; // You'll style the preloader here

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [doneLoading, setDoneLoading] = useState(false);
    const [fade, setFade] = useState('star-box');

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
                console.log("************");
                setFade('star-box star-fade-in');
            }, 0.5);

            setTimeout(() => {

                setLoading(false);
                setFade('star-box star-fade-out');

                setTimeout(() => {
                    setDoneLoading(true);
                }, 900);

            }, 3000);
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => window.removeEventListener('load', handlePageLoad);
    }, []);

    const onClickMusic = () => {
        window.open("https://open.spotify.com/artist/6R5n86gJJwS69t22FAW27M?si=Xf9ffCDAQiuaR59rf-nsbQ", "_blank", "noreferrer");
    }

    return (
        <>
            {/* Preloader overlay fades out */}
            <div className={`preloader-background ${!loading && 'fade-out'}`}>
            </div>

            {/* <div className={`star-box fade-in ${fadeIn ? 'fade-in' : ''} ${!loading && 'fade-out'}`}> */}
            <div className={fade}>
                <nav className="menu1" onClick={() => onClickMusic()}>
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
            </div>

            {/* Sliding div remains on the page */}
            {/* <div className={`sliding-box ${!loading && 'slide-into-position'}`}> */}

            {/* <div className={`sliding-box ${!loading && 'slide-into-position'}`}>
                <nav className="menu1" onClick={() => onClickMusic()}>
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
            </div> */}

        </>
    );
};

export default Preloader;
