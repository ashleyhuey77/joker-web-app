import React from 'react';
import ProgressBar from 'react-bootstrap/esm/ProgressBar.js';

export function TestProgress(props) {
    const passClassName = 'passing' + setBorder(props.pass);
    const failClassName = 'failing' + setBorder(props.fail);
    return (
        <ProgressBar>
            <ProgressBar className={passClassName} now={props.pass} key={1} />
            <ProgressBar className={failClassName} now={props.fail} key={2} />
        </ProgressBar>
    );
}

function setBorder(value) {
    let result = '';
    if (value === 0) {
        result = ' zero';
    }
    return result;
}
