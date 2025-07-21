import React from 'react';
import LottieAnimation from './LottieAnimation';
import flourishAnimation from './json/flourishAnimation.json';

interface FlourishAnimationProps {
  width?: number;
  height?: number;
  className?: string;
}

const FlourishAnimation: React.FC<FlourishAnimationProps> = ({ 
  width = 200, 
  height = 200, 
  className = "" 
}) => {
  return (
    <LottieAnimation 
      animationData={flourishAnimation}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default FlourishAnimation; 