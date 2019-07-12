
import React, { Component } from "react";
import './banner.scss';
import Header from '../../components/Header/Header';
type Props = { current:Number };
type State = {
    scroll : Number;
};

export default class Banner extends Component<Props,State>{
    render(){
        return (
            <div className ='content' >
                <Header current={this.props.current}/>
                <div className='content-box1'></div>
                <div className='content-box2'>
                <img src={require('../../../access/images/fly_left1.png')} alt=""/>
                <div className='box2-font'> 
                        <div  className='box2-bg'></div>
                        <p  className='box2-p'>姓名 : 大悟泰吉</p>
                        <p  className='box2-p'>出生年月 : 2011年3月</p>
                        <p  className='box2-p'>籍贯 : 湖北-大悟</p>
                        <p  className='box2-p'>理想 : 打破局限，冲破束缚，做与众不同，做意想不到</p>
                </div>
                <img src={require('../../../access/images/fly_middle.png')} height="500px" alt=""/>
                <div className='box2-font2'>
                        <div  className='box2-bg'></div>
                        <p  className='box2-p'>特长 : 互联网</p>
                        <p  className='box2-p'>性格 : 对循规蹈矩 say no，要做就做不一样！</p>
                </div>
                <img src={require('../../../access/images/fly_right1.png')} alt=""/>
                </div>
            </div>
        )
    }
}