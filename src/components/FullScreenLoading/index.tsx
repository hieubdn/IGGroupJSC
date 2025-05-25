import React from 'react';
import './styles.scss';

interface FullScreenLoadingProps {
  className?: string;
}

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ className = '' }) => {
  return (
    <div className={`full-screen-loading ${className}`}>
      <div className="loader"></div>
    </div>
  );
};

export default FullScreenLoading; 