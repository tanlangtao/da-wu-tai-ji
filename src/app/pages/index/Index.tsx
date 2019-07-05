import React, { Component } from "react";
import Header from '../../components/Header/Header';
import LeftNav from '../../components/LeftNav/LeftNav';
import Longon from '../../components/Longon/Longon';
import { RouterProps } from "react-router";
import './index.scss';
type State = {};

export default class Index extends Component<RouterProps, State> {

    leftNav: LeftNav | null = null;

    render() {
        return (
            <div className ='pageIndex'>
                <div className ='content'>
                    <Header app= {this}/>
                    <LeftNav app= {this} ref={leftNav=>(this.leftNav=leftNav)}/> 
                    <div className ='content-vedio'/>
                    <div className ='content-longon'>
                        <Longon />
                    </div>
                </div>
            </div>
        );
    }
}
