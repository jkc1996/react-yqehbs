import React from 'react';

function test() {
        let element = null;
               let isLoggedIn = false
               isLoggedIn ? element = <h2>Welcome Admin</h2> : element = <h2>Please Login</h2>
               return element;
}
class App extends React.Component {
       render() {
                var employees = [
                  { empId: 1234, name: 'Kavya', designation:'SE' },
                  { empId: 4567, name: 'Roopa', designation:'SSE'},
                  { empId: 8910, name: 'Krishna',designation:'TA'}
                ]
                var rowData = []
                for(let i=0;i<employees.length;i++) {
                        var row = (
                                <tr>
                                    <td>{employees[i].empId}</td>
                                    <td>{employees[i].name}</td>
                                    <td>{employees[i].designation}</td>
                                </tr>
                        )
                        rowData.push(row)
                }
               return (<React.Fragment>
                       <table style={{width:'60%'}} className='table'>
                            <thead className="thead-light">
                                <tr>
                                     <th>EmpID</th>
                                     <th>Name</th>
                                     <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowData}
                            </tbody>
                       </table>
               </React.Fragment>)  
       }
}

export default App;
