import React from 'react'; 
import ScreenRow from './screenRow';
import PropTypes from 'prop-types';
import '../styles/main.css';


const Screen = (props) => {
return (
<div className="screen">
<ScreenRow value={props.question}/>
<ScreenRow value={props.answer}/>
</div>
);
}


Screen.propTypes = {
question: React.PropTypes.string.isRequired,
answer: React.PropTypes.string.isRequired
}


export default Screen;