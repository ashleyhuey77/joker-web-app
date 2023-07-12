import React, { useState } from 'react';
import '../../../styles/Suites.css';

let isDragging = false;

export function SuitesContent() {
    const [cursor, setCursor] = useState('');
    const [gridTemplateColumns, setGridTemplateColumns] = useState('');
    function endDrag() {
        isDragging = false;
        setCursor('auto');
    }

    function startDrag() {
        isDragging = true;
        setCursor('ew-resize');
    }

    function drag(event) {
        if (isDragging) {
            let page = document.getElementById('page');
            let leftcol = document.getElementById('leftcol');
            let rightcol = document.getElementById('rightcol');

            let leftColWidth = event.clientX;
            let rightColWidth = page.clientWidth - event.clientX;

            let dragbarWidth = 6;

            let cols = [leftColWidth, dragbarWidth, rightColWidth];

            let newColDefn = cols.map((c) => c.toString() + 'px').join(' ');

            setGridTemplateColumns(newColDefn);

            event.preventDefault();
        }
    }
    return (
        <>
            <div
                id="page"
                onMouseMove={drag}
                onMouseUp={endDrag}
                style={{ cursor, gridTemplateColumns }}
            >
                <div id="leftcol">Test Suites</div>
                <div onMouseDown={startDrag} id="dragbar"></div>
                <div id="rightcol">Test Steps</div>
            </div>
        </>
    );
}
