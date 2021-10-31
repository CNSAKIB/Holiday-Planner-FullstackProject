import React, { useEffect, useState } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import './AllOrders.css';
const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allOrders]);
    // ------------------------Cancel Order------------------------
    const handleDelete = (id) => {
        // console.log(id)
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/${id}`, {
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
    //------------------ Approve status--------------------

    const handleApprove = (id) => {
        // console.log(id)
        fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }

        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    alert("Order Status Approved!");
                }
            });
    }
    // -------------------------------------------------------
    return (
        <div>
            <h1>This is All Orders</h1> <br />
            <Row xs={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">
                {allOrders.map(order => <div key={order._id} >
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
                            <Button onClick={() => handleDelete(order._id)} className="me-3" variant="danger">Cancel Order</Button>
                            <Button onClick={() => handleApprove(order._id)} variant="success">Approve Order</Button>
                        </Card.Body>
                    </Card>

                </div>

                )};
            </Row>

        </div>
    );
};

export default AllOrders;