import React from 'react';
import Friend from "./Friend";

const FriendList = props => {
    const { friendData } = props;

    return (
        <div>
            {friendData.map(amigo => {
                return <Friend key={amigo.id} friend={amigo} />
            })}
        </div>
    );
};

export default FriendList;
