import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from "./FilmItem.module.sass";


// const FilmCardComponent = (props) => (

class FilmItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPicked: false
        };
        this.getPick = this.getPick.bind(this);
    }

    getPick=(e)=>{
        e.preventDefault();
            this.setState({
                isPicked: true
            }, ()=>{this.props.handleClick(this.props.title)})
        console.log(this.props.id)
    };

    render(){
        return(
            <div key={this.props.id} className={styles.items}>

                {/*рендерим название*/}
                <Link to={`${'/film-info/'}${this.props.id}`}>{this.props.title}</Link>

                {/*рендерим звездочку*/}
                <span
                    // className={this.state.isPicked ? styles.activStar : styles.emptyStar}
                    className={styles.bookmarksPassive}
                    id={this.props.id}
                    // onClick={this.props.handleClick.bind(null, this.props.title)}
                    onClick={this.getPick}

                ></span>
            </div>
        )

    }
}

export default FilmItem;