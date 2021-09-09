import React from 'react';
import Select from 'react-select';

function DataThemkhoahoc()
{
    var VaiTro=[
        {
            value:1,
            label:"Teacher"
        },
        {
            value:2,
            label:"Instructor"
        },
        {
            value:3,
            label:"Class Admin",
        },
    ];
    return(
        <div>
            <Select styles
             options={VaiTro}>

            </Select>
        </div>
    );
}
export default DataThemkhoahoc;