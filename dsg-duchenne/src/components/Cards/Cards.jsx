import React, { Component } from 'react';
import './Cards.css';
import { News } from '../data/News.json'
import Article from '../../views/Article/TemplateArticle'
import { Link } from 'react-router-dom';


class Cards extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showComponent:false,
      News:News
    };
  } 
  click(event){
      this.setState({
        showComponent:true
     })
    }
    render(){
      const News = this.state.News.map((News , i)=>{
        return (
          <div className="card col-lg-4 col-md-6  col-sm-6 mt-4 mb-4" >
            <img  src={News.img} className="card-img-top" alt="imagen sobre investigacion"></img>
            <div className="card-body">
             <div className="text"> <a className="card-text " href="#">{News.title}</a></div>
              <Link  to='/article'> <a className="btn-more" onClick={this.click.bind(this)} href="" >> Leer más</a></Link>
              {/* {this.state.showComponent ? <Article/>: null} */}
              </div>
          </div>
  
      )
      })
        return(
<React.Fragment> 
  <div className="container" id="news">
   <div className="row">
   {News}
   </div>
    
    </div>
    </React.Fragment>
        )
    } 
}
export default Cards;


