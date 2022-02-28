import React from 'react';
import './style.css';
import {AiFillVideoCamera} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {IoIosMore} from 'react-icons/io';

const Suggestion = () => {
    return(
        <div className='suggestions'>
            <div className='header-suggestions'>
                <h3>Contacts</h3>
                <div className='icons-suggestion'>
                    <AiFillVideoCamera className='icon-ss'/>
                    <BiSearch className='icon-ss'/>
                    <IoIosMore className='icon-ss'/>
                </div>
            </div>

            <div className='people'>
                <div className='peoples'>
                    <img src='https://yt3.ggpht.com/ytc/AKedOLRQ9icDCGo3491Vxnb_jlCgKxqMLBm9Tg-vwSmsIQ=s900-c-k-c0x00ffffff-no-rj'/>
                    <h3>Nando Moura</h3>
                </div>

                <div className='peoples'>
                    <img src='https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg'/>
                    <h3>Logan Paul</h3>
                </div>

                <div className='peoples'>
                    <img src='https://s.yimg.com/ny/api/res/1.2/DpxpW.Hb9sjeBwNCjxl7YQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/HkdaZSyjXas2gyN2EvtC2Q--~B/aD02NTA7dz02NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/pt/bang_showbiz_br_articles_606/0c23f0704fde2abfb42ea3c9588ee3eb'/>
                    <h3>Whindersson Nunes</h3>
                </div>

                <div className='peoples'>
                    <img src='https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png'/>
                    <h3>Ednaldo Pereira</h3>
                </div>

                <div className='peoples'>
                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                    <h3>Tom Russo</h3>
                </div>

                <div className='peoples'>
                    <img src='https://images.unsplash.com/photo-1645815431072-c2ef5ad0bf53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <h3>Ana da Silva</h3>
                </div>

                <div className='peoples'>
                    <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                    <h3>Pedro Ribeiro</h3>
                </div>

                <div className='peoples'>
                    <img src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                    <h3>Dennis Hann</h3>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;