import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './javaScript/SearchMovie';
import SearchMovie from './javaScript/SearchMovie';


class Main extends React.Component {
    render() {
        return (<div className = "container">
            <h1 className = "title" > React Movie Search </h1> 
            <br>
            </br>
            <SearchMovie></SearchMovie>
             </div>);
    }
}

ReactDOM.render( < Main / > , document.getElementById('root'));