import EventEmitter from "eventemitter3";

export const EVENTS = {
    START: 'START',
    TEST:"test",
    SENDPRODUCT:"sendProduct",
    CLEARHOVER:"clearHover",
    MOVETOAREA:"movetoare",
    MOVETOAREASELECTMENU:"movetoareaselectmenu",
    SELECTMURO:"selectmuro",
    ENDCHARGINPRODUCT:"endcharginproduct",
    LOADING:'loading',
    LOADINGFFINISH:'loadingfinish',
    CHANGEAREATOAPLICATEPRODUCT:'CHANGEAREATOAPLICATEPRODUCT',
    APLICATIONCHANGETYPE:'APLICATIONCHANGETYPE',
}

const Observer = new EventEmitter();
export default Observer;
