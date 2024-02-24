// single selection 
// multi selection both accordian im working 
import data from "./data";

import './style.css';
import { useState } from "react"


export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);//clicking on multiselection button and then clicking on any ques we will get -1 as console out put because this id isnt present in multiple
        if(findIndexOfCurrentId===-1){
            cpyMultiple.push(getCurrentId);
        }else{
            cpyMultiple.splice(findIndexOfCurrentId,1);
        }

        setMultiple(cpyMultiple); 
        console.log(selected,multiple);

    }
    console.log(selected);
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection? multiple.indexOf(dataItem.id)!==-1 && <div className="content">{dataItem.answer}</div>:
                            selected===dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                        {/* {
                            selected === dataItem.id ||
                            multiple.indexOf(dataItem.id)!==-1
                            ?<div className="content">{dataItem.answer}</div>: null
                        } */}
                    </div>)
                    : <div>No data found !!!</div>
            }
        </div></div>
}