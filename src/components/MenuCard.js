import React from 'react'

const MenuCard = (props) => {
    return (
        <>
            <section className="row main-card--container">
                {props.menuData.map((curElem,index) => {

                    const { id, name, image, description } = curElem;
                    return (
                        <>
                            <div className="col-12 col-sm-6 col-lg-4 card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{index+1}</span>
                                        <span className="card-author subtle">{name}</span>
                                        <h2 className="card-title"> {name} </h2>
                                        <span className="card-description subtle">{description}</span>
                                    </div>
                                    <div className="card-read">Read</div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    )
}

export default MenuCard