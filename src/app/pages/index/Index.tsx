import React, { Component } from "react";

import Banner from '../../components/Banner/Banner';
import { RouterProps } from "react-router";
import './index.scss';
import Bottom from "../../components/Bottom/Bottom";
import Content from '../../components/Content/Content';
type State = {};

export default class Index extends Component<RouterProps, State> {

    render() {
        return (
            <div className ='pageIndex'>
                <Banner current={0}/>
                <Content/>
                <Bottom/>
            </div>
        );
    }
}
