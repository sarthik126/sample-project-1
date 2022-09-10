import React from 'react'

export default function TableView({allData}) {
  return (
    <div className='table-view'>
      <h2>All Data</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}
