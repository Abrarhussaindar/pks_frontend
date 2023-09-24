
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Li({ cate }) {
    return (
        <ul>
            {
                cate.map((sub) => (
                    <li key={sub._id}>
                    <NavLink  to={sub.link} className={({ isActive }) => (isActive ? 'active' : 'inactive')} style={({ isActive }) => ({
                                // color: isActive ? 'white' : 'var(--main-color)',
                                fontWeight: isActive ? "600" : "400",
                                borderBottom: isActive ? "1px solid black" : ""
                            })}>
                            {sub.subName}
                    </NavLink>
                        </li>
                ))
            }
        </ul>
    )
}
