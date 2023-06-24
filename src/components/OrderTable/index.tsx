/* eslint-disable no-nested-ternary */
import { OrderType } from 'types';
import { useState } from 'react';

interface OrderTableProps {
  orders: OrderType[];
  deliveryType: string;
  itemsPerPage: number;
}

function OrderTable({ orders, deliveryType, itemsPerPage = 5 }:OrderTableProps) {
  const filteredOrders = orders.filter((order) => {
    if (deliveryType === 'all') {
      return true;
    }
    return order.deliveryType === deliveryType;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Delivery Type</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td>{order.deliveryType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="current_page">{currentPage}</span>
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default OrderTable;
