import React from 'react';

const Column = ({ children, columnClass }) => {

    //set default class style with tailwindCSS
    const colClass = "flex flex-col";

    return (
        <div className={columnClass ? columnClass : colClass}>
            {children}
        </div>
    );
}

export default Column;