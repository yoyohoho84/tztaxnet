import React, {Component} from 'react';

// Фйункциональный компонент
const InputSearch = (props) => (

    <input className={props.style}
           onChange={props.handler}>
        {props.btnName}
    </input>

);

export default InputSearch;





// import React, {Component} from 'react';
// import styles from "./Search.module.sass";
//
//
// class InputSearch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             initialItems: [],
//             items: []
//         };
//
//     }
//
//     filterList = (event) => {
//         let items = this.state.initialItems;
//         items = items.filter((items) => {
//             return items.toLowerCase().search(event.target.value.toLowerCase() !== -1)
//         });
//         this.setState({items: items});
//     };
//
//     componentDidMount() {
//         this.setState({
//             initialItems: this.props.content,
//             items: this.props.content
//         })
//     }
//
//     render() {
//         return (
//             <div className={styles.searchGrid}>
//                 <input className={styles.input}
//                        type="text"
//                        value=""
//                        id="search-input"
//                        placeholder="Search..."
//                        onChange={this.filterList}
//                 />
//                 <div>
//                     {
//                         this.state.items.map((item) =>  {
//                         return <div key={item}>{item}</div>
//                     })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default InputSearch;