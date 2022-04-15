import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const DefinedGlobalStyle = createGlobalStyle`
  body { 
    height: 500vh;
  }
`;

const Box = styled(motion.div)`
  position: fixed;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Scroll = () => {
  const y = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const rotateBoxVariant = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
  };

  return (
    <Fragment>
      <DefinedGlobalStyle />
      <Box
        style={{ y, scale }}
        drag='y'
        variants={rotateBoxVariant}
        initial='start'
        animate='end'
      />
    </Fragment>
  );
};

export default Scroll;
