import React from 'react';
import LottieAnimation from './LottieAnimation';
import ringsAnimation from './json/ringsAnimation.json';

interface RingsAnimationProps {
  width?: number;
  height?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const RingsAnimation: React.FC<RingsAnimationProps> = ({
  width = 200,
  height = 200,
  className = '',
  loop = true,
  autoplay = true,
}) => (
  <LottieAnimation
    animationData={ringsAnimation}
    width={width}
    height={height}
    className={className}
    loop={loop}
    autoplay={autoplay}
  />
);

export default RingsAnimation; 