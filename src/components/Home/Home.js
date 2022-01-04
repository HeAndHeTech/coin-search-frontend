import { React, useState } from 'react';
import './Home.css';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

function Home() {
    const sendSearchKeyword = () => { history.push(`/search?key=${searchKeyword}`) }
    const [searchKeyword, setsearchKeyword] = useState('');
    return (
        <div className="home-bg">
            <MDBContainer fluid="true" className='center'>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="logo"></div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="input-group md-form form-sm form-1 pl-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text orange" id="basic-text1">
                                    <MDBIcon className="text-white" icon="search" />
                                </span>
                            </div>
                            <input className="form-control my-0 py-2" type="text" aria-label="Search" onchange={(e) => setsearchKeyword(e.target.value)} />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Home;
