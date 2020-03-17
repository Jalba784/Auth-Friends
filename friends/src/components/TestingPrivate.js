import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestingPrivate = () => {
    const [state, setState] = useState({
        friends: []
    });

    useEffect(() => {
        getData()
    });

    const getData = () => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:5000/api/friends', {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('Error for getting tokened api => ', err)
            })
    }

    return (
        <div>
            <h2>This is my newest protected page!!</h2>
        </div>
    );
};

export default TestingPrivate;
