import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function CustomersTable() {

    const [customers, setCustomers] = useState([]);
    const [userAddress, setUserAddress] = useState([])

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/user/")
                setCustomers(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getCustomers();
    }, [customers])

    useEffect(()=>{
        const getAddress = async () =>{
            try{
                const res = await axios.get(`http://localhost:8800/api/address/find/${customers.map((cus)=>(
                    cus._id
                ))}`);
                setUserAddress(res.data);
            }catch(err){
                console.log(err)
            }
        };
        getAddress();
    },[customers])

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Pin Code</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((cus) => (
                        userAddress.map((address) =>(
                    <tr>
                        <td>{cus._id}</td>
                        <td>{cus.name}</td>
                        <td>{cus.email}</td>
                        <td>{cus.phone}</td>
                        <td>{cus.role}</td>
                        <td>{address.pincode}</td>
                        <td>{address.address}</td>
                    </tr>
                        ))
                    ))
                }
            </tbody>
        </table>
    )
}
