import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: #fff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const SmallSquare = styled(Circle)`
  border-radius: 0;
`;

interface IRouteParam {
  drag: boolean;
}

const Variants = () => {
  const location = useLocation<IRouteParam>();
  const drag = location.state?.drag ?? false;
  const x = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-500, 0, 500], [2, 1, 0.5]);
  const rotateZ = useTransform(y, [-500, 500], [-360, 360]);
  const background = useTransform(
    x2,
    [-500, 0, 500],
    [
      'linear-gradient(135deg, #2232e6, #ffffff)',
      'linear-gradient(135deg, #00b093, #003cd3)',
      'linear-gradient(135deg, #f10024, #0c0501)',
    ]
  );
  const boxVariants = {
    start: {
      opacity: 0,
      scale: 0.5,
    },

    end: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      opacity: 0,
      y: 10,
    },

    end: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box variants={boxVariants} initial='start' animate='end'>
      <Circle
        style={{ x, scale }}
        drag={drag ? 'x' : false}
        dragSnapToOrigin
        variants={circleVariants}
      />
      <SmallSquare
        style={{ y, rotateZ }}
        drag={drag ? 'y' : false}
        dragSnapToOrigin
        variants={circleVariants}
      />
      <Circle
        style={{ x: x2, background }}
        drag={drag ? 'x' : false}
        dragSnapToOrigin
        variants={circleVariants}
      />
      <Circle drag={drag} dragSnapToOrigin variants={circleVariants} />
    </Box>
  );
};
export default Variants;
