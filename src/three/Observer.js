import EventEmitter from "eventemitter3";

export const EVENTS = {
    START: 'START',
    TEST:"test",
    
}

const Observer = new EventEmitter();
export default Observer;
