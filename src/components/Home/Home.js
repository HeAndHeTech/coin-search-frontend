import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Home.css';

import HomepageCard from '../HomepageCard/HomepageCard';

import Data from '../../data/data';
import Ashsvg from '../../images/ash.svg';

function Home() {
    const sendSearchKeyword=()=>{history.push(`/search?key=${searchKeyword}`)}
    const [searchKeyword,setsearchKeyword] = useState('');
    return (
        <div class='home'>
            <div class="Background">
            <div class='search-container'>
                <SearchIcon onClick={sendSearchKeyword} />
                <form>
                    <input type='text' name='text' placeholder='Type Here'  onchange = {(e)=>setsearchKeyword(e.target.value)}/>
                </form>
            </div>
            </div>
        </div>
    )

    
}

export default Home;
