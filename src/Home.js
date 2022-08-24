import React from 'react';

const Home = (props) =>{
    return(
       <div className='row container'>
           <div className="col-12 d-flex justify-content-between align-items-center m-5">
                    <div className="card col-6 p-5">
                        <div className="card-body text-center">
                            <a href="/about-us">About</a>
                        </div>
                    </div>
                    <div className="card col-6 p-5">
                        <div className="card-body text-center">
                        <a href="/head-and-tail">Head and Tail</a>
                        </div>
                    </div>
               </div>
           </div>
    )
}
export default Home;