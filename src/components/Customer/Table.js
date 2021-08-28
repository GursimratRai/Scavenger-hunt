import React from 'react';

//Branch table for visualizing the branch detail in the table format
const BranchTable = (props) => {
    const { branches } = props;

    return (
        <div>
            <table id='branch-table'>
                <thead>
                    <tr>
                    <th> S.No </th>
                    <th> Branch Name </th>
                    <th> Incharge </th>
                    <th> Address </th>
                    <th> City </th>
                    <th> Contact Number </th>
                   </tr>
                </thead>
                <tbody>
                    {branches && branches.map((branch,index) => {
                        return  <tr key={index}>
                            <td> {index+1} </td>
                            <td> { branch["Branch Name"]} </td>
                            <td> { branch["Branch Incharge"]} </td>
                            <td>{branch.Address}</td>
                            <td>{branch.City}</td>
                            <td>{branch["Contact Number"]}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BranchTable;