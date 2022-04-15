import { motion } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const RotateBox = () => {
  const rotateBoxVariant = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
  };

  return <Box variants={rotateBoxVariant} initial='start' animate='end' />;
};

export default RotateBox;
