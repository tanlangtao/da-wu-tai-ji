import React, { Component } from "react";

import Header from '../../components/Header/Header';
import { RouterProps } from "react-router";
import './companyProfile.scss';
import Bottom from "../../components/Bottom/Bottom";
import OtherServices from "../../components/OtherServices/OtherServices";
type State = {};

export default class CompanyProfile extends Component<RouterProps, State> {

    render() {
        return (
            <div className ='com'>
                <Header current={1} />
                <div className='comContent'>
                    <div className='comContent-box1'>
                        <h2>关于我们</h2>
                        <p>大悟，据说是老板辗转反侧想了好久才挤出来的名字，这个带点土气的名字pk掉了近百个洋气的名字。
                        因为它承托着创造者的梦想和希望：大亦大，有所悟，有所为。</p>
                        
                        <ul>
                            <li>大时代，有拼头</li>
                            <li>大网络，有看头</li>
                            <li>大营销，有搞头</li>
                            <li>大未来，有盼头</li>
                        </ul>
                        <img src={require('../../../access/images/about_img2.png')} alt=""/>
                        <h2>大有可观 ， 大有可为</h2>
                        <p>湖北大悟泰吉网络科技有限公司，从业始于2004年12月，今已经超过了10个年头。10年间，大悟一直专注于品牌网站建设、网站全球推广、网络营销策划于一体的网络应用服务，为中小企业提供互联网应用解决方案，建设更多更好的互联网品牌形象，提供专业的互联网品牌策划，并实施高标准的设计方案，创造真正意义上的品牌网站。</p>
                        <p>大悟一直以强大技术队伍为先锋，富有凝聚力的服务团队为后盾，在开发应用互联网产品服务方面始终不忘初心、砥砺前行，获得了社会各界的广泛赞誉和认同。支撑起这家公司的不仅仅是每一位对我们付出信任的客户，也包含了大悟人对未来网络世界的信心与期盼。</p>
                        <p>如今，大悟凭借10年的经验以及对互联网未来发展的信心，决定将营销和网络进行整合，将我们擅长的设计、策划、技术、网络与营销进行组合，为您定制一份从0到10的营销盛宴。这有别于其他网络公司的运营模式即是机会，也是挑战！</p>
                        <p>未来，大悟网络将始终以不懈的努力、更高的目标来要求自己，在不断完善自身管理模式和提高技术研发能力的同时，会大力倡导推行整合网络营销模式，为中小企业网络营销的发展贡献自己的力量。</p>
                        <p>让我们一起大作为，有担当！</p>
                    </div>
                    <OtherServices/>
                </div>
                <Bottom/>
            </div>
        );
    }
}
