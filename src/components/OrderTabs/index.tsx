interface OrderTabsProps {
  switchOrderType: (tab: string) => void;
  activeTab: string;
}

function OrderTabs({ switchOrderType, activeTab }:OrderTabsProps) {
  return (
    <section>
      <div className="tab-container">
        <button
          type="button"
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => switchOrderType('all')}
        >
          All Orders
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 'regular' ? 'active' : ''}`}
          onClick={() => switchOrderType('regular')}
        >
          Regular Delivery
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 'express' ? 'active' : ''}`}
          onClick={() => switchOrderType('express')}
        >
          Express Delivery
        </button>
      </div>

    </section>
  );
}

export default OrderTabs;
