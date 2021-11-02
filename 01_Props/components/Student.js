import React from 'react'
import Alert from './Alert';

const user = {
    firstName: "!@#$$%"
}

function Student() {
    return (
        <>
        <div>
            <Alert alert= {1+2+3+4+5+6+7+8+9+10} />
            <Alert alert= "..." />
            <Alert alert= {user.firstName} />
            {/* <Alert>hie</Alert> */}
        </div>
        </>
    )
}

export default Student
