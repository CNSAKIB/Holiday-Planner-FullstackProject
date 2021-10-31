import React, { useEffect, useState } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);
    // ------------------Cancel Order------------------
    const handleDelete = (id) => {
        // console.log(id)
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }

            })
                .then((res) => res.json())
                .then((result) => {
                    // console.log(result);
                    if (result.deletedCount) {
                        alert("Succfully Cancelled Order");
                    }
                });
        }
    }
    return (
        <div>
            <h1>This is my Orders</h1> <br />
            <Row xs={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">
                {orders.map(order => <div key={order._id} >
                    <Card className="text-center">
                        <Card.Header>Order</Card.Header>
                        <Card.Body>
                            <Card.Title>Order Id: <br /> {order._id}</Card.Title>
                            <Card.Text>
                                Customer Name: <br /> {order.name} <br />
                                Email: <br /> {order.email} <br />
                                Person: <br /> {order.person} <br />
                                Address: <br /> {order.address} <br />
                                Start-Date: <br /> {order.date} <br />
                                Status: {order.status}
                            </Card.Text>
                            <Button onClick={() => handleDelete(order._id)} variant="danger">Cancel Order</Button>
                        </Card.Body>
                    </Card>

                </div>

                )};
            </Row>
        </div>
    );
};

export default MyOrders;