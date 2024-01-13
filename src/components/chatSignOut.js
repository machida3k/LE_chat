import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../chatfirebase';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function SignOut() {
    return (
        <div className='header'>
                <Button
                    style={{ color: "white", fontsize: "10px"}}
                >
                    <ArrowBackIosNewIcon />
                </Button>
            <h3>山田　美和子</h3>
            <Button
                style={{ color: "white", fontsize: "10px"}}
                onClick={() => auth.signOut()}
            >
                <ExitToAppIcon className='signout' />
            </Button>
        </div>
    );
}

export default SignOut;