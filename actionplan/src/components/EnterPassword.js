import React from 'react';

const EnterPassword = (props) => {
    const { children, showWindow } = props;
    if (showWindow)
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
    else return null;
};

export default EnterPassword;