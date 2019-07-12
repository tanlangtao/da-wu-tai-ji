import React, { Component } from "react";
import './bottom.scss';

export default class Bottom extends Component{
    render(){
        return(
            <div className='bottom'>
                <div className='bottom-box1'>
                    <div  className='bottom-p' style={{textIndent:'0'}}>联系方式 : </div>
                    <div  className='bottom-p'><img src={require('../../../access/images/address.png')}/> <span>公司地址 : 大悟县关镇西岳大道310号</span></div>
                    <div  className='bottom-p'><img src={require('../../../access/images/touxiang.png')}/><span>联系电话 : 18687245207</span></div>
                </div>
            
            </div>
        )
    }
}