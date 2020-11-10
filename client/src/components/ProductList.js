import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}><Link to={`/products/${product._id}`}>{product.title}</Link></p>
            })}
        </div>
    )
}