import React, { Component } from "react";
import Header from '../../components/Header/Header';
import LeftNav from '../../components/LeftNav/LeftNav';
import Longon from '../../components/Longon/Longon';
import { RouterProps } from "react-router";
import './index.scss';
type State = {};

export default class Index extends Component<RouterProps, State> {

    leftNav: LeftNav | null = null;
    gameLoad(){
        window.open('https://entry.v2910.com/4/201900202/1/11795/3','blank')
    }

    render() {
        return (
            <div className ='pageIndex'>
                <div className ='content'>
                    <Header app= {this}/>
                    <LeftNav app= {this} ref={leftNav=>(this.leftNav=leftNav)}/> 
                    <div className ='content-vedio'/>
                    <div className ='content-longon'>
                        <Longon />
                    </div>
                    <div className ='content-huodong'>
                        <div className ='btn_ddz' onClick={()=>this.gameLoad()}>立即前往</div>
                        <div className ='btn_qhb' onClick={()=>this.gameLoad()}>立即前往</div>
                    </div>
                    <div className ='content-ddzds'>
                        <div className ='btn_ddz' onClick={()=>this.gameLoad()}>立即前往</div>
                    </div>
                </div>
            </div>
        );
    }
}
