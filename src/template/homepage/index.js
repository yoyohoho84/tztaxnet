import React, {Component} from 'react';
import Films from "../../components/FilmCard/Films";
import Bookmarks from "../../components/bookmarks/Bookmarks";
import styles from "./HomePage.module.css";
import FilmSearchContainer from "../../containers/FilmSearchContainer";

export default () => {
    return (
        <div className={styles.main}>
            {/*<Films/>*/}
            {/*<Bookmarks/>*/}
            <FilmSearchContainer/>

        </div>
    )
}
