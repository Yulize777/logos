import React, {useState} from 'react';
import {BsArrowUpSquareFill, BsChevronDown} from "react-icons/bs";

const DeliveryCard = ({item}) => {

    const [active,setActive] = useState(false)
    return (
            <div  className={'delivery__card_cont'}>
                <div  onClick={() => setActive(prev => !prev)}  className="delivery__card">
                    <h3 className="delivery__card_title">
                        {item.title}
                    </h3>
                    {active ? <BsArrowUpSquareFill/> : <BsChevronDown/>}
                </div>
                <p style={{display: active ? 'flex' : "none"}} className={'delivery__description'}>
                    {item.description}
                </p>
            </div>
    )
            }

export default DeliveryCard;