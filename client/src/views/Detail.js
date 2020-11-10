import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(response => {
                const prodFromServer = response.data;
                setProduct(prodFromServer);
            });
    }, [])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}