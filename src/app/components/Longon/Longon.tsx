import React, { Component } from "react";
import './longon.scss';

export default class Longon extends Component{

    account:string = ''
    public render(){
        return (
                <div className='longon'>
                    <div className='longon-box1'>
                        <div className='longon-zhuce'>
                            <div className='zhuce-title'>快速注册</div>
                            <div className='group'>
                                <div className="left-title" >用户名:</div>
                                <input
                                    autoComplete="off"
                                    className="group-input"
                                    type="text"
                                    placeholder=""
                                    onChange={e => (this.account = e.target.value)}
                                />
                                <div className="group-dev">由字母或数字组成的6-10个字符</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className='longon-box2'>
                        <div className='longon-xiazai'>
                            <div className='zhuce-title'>下载游戏</div>
                            <div className='xiazai-people'/>
                            <div className='xiazai-btn' style={{marginTop:'-40px'}}>专线极速下载</div>
                            <div className='xiazai-btn'>HTTP下载</div>
                        </div>
                    </div>
            </div>
        )
    }
}