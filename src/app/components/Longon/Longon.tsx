import React, { Component } from "react";
import './longon.scss';

export default class Longon extends Component{
    state={
        code:''
    }

    account : string = ''

    nick_name : string = ''

    password : string = ''

    repeat_password : string =''

    code : string = ''
    //产生验证码  
    
    public componentDidMount(){
        this.createCode()
    }
    createCode(){ 
        var code = ''
        var codeLength = 4;//验证码的长度  
        var random  = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
        'S','T','U','V','W','X','Y','Z');//随机数  
        for(var i = 0; i < codeLength; i++) {//循环操作  
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
            code += random[index];//根据索引取得随机数加到code上  
        }  
        this.setState({
            code:code
        })
    } 
    downLoad(){
        window.open('https://www.h6821.com/4/201900202/1/11795/1','blank')
    }

    public render(){
        return (
                <div className='longon'>
                    {/* <div className='longon-box1'>
                        <div className='longon-zhuce'>
                            <div className='zhuce-title'>快速注册</div>
                            <div className='group'>
                                <div className="left-title" >用户名:</div>
                                <div className='groupIcon' style={{
                                    background: `url(${require('../../../access//index/icon_user_name.png')}) `,
                                    backgroundSize:'100% 100%'
                                }}></div>
                                <input
                                    autoComplete="off"
                                    className="group-input"
                                    type="text"
                                    placeholder=""
                                    onChange={e => (this.account = e.target.value)}
                                    maxLength={10}
                                    minLength={6}
                                />
                                <div className="group-dev">由字母或数字组成的6-10个字符</div>
                            </div>
                            <div className='group'>
                                <div className="left-title" >玩家昵称:</div>
                                <div className='groupIcon' style={{
                                    background: `url(${require('../../../access//index/icon_pwd.png')}) `,
                                    backgroundSize:'100% 100%'
                                }}></div>
                                <input
                                    autoComplete="off"
                                    className="group-input"
                                    type="text"
                                    placeholder=""
                                    onChange={e => (this.nick_name = e.target.value)}
                                    maxLength={10}
                                    minLength={6}
                                />
                                <div className="group-dev">由字母或数字组成的6-10个字符</div>
                            </div>
                            <div className='group'>
                                <div className="left-title" >登陆密码:</div>
                                <div className='groupIcon' style={{
                                    background: `url(${require('../../../access//index/icon_nickName.png')}) `,
                                    backgroundSize:'100% 100%'
                                }}></div>
                                <input
                                    autoComplete="off"
                                    className="group-input"
                                    type="text"
                                    placeholder=""
                                    onChange={e => (this.password = e.target.value)}
                                    maxLength={10}
                                    minLength={6}
                                />
                                <div className="group-dev">不能包含全角字符</div>
                            </div>
                            <div className='group'>
                                <div className="left-title" >确认密码:</div>
                                <div className='groupIcon' style={{
                                    background: `url(${require('../../../access//index/icon_nickName.png')}) `,
                                    backgroundSize:'100% 100%'
                                }}></div>
                                <input
                                    autoComplete="off"
                                    className="group-input"
                                    type="text"
                                    placeholder=""
                                    onChange={e => (this.repeat_password = e.target.value)}
                                    maxLength={10}
                                    minLength={6}
                                />
                                <div className="group-dev">不能包含全角字符</div>
                            </div>
                            <div className='group2'>
                                <input
                                    autoComplete="off"
                                    className="group2-input"
                                    type="text"
                                    onChange={e => (this.repeat_password = e.target.value)}
                                    maxLength={10}
                                    placeholder={'输入验证码'}
                                />
                                <div className="group2-dev" onClick={()=>this.createCode()}>{this.state.code}</div>
                            </div>
                            <div className='zhuce-btn'>注 册</div>
                        </div>
                    </div> */}
                    <div className='longon-box2'>
                        <div className='longon-xiazai'>
                            <div className='zhuce-title'>下载游戏</div>
                            <div className='xiazai-people'/>
                            <div className='xiazai-btn' style={{marginTop:'-40px'}} onClick={()=>this.downLoad()}>专线极速下载</div>
                            <div className='xiazai-btn' onClick={()=>this.downLoad()}>HTTP下载</div>
                        </div>
                    </div>
            </div>
        )
    }
}