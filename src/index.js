import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import Box from './components/box.jsx';
import '../sass/main.scss';
import '../sass/some.css'


function App(props){


    return (
        <div>
            
        <h1>This is My React App</h1>
        <Box msg="goodbye" />
        </div>
    )
}



const root = document.getElementById('root');

ReactDOM.render(<App/>,root)