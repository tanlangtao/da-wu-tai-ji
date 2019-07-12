import React, { Component } from "react";
import './header.scss';

type Props = { current: Number };
type State = {
    index:Number
};
export default class Header extends Component<Props,State>{
    state={
        index:0
    }
    toIndex(){
        window.location.hash = "/index"
    }
    toPage1(){
        window.location.hash = '/companyProfile';
    }
    toPage2(){
        window.location.hash = '/success';
    }
    toPage3(){
        window.location.hash = '/call';
    }
    public render(){
        return (
                <div className='header'>
                    <div className="header-back"/>
                    <ul  className='header-ul'>
                        <li className='header-logo'>
                            <img className='image' src={require(`../../../access/images/logo.png`)} alt=""/>
                        </li>
                        <li className={`header-li ${this.props.current == 0 ? 'cur':''}`} onClick={()=>this.toIndex()}>大有首页</li>
                        <li className={`header-li ${this.props.current == 1 ? 'cur':''}`} onClick={()=>this.toPage1()} >公司简介</li>
                        <li className={`header-li ${this.props.current == 2 ? 'cur':''}`} onClick={()=>this.toPage2()}>成功案例</li>
                        <li className={`header-li ${this.props.current == 3 ? 'cur':''}`} onClick={()=>this.toPage3()}>联系我们</li>
                    </ul>
            </div>
        )
    }
}