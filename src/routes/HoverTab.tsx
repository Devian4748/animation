import { motion } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const HoverTab = () => {
  const boxVariants = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { scale: 1, borderRadius: '50%' },
  };

  return <Box variants={boxVariants} whileHover='hover' whileTap='click' />;
};

export default HoverTab;
