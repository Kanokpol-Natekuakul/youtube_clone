import React, { useEffect, useState } from 'react'
import Nav from '../conponents/Nav/Nav';
import Sidebar from '../conponents/Sidebar/Sidebar';
import "./search.css"
import { useLocation } from 'react-router-dom';
import CardSearch from '../conponents/Card/CardSearch';

function SearchPage() {
  const location = useLocation();
  const query = location.state?.query;

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
  const fetchSearch = async () => {
    const data = await fetch(
      `http://localhost:3000/result?search_query=${query}` 
    );
    const json = await data.json();
    setSearchResult(json);
    console.log(json);
  };
  if (query) {
    fetchSearch();
  }
}, [query]);
  return (
    <section id="main-layout">
    <Nav></Nav>
    <Sidebar></Sidebar>
    <section id="content">  
      <section className="the-cards-search"> 
        {searchResult.map((result, index) => (
         <CardSearch key={index} result={result}></CardSearch>
        ))}
        
        <div className="card"> 
          <div className="-thumb"> 
            <img src="https://placehold.co/480x270" alt="" /> 
          </div>
          <div className="-about"> 
            <div className="-detail"> 
              <div className="-title"></div>  
              <div className="-view"></div>    
              <div className="-channel">      
                <div className="-channel-img"></div> 
                <div className="-channel-name"></div> 
              </div>
            </div>
            <div className="-caption"></div>
            <div className="-option"></div>
          </div>
        </div>
        <div className="card"> 
          <div className="-thumb"> 
            <img src="https://placehold.co/480x270" alt="" /> 
          </div>
          <div className="-about"> 
            <div className="-detail"> 
              <div className="-title"></div>  
              <div className="-view"></div>    
              <div className="-channel">      
                <div className="-channel-img"></div> 
                <div className="-channel-name"></div> 
              </div>
            </div>
            <div className="-caption -title"></div>
            <div className="-option"></div>
          </div>
        </div>
      </section>
    </section>
  </section>
  );
}

export default SearchPage