
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../../../api/axios';

export default function CustomersTable({ customer }) {
    const [userAddress, setUserAddress] = useState([])
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();

        const getAddress = async () => {
            try {
                const res = await axios.get(`/address/${customer._id}`,{
                    signal: controller.signal
                });
                isMounted && setUserAddress(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getAddress();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [customer])
    return (

        <tr >
            <td>{customer._id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.role}</td>
                {
                    userAddress.map((address)=>(
                        <td key={address._id}>{address.pincode}</td>
                    ))
                }
                {
                    userAddress.map((address)=>(
                        <td key={address._id}>{address.address}</td>
                    ))
                }
        </tr>

    )
}
