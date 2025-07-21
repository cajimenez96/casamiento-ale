
import React from 'react';
// No existen tipos para @lottiefiles/react-lottie-player, pero el paquete funciona correctamente en JS/TS
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  animationData: object;
  width?: number;
  height?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = 200,
  height = 200,
  className = '',
  loop = true,
  autoplay = true,
}) => (
  <Player
    autoplay={autoplay}
    loop={loop}
    src={animationData}
    style={{ width, height }}
    className={className}
  />
);

export default LottieAnimation; 