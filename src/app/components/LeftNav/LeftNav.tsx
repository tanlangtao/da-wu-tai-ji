
import React, { Component } from "react";
import Index from '../../pages/index/Index';
import './leftNav.scss';

type Props = { app: Index };
type State = {
    scroll : Number;
};

export default class Header extends Component<Props,State>{

    state={
        scroll:0
    }
    public mScroll!:Element | null;
    public timer :any =null;

    public toPage1=()=>{ this.runTo(300) }

    public toPage2=()=>{ this.runTo(900) }

    public toPage3=()=>{ this.runTo(1500) }

    public toPage4=()=>{ this.runTo(2100) }

    public toPage5=()=>{ this.runTo(2798) }

    public componentDidMount(){
        this.mScroll = document.scrollingElement;
        let self = this;
        window.addEventListener('scroll',()=>{
            self.setState({
                scroll:this.mScroll!.scrollTop
            })
        })
    }
    public runTo(num:number){
        clearInterval(this.timer)
        let idx = 50 ;
        this.timer = setInterval(()=>{
            if(this.mScroll!.scrollTop>num){
                this.mScroll!.scrollTop -= idx;
                if(this.mScroll!.scrollTop<=num){
                    clearInterval(this.timer)
                }
            }else{
                this.mScroll!.scrollTop += idx;
                if(this.mScroll!.scrollTop>=num){
                    clearInterval(this.timer)
                }
            }
        },5)

    }
    public render(){
        let scroll = this.state.scroll ;
        return (
            <div className='leftNav'>
                <ul className='leftNav-ul'>
                    <li className='leftNav-li leftNav-li1'>
                        <span className='leftNav-changxian'/>
                        <span className={scroll>=300?'current-span':'leftNav-span'} onClick={this.toPage1}>
                            <i className={scroll>=300?'current-yuanquan':'leftNav-yuanquan'}/>注册内容
                        </span>
                    </li>
                    <li className='leftNav-li' >
                        <span className='leftNav-duanxian'/>
                        <span className={scroll>=900?'current-span':'leftNav-span'}  onClick={this.toPage2}>
                            <i className={scroll>=900?'current-yuanquan':'leftNav-yuanquan'}/>
                            全新活动
                        </span>
                    </li>
                    <li className='leftNav-li' >
                        <span className='leftNav-duanxian'/>
                        <span className={scroll>=1500?'current-span':'leftNav-span'}  onClick={this.toPage3}>
                            <i className={scroll>=1500?'current-yuanquan':'leftNav-yuanquan'}/>
                            斗地主比赛
                        </span>
                    </li>
                    <li className='leftNav-li' >
                        <span className='leftNav-duanxian'/>
                        <span className={scroll>=2100?'current-span':'leftNav-span'}  onClick={this.toPage4}>
                            <i className={scroll>=2100?'current-yuanquan':'leftNav-yuanquan'}/>
                            红包大赛
                        </span>
                    </li>
                    <li className='leftNav-li leftNav-li5' >
                        <span className='leftNav-duanxian'/>
                        <span className={scroll>=2798?'current-span':'leftNav-span'}  onClick={this.toPage5}>
                            <i className={scroll>=2798?'current-yuanquan':'leftNav-yuanquan'}/>
                            五大创新
                        </span>
                        <span className='leftNav-changxian'/>
                    </li>
                </ul>
            </div>
        )
    }
}