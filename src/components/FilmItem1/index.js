import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from "./FilmItem.module.sass";


const Items = (props) => {
    return <li
        id={props.id}
        className={styles.items}
    >
        <Link
            to={`/film/${props.id}`}
        >
            {props.title}
        </Link>
        <span className={props.style}
              onClick={props.showBookmarks}
        >

        </span>

    </li>
};

// const FilmCardComponent = (props) => (

class FilmItem1 extends Component {
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
            <li key={this.props.id}
                className={styles.items}>
                <Link
                    to={`/film/${this.props.id}`}
                >
                    {this.props.title}
                </Link>
                <span className={styles.bookmarksPassive}
                      onClick={this.getPick}
                >

        </span>
                {/*рендерим название*/}
                {/*<Link to={`${'/film-info/'}${this.props.id}`}>{this.props.title}</Link>*/}

                {/*/!*рендерим звездочку*!/*/}
                {/*<span*/}
                {/*    // className={this.state.isPicked ? styles.activStar : styles.emptyStar}*/}
                {/*    className={styles.bookmarksPassive}*/}
                {/*    id={this.props.id}*/}
                {/*    // onClick={this.props.handleClick.bind(null, this.props.title)}*/}
                {/*    onClick={this.getPick}*/}

                {/*></span>*/}
            </li>



        )

    }
}

export default FilmItem1;