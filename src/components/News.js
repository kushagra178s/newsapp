import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import generalNews from "../newsdata/General.json"
import businessNews from "../newsdata/Business.json"
import healthNews from "../newsdata/Health.json"
import scienceNews from "../newsdata/Science.json"
import sportsNews from "../newsdata/Sports.json"
import technologyNews from "../newsdata/Technology.json"

const News = (props) => {

    let newsData;
    if(props.category=="general") {
        newsData = generalNews;
    }
    else if(props.category=="business") {
        newsData = businessNews;
    }
    else if(props.category=="entertainment") {
        newsData = businessNews
    }
    else if(props.category=="health") {
        newsData = healthNews;
    }
    else if(props.category=="science") {
        newsData = scienceNews;
    }
    else if(props.category=="sports") {
        newsData = sportsNews;
    }
    else if(props.category=="technology") {
        newsData = technologyNews;
    }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const apiKey = ''
    const updateNews = async ()=> {
        props.setProgress(10);
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        // let data = await fetch(url);
        let data = newsData;
        props.setProgress(25);
        // let parsedData = await data.json()
        let parsedData = data;
        props.setProgress(70);
        console.log(parsedData); 
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect( () => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} infoNews`
        updateNews(); 
    }, [])


    // const handlePrevClick = async ()=>{
    //     setPage(page-1)
    //     updateNews();
    // } 
    // const handleNextClick = async ()=>{
    //     setPage(page+1)
    //     updateNews();
    // }

    const fetchMoreData = async ( )=> {
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        // let data = await fetch(url);
        let data = newsData;
        // let parsedData = await data.json()
        let parsedData = data;
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

        return (
            <>
                <h1 className="text-center" style={{color:'white', margin: '75px'}}>infoNews - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines Today</h1>
                {/* <br style={{color:'white'}} /> */}
                {/* {loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}>

                    <div className="container">
                        <div className="row"> 
                            {articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source={element.source.id} />
                                </div> 
                            })} 
                        </div> 
                    </div>
                    
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number, 
category: PropTypes.string,
}
export default News ;