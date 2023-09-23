import React from 'react'

export default function OrderTable({order}) {
    return (
        <tr>
            <td>{order.userId}</td>
            <td>{order._id}</td>
            <td>{order.products[0].productId}</td>
            <td>{order.amount}</td>
            <td>{order.paymentMode}</td>
            <td>{order.address}</td>
            <td>{order.status}</td>
        </tr>
    )
}
