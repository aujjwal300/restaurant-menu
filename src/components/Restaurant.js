import React, { useState } from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All"
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center d-flex">
                        <Navbar filterItem={filterItem} menuList={menuList} />
                    </div>
                </div>
                <MenuCard menuData={menuData}/>
            </div>
        </>
    )
}

export default Restaurant