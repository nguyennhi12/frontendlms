import React from 'react';
import Select from 'react-select';
function DataSuakhoahoc()
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
            
            <Select options={VaiTro}></Select>
        </div>
    );
}
export default DataSuakhoahoc;