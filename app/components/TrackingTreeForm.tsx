"use client"; // Client-side component

import React, { useState } from 'react';

// Define the types for the Root Details and Child Details
interface ChildDetail {
  [key: string]: string;
}

interface RootDetails {
  Lot: string;
  Order: string;
  Children: ChildDetail[];
}

interface TrackingTreeFormProps {}

const TrackingTreeForm: React.FC<TrackingTreeFormProps> = () => {
  // State for form fields
  const [rootType, setRootType] = useState('Collection');
  const [collectionId, setCollectionId] = useState('COL202409249');
  const [treeDirection, setTreeDirection] = useState('To final product');

  // State for submitted data
  const [submitted, setSubmitted] = useState(false);

  // State for displayed details
  const [details, setDetails] = useState<RootDetails | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Mocked root details after submission
    const mockDetails: RootDetails = {
      Lot: 'LOT202408281',
      Order: 'B20240828-10',
      Children: [
        { Delivery: 'DLV20240828002', ChildDetails: 'Child Details Here' },
        { 'Pre Milled Inventory': 'INV20240828002', ChildDetails: 'Child Details Here' },
      ],
    };

    // Save details and mark form as submitted
    setDetails(mockDetails);
    setSubmitted(true);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Tracking Tree Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Root Type Dropdown */}
        <div>
          <label htmlFor="rootType" className="block font-medium">Root Type:</label>
          <select
            id="rootType"
            value={rootType}
            onChange={(e) => setRootType(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="Collection">Collection</option>
            <option value="Lot">Lot</option>
            <option value="Final Product">Final Product</option>
          </select>
        </div>

        {/* Collection ID Dropdown */}
        <div>
          <label htmlFor="collectionId" className="block font-medium">Collection:</label>
          <select
            id="collectionId"
            value={collectionId}
            onChange={(e) => setCollectionId(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            {/* You can populate these dynamically if needed */}
            <option value="COL202409249">COL202409249</option>
            <option value="COL202309249">COL202309249</option>
            <option value="COL202208281">COL202208281</option>
          </select>
        </div>

        {/* Tree Direction Dropdown */}
        <div>
          <label htmlFor="treeDirection" className="block font-medium">Tree Direction:</label>
          <select
            id="treeDirection"
            value={treeDirection}
            onChange={(e) => setTreeDirection(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="To final product">To final product</option>
            <option value="To source">To source</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Display the root details after submission */}
      {submitted && details && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Root Details</h3>
          <p><strong>Lot:</strong> {details.Lot}</p>
          <p><strong>Order:</strong> {details.Order}</p>
          {details.Children.map((child, index) => (
            <div key={index} className="mt-4">
              {Object.entries(child).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value as string}</p> 
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingTreeForm;
