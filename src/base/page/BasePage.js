import PageHelper from "./page-helper";
import PageRouter from "../route/router";
import { Component } from "react";
import UbtClient from "../ubt/ubt-client";
import {logDebug} from "../utils/error";
import Client from "../client/client";
import ClientUser from "../user/ClientUser";

let ubt_instance = new UbtClient();
export default class BasePage extends Component{
    constructor(){
        super();
    }
    componentDidMount() {
        this.sendPV();
        //this.saveFootPrint();
        
    }
    componentDidShow() { 
        this.saveFootPrint();
    }
    gotoPage = (params) => {
        PageRouter.gotoPage(params);
    }
    goto = (params) => {
        PageRouter.gotoPage(params);
    }
    params(){
        return PageRouter.getParams();
    }
    showToast = (params,options) => {
        PageHelper.showToast(params,options);
    }
    sendPV=()=>{
        if(this.pageId){
            ubt_instance.ubtSendPV({pageId:this.pageId});
        }
        
    }
    saveFootPrint=()=>{
        
        if(this.pageName){
            //console.log('save foot proint...')
            ClientUser.saveFootPrint(this.pageName);
        }  
    }
    ubtTrace=(key,value)=>{
        ubt_instance.ubtTrace(key,value);
    }
    ubtMetric=()=>{
        ubt_instance.ubtMetric(key,value);
    }
    debugInfo = (name,info)=>{
        logDebug(name, info);
    }
}