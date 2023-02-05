import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, Source} = this.props;
        return (
            <div className="my-2">
                <div className="card" >
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{Left:'90%', zIndex:'1'}} >{!Source?"NEWZ":Source}</span>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="...."/>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,60)}....</h5>
                        <p className="card-text">{description.slice(0, 100)}....</p>
                        <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem