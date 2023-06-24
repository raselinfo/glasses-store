import useOrders from '../../hooks/useOrders';
import OrderTable from '../../components/OrderTable';
import OrderTabs from '../../components/OrderTabs';

function Home() {
  const { activeTab, orders, switchOrderType } = useOrders();
  return (
    <main>
      <h1 className="home_title">Welcome to Anti Blue Ray Glasses Store</h1>
      <OrderTabs switchOrderType={switchOrderType} activeTab={activeTab} />
      <OrderTable orders={orders} deliveryType={activeTab} itemsPerPage={5} />
    </main>
  );
}

export default Home;
