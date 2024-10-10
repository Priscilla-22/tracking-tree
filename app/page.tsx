import React from 'react';
import TreeView from '../app/components/TreeView';
import { TreeItem } from '../app/types/types';
import TrackingTreeForm from './components/TrackingTreeForm';

const Home: React.FC = () => {
  const treeData: TreeItem[] = [
    {
      id: '1',
      name: 'Collection: Fall 2023 Apparel',
      type: 'collection',
      details: {
        'Total Lots': 5,
        'Creation Date': 'Aug 10, 2023',
        'Status': 'In Progress',
      },
      children: [
        {
          id: '2',
          name: 'Lot: Lot 001',
          type: 'lot',
          details: {
            'Quantity': '500 units',
            'Lot Start Date': 'Aug 15, 2023',
            'Lot End Date': 'Sep 10, 2023',
            'Status': 'Completed',
          },
          children: [
            {
              id: '3',
              name: 'Order: ORD12345',
              type: 'order',
              details: {
                'Quantity': '100 units',
                'Order Date': 'Aug 20, 2023',
                'Expected Shipment Date': 'Aug 25, 2023',
                'Status': 'Shipped',
              },
              children: [
                {
                  id: '4',
                  name: 'Delivery: DEL67890',
                  type: 'delivery',
                  details: {
                    'Quantity': '50 units',
                    'Delivery Date': 'Aug 27, 2023',
                    'Tracking Number': '1Z9999999999999999',
                    'Status': 'Delivered',
                  },
                  children: [
                    {
                      id: '5',
                      name: 'Final Product: PROD9876',
                      type: 'finalProduct',
                      details: {
                        'Quantity': '50 units',
                        'Date of Delivery': 'Aug 30, 2023',
                        'Status': 'Delivered',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Hierarchy</h1>
      <TrackingTreeForm/>
      <TreeView data={treeData} />
    </div>
  );
};

export default Home;