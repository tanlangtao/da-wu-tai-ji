import React, { Component } from "react";
import Index from '../../pages/index/Index';
import './header.scss';

type Props = { app: Index };
type State = {};
export default class Header extends Component<Props,State>{

    app =this.props.app;

    public render(){
        return (
                <div className='header'>
                    <div className="header-back"/>
                    <ul  className='header-ul'>
                        <li className='header-li'>进入官网</li>
                        <li className='header-li' onClick={()=>this.app.leftNav!.runTo(300)}>下载游戏</li>
                        <li className='header-li'>
                            <img className='image' src={require(`../../../access/index/hk.png`)} alt=""/>
                        </li>
                        <li className='header-li' onClick={()=>this.app.leftNav!.runTo(900)}>活动中心</li>
                        <li className='header-li'>客服支持</li>
                    </ul>
            </div>
        )
    }
}