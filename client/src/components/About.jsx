import React, {Component} from 'react';
import './About.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <div className="Profile">
                    <h2>Hi, my name is Vanessa.<br/>I'm an Automation Application Engineer.</h2>
                    That means, I usually help people build machines.<br/>
                    I'm currently interested in web technologies.<br/>
                    <br/>
                    <br/>
                    <img className="Dog" src="./Dog.gif"/>
                </div>
                
            </div>
        );
    }
}

export default About;