import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component{


    render(){
        const post = this.props.post ? (
            <div className="postdetails">
                <h4>{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
            </div>
        ):(
                <div className="postdetailserror">
                    <h1>Jy aia daas nie so 'n post nie </h1>
                </div>       
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownprops) =>{
    let id = ownprops.match.params.post_id

    return{
        post: state.posts.find(post => post.id===id)
    }
}


export default connect(mapStateToProps)(Post)
