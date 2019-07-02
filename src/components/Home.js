import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PlantBG from "../Images/plantBG.jpg"
import {connect} from 'react-redux'

class Home extends Component{

    render(){
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="posts" key={post.id}>
                        <img src={ PlantBG } alt="awe"/>
                        <Link to={'/'+post.id}>{post.title}</Link>
                    </div>
                )
                
            })
        ) : (
            <div className="posts">
                <h1>you have fuckol posti bra</h1>
            </div>
        )
        return(
            <div className="home">
                <h1>awe eks die home</h1>
                { postList }
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}
export default connect(mapStateToProps) (Home)