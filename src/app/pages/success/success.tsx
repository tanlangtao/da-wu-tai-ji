import React, { Component } from "react";

import Header from '../../components/Header/Header';
import { RouterProps } from "react-router";
import './success.scss';
import Bottom from "../../components/Bottom/Bottom";
import OtherServices from '../../components/OtherServices/OtherServices';
type State = {};

export default class Success extends Component<RouterProps, State> {

    render() {
        var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        return (
            <div className ='success'>
                <Header current={2}/>
                <div className='success-title'>
                        <p className= 'p1'><span>Partner</span> 我们重视每一个客户</p>
                        <p className= 'p2'>跟你的合作会是我们签一个客户的重要筹码，只能做好，别无选择！</p>
                        <p className= 'p3'>Have to be ready, don't have a choice</p>
                    </div>
                <div className='success-img'>
                    <ul>
                        {
                          arr.map((e,index)=>{
                            return <li key ={index} >
                                    <div className='success-div'>
                                        <img src={require(`../../../access/upload/${e}-a.jpg`)} alt=""/>
                                        <img src={require(`../../../access/upload/${e}-b.jpg`)} alt=""/>
                                    </div>
                            </li>
                          })
                        }
                    </ul>
                </div>
                <OtherServices/>
                <Bottom/>
            </div>
        );
    }
}
