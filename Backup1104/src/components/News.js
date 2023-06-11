import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const apiKey = '6aa1cc2c0722463988b245402edb039b'
    const updateNews = async ()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(25);
        let parsedData = await data.json()
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
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

        return (
            <>
                <h1 className="text-center" style={{color:'white', margin: '65px'}}>infoNews - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines Today</h1>
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
export default News