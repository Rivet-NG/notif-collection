import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function Homepage() {
    return (
        <>
        My Website
        <button onClick={
            store.addNotification({
                title: 'Dropbox',
                message: 'Files were synced',
                type: 'default',
                container: 'bottom-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000
                }
            })
        }>Add notification</button>
        </>
    )
}

export default Homepage;