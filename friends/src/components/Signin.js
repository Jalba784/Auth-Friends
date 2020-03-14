import React, { useState } from 'react';

const Signin = props => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;
