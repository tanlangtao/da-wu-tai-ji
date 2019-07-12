import React, { Component } from "react";
import './otherServices.scss';
export default class OtherServices extends Component {

    render() {
        return (
            <div className='comContent-box2'>
                <img src={require('../../../access/images/sell_other2.png')} className="comContent-img" alt=""/>
                <ul>
                    <li>
                        <img src={require('../../../access/images/othe1.png')} alt=""/>
                        <h3>网站建设</h3>
                        <p>对手在做的事，你要做的更好，这是竞争力，你别无选择！</p>
                    </li>
                    <li>
                        <img src={require('../../../access/images/othe3.png')} alt=""/>
                        <h3>线上推广</h3>
                        <p>不想红，就看不到黎明后的朝阳，想红，就跟我来！</p>
                    </li>
                    <li>
                        <img src={require('../../../access/images/othe4.png')} alt=""/>
                        <h3>成功案例</h3>
                        <p>如果我是你，就先验货，再谈合作！</p>
                    </li>
                    <li>
                        <img src={require('../../../access/images/othe5.png')} alt=""/>
                        <h3>新闻资讯</h3>
                        <p>这世界变化快，我们要追！</p>
                    </li>
                    <li>
                        <img src={require('../../../access/images/othe6.png')} alt=""/>
                        <h3>招聘信息</h3>
                        <p>这里有一个具象的大悟，我，会给你惊喜！</p>
                    </li>
                </ul>
            </div>
        );
    }
}
