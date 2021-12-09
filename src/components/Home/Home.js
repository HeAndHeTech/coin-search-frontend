import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Home.css';

import HomepageCard from '../HomepageCard/HomepageCard';

import Data from '../../data/data';
import Ashsvg from '../../images/ash.svg';

function Home() {
    const { homepage_cards: homepageCards } = Data;
    console.log(homepageCards);
    return (
        <div class='home'>
            <div class="Background">
            <div class='search-container'>
                <SearchIcon />
                <form>
                    <input type='text' name='text' placeholder='Type Here' />
                </form>
            </div>
            </div>
        </div>
    )
}

export default Home;
