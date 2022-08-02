import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function Homepage() {
    return (
        <div>
            <h1>My Website</h1>
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
        </div>    
    )
}

export default Homepage;