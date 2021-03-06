import React from 'react'; 
import Screen from './screen'; 
import Button from './button';
import '../styles/main.css';
import PropTypes from 'prop-types';


class Frame extends React.Component {
constructor() {
super();
this.state = {
    question: '',
    answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const mystyle = {
            color: "yellow",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
    return (
    <div style={mystyle} className="frame">
    <div className="calculator-title">
    Simple Calculator
    </div>
    <Screen 
    
    question={this.state.question}
    
    answer={this.state.answer}/>
    
    <div className="button-row">
    <Button label={'1'} handleClick={this.handleClick} type='input' />
    
    <Button label={'2'} handleClick={this.handleClick} type='input' />
    
    <Button label={'3'} handleClick={this.handleClick} type='input' />

    <Button label={'4'} handleClick={this.handleClick} type='input' />

<Button label={'-'} handleClick={this.handleClick} type='action' />

<Button label={'+'} handleClick={this.handleClick} type='action' />

</div>

<div className="button-row">
<Button label={'5'} handleClick={this.handleClick} type='input' />

<Button label={'6'} handleClick={this.handleClick} type='input' />

<Button label={'7'} handleClick={this.handleClick} type='input' />

<Button label={'8'} handleClick={this.handleClick} type='input' />

<Button label={'*'} handleClick={this.handleClick} type='action' />

<Button label={'/'} handleClick={this.handleClick} type='action' />

</div>

<div className="button-row">
<Button label={'9'} handleClick={this.handleClick}

type='input' />

<Button label={'.'} handleClick={this.handleClick}

type='input' />

<Button label={'0'} handleClick={this.handleClick}

type='input' />

<Button label={'Cls'} handleClick={this.handleClick}

type='action' />

<Button label={'='} handleClick={this.handleClick}

type='action' />
</div>
</div>
);
}


handleClick(event){
const value = event.target.value; 
switch (value) {
case '=': { 
const answer = eval(this.state.question).toString();
this.setState({ answer });
break;
}
case 'Cls': {


this.setState({ question: '', answer: '' });
break;
}
default: {
// for every other commmand, update the answer in the state
this.setState({ question: this.state.question += value})
break;
}
}
}
}

export default Frame;