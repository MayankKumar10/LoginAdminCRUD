import React,{useState} from 'react'

const ShowHide = (component, visiblity = false) => {
const [visible, setVisiblity] = useState (()=> visiblity);

    return [visible ? component : null, () => setVisiblity((v) => !v)];
};


const ShowHide = (component, visiblity = false) => {
    const [visible, setVisiblity] = useState (()=> visiblity);
    
        return [visible ? component : null, () => setVisiblity(true), () => setVisiblity(false)];
};


export default ShowHide;
