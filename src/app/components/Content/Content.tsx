import React, { Component } from "react";
import './content.scss';

export default class Content extends Component{
    render(){
        return(
            <div className = 'content2'>
                <div className = 'content2-box1'>
                    <img src={require('../../../access/images/work_title.png')} alt=""/>
                </div>
                <div className = 'content2-box2'>
                    <ul >
                        <li >
                            <div className ='content2-image' style={{backgroundPositionX:`-38px`}}></div>
                            <p>网络公关</p>
                            <p>倾听客户需求，了解用户使用环境和操作流程</p>
                        </li>
                        <li>
                            <div className ='content2-image' style={{backgroundPositionX:'-206px'}}></div>
                            <p>品牌营销</p>
                            <p>你的声名响彻宇宙，但却与信任毫不相干</p>
                        </li>
                        <li>
                            <div className ='content2-image' style={{backgroundPositionX:'-375px'}}></div>
                            <p>线上推广</p>
                            <p>火星人都已经知道了你的存在</p>
                        </li>
                        <li>
                            <div className ='content2-image'style={{backgroundPositionX:'-543px'}}></div>
                            <p>网站建设</p>
                            <p>搜索不到，就等同于没有机会！</p>
                        </li>
                        <li>
                            <div className ='content2-image' style={{backgroundPositionX:'-712px'}}></div>
                            <p>网上商城</p>
                            <p>初步页面测调，规范完善</p>
                        </li>
                        <li>
                            <div className ='content2-image' style={{backgroundPositionX:'-880px'}}></div>
                            <p>技术开发</p>
                            <p>后台程序和页面数据对接与开发</p>
                        </li>
                    </ul>
                </div>
                <div className='content2-box3'>
                    <img src={require('../../../access/images/success_title.png')} alt=""/>
                </div>
                <div className='content2-box4'>
                    <p>浩瀚宇宙，始终、无声，每一步都在挑衅着局限的束缚，对于未知 '大悟' 只进不退</p>
                    <img src={require('../../../access/images/h19.jpg')} alt=""/>
                    <p>1光年 = 94605亿千米，看似遥远，但也近在咫尺，赴约未知星球'大悟'天生爱挑战.</p>
                </div>
            </div>
        )
    }
}