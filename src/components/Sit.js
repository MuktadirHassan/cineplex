import React, { useEffect, useState } from 'react'

export default function Sit({available,handleSitsRemove,sitNum,handleSits,bookCount}) {
    let [selected, setSelected] = useState(false)
    
    const hadleSelected = (e) => {
        
        if(bookCount < 10){
            setSelected(!selected);
            if(selected){
                handleSitsRemove(e)
            }
            if(selected === false) {
                handleSits(e)
            }
        }
    }
    
    return (
        available ? <button className={!selected ? "h-10 col-span-1 bg-blue-500 cursor-pointer" : "h-10 col-span-1 bg-green-500 cursor-pointer"} onClick={e => hadleSelected(e)}>{sitNum}</button> :<button className="h-10 col-span-1 bg-blue-200 cursor-not-allowed" disabled>{sitNum}</button>
    )
}
