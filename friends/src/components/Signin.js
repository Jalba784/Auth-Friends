import React from 'react';

const Signin = props => {
    const { } = props;
    return (
        <div>
            <form>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;
