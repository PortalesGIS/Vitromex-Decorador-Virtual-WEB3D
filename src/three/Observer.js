import EventEmitter from "eventemitter3";

export const EVENTS = {
    START: 'START',
    TEST:"test",
    SENDPRODUCT:"sendProduct",
    CLEARHOVER:"clearHover",
    MOVETOAREA:"movetoare",
    MOVETOAREASELECTMENU:"movetoareaselectmenu",
    SELECTMURO:"selectmuro"
}

const Observer = new EventEmitter();
export default Observer;
