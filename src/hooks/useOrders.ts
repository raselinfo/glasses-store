import { useState } from 'react';
import generateFakeOrderData from '../utils/generateFackOrderData';

const useOrders = () => {
  const orders = generateFakeOrderData(10);
  const [activeTab, setActiveTab] = useState('all');

  const switchOrderType = (tab: string) => {
    setActiveTab(tab);
  };

  return {
    orders,
    activeTab,
    switchOrderType,
  };
};

export default useOrders;
