import React from 'react';

interface DropdownDetailsProps {
  details: {
    [key: string]: string | number;
  };
}

const DropdownDetails: React.FC<DropdownDetailsProps> = ({ details }) => {
  return (
    <div className="ml-4 mt-2 p-2 bg-gray-100 rounded">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="mb-1">
          <span className="font-semibold">{key}:</span> {value}
        </div>
      ))}
    </div>
  );
};

export default DropdownDetails;