import React, { Component } from "react";

import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
import { RouterProps } from "react-router";
import './callMe.scss';
type State = {};

export default class callMe extends Component<RouterProps, State> {

    render() {
        return (
            <div className ='callMe'>
                 <Header current={3} />
                 <div className="callMe-content">
                    <div className="content-box1">
                        <h2>CONTACT</h2>
                        <h3>联系我们</h3>
                        <div>
                            <p>我们想做的是用创意和推广方案将客户推到大家的面前，让更多的人知道他的好。</p>
                            <p>What we really want to do is to use creativity and customer outreach program will be pushed to front of everybody.</p>
                        </div>
                    </div>
                    <div className="content-box2">
                        <img src={require('../../../access/images/contactimg.png')} alt=""/>
                        <div className="content-box2-right">
                            <h2>大悟泰吉网络科技有限公司</h2>
                            <div>
                                <img src={require('../../../access/images/contactimg1.png')} alt=""/>
                                公司地址 : 大悟县关镇西岳大道310号
                            </div>
                            <div>
                                <img src={require('../../../access/images/contactimg1.png')} alt=""/>
                                联系电话 : 18687245207
                            </div>
                        </div>
                    </div>
                 </div>
                 <Bottom/>
            </div>
        );
    }
}
