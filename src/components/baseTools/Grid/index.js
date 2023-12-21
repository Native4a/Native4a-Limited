import React from 'react';

const Grid = ({ children, gridContainer, gridCols }) => {

    //set default class style with tailwindCSS
    const container = "container mx-auto pt-20 md:pt-20";
    const cols = "grid grid-cols-1 md:grid-cols-2 gap-6";

    return (
        <div className={gridContainer ? gridContainer : container}>
            <div className={gridCols ? gridCols : cols}>
                {children}
            </div>
        </div>
    );
}

export default Grid;