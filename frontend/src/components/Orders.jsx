import Table from 'react-bootstrap/Table';
import React from 'react';

function Orders() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Order Number</th>
          <th>First Name</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>45</td>
          <td>Mark</td>
          <td>Chira Bazaar</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td>46</td>
          <td>Jacob</td>
          <td>Andheri</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>47</td>
          <td>Larry</td>
          <td>Marine Drive</td>
          <td>Cancelled</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Orders;