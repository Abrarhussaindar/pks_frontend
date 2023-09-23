import React from 'react'

export default function DashboardBox({title, imageUrl, mainContent, percent}) {
    return (
        <div className="box">
            <div className="boxHeading">
                <h5>{title}</h5>
                <img src={imageUrl} width="20px" alt="" />
            </div>
            <div className="boxNumber">
                <h3>{mainContent}</h3>
            </div>
            <div className="boxTimeStamp">
                <h6>{percent}</h6>
                <p>since last month</p>
            </div>
        </div>
    )
}
