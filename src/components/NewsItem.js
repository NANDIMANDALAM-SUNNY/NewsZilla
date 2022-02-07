import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let {title,description,url,urlToImage}=this.props;
        return (
            <div>
               <div className="card" >  
                    <img src={!urlToImage?"https://ichef.bbci.co.uk/news/1024/branded_news/D3AE/production/_122709145_gettyimages-1231796848.jpg":urlToImage} style={{height:'250px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    </div>
            </div>
        )
    }
}

export default NewsItem
