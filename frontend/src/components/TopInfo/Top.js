import React from 'react'
import './Top.css'
import One from './../../Images/gidion.jpg'
import Two from './../../Images/jess.jpg'
import Three from './../../Images/salem.jpg'

const Top = () => {
    return (
        <>
            <div className="top">
                <div className="topdata ">
                    {/* cover1 */}
                    <div className="cover1">
                        <div className="cover-data">
                            <div className="title1"><h1>Lorem, ipsum.</h1></div>
                            <div className="title2"><h1>Lorem.</h1></div>
                            <div className="title3"><h3>Lorem, ipsum.</h3></div>
                            <div className="enroll"><h6>Lorem ipsum dolor sit amet.</h6>
                                <div className="vide"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="topdata">
                    {/* cover3 */}
                    <div className="banner-cover">
                        <div className="img-cover"><img src={One} alt="" /></div>
                        <div className="desc">
                            <div>
                            <div className="desc-title">title</div>
                            <div className="desc-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sequi voluptatum at porro autem ducimus veritatis quia praesentium magni fuga illum cupiditate harum, iste excepturi odit ipsam aspernatur perspiciatis. Quas beatae ipsam ratione maxime at doloremque itaque error, voluptas quaerat nam excepturi autem inventore deleniti neque earum voluptates, quam atque.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topdata">
                    {/* cover4 */}

                    <div className="cover4">
                        <div className="title"><h5>Lorem ipsum dolor sit amet consectetur.</h5></div>

                            <div className="two-parts">
                                <div className="left-part">
                                    <div className="left-image"><img src={Two} alt="" /></div>
                                </div>
                                <div className="right-part">
                                    <div className="right-image"><img src={Three} alt="" /></div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                


            </div>
        </>
    )
}

export default Top
