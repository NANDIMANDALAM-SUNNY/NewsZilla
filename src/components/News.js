import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:5,
        category:'general'

    }
    static propsTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,

    }
    capatalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.capatalizeFirstLetter(this.props.category)} -NewsZilla `;
    }
    async updateNews(){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0126db5798594886ad7b388805822a60&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json()
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({articles:parseData.articles,
                    totalResults:parseData.totalResults,
                    loading:false
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }
     handlePreviousClick=async ()=>{
        this.setState({page:this.state.page-1})
        this.updateNews();

    }
    handleNextClick=async ()=>{
        this.setState({page:this.state.page+1})
        this.updateNews();
     }
    render() {
        return (
            <div className='constainer my-3'>
               <h2 className='container mainHeading text-center' style={{margin:'80px 0px'}}>NewZilla-Top  {this.capatalizeFirstLetter(this.props.category)} Headings</h2>
               {this.state.loading && <Spinner/>}
               <div className="row container">
               {!this.state.loading && this.state.articles.map((element)=>{
                   return <div className="col-md-4 container " key={element.url}>
                    <NewsItem  title={element.title.slice(0,90)} description ={element.description.slice(0,100)} urlToImage={element.urlToImage} url={element.url}/>
                   </div>
               })}
                    
               </div>
               <div className="container d-flex justify-content-between">
               <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
               <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
               </div>
            </div> 
        )
    }
}

export default News
