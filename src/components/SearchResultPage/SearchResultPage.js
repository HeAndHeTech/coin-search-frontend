import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Home.css';

import HomepageCard from '../HomepageCard/HomepageCard';

import Data from '../../data/data';
import Ashsvg from '../../images/ash.svg';
import { useParams } from 'react-router-dom';

function SearchResultPage() {
    
    const [searchResult, setsearchResult] = useState([]);
    const [offsetSettings, setOffsetSettings] = useState({});
    //const user=()=>{ const { searchKeyword } = useParams(); }
    const queryParams = new URLSearchParams(window.location.search);
    const searchKeyword = queryParams.get('key');
    const history = useHistory();
    const { match } = props;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`?key=${searchKeyword}`); //put search API URL
            setsearchResult(response?.data?.data?.searchResult);
            console.log(response.data.data.searchResult)
            const newOffsetSettings = {
                is_next_enabled: response?.next_button?.is_next_enabled,
                next_offset: response?.next_button?.next_offset,
                is_previous_enabled: response?.previous_button?.is_previous_enabled,
                previous_offset: response?.previous_button?.previous_offset,
            };
            setOffsetSettings(newOffsetSettings);
        }
        fetchData();
    })
    return (
        <div class='home'>
            <div class="Background">
            <div class='search-container'>
                <SearchIcon />
                <form>
                    <input type='text' name='text' placeholder='Type Here' />
                </form>
                <div className="resultpage" >
                   <p>{searchResult.url}</p> 
                   <a href={`${searchResult.url}`}><h3>{searchResult.heading}</h3></a> 
                   {/* //heading column */}
                </div>
            </div>
            </div>
        </div>
    )

    
}

export default Home;
