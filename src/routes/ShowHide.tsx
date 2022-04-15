import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Box = styled(motion.div)`
  position: fixed;
  top: 20%;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: rgba(185, 16, 16, 0.5);
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

const ShowHide = () => {
  const [isShow, setShow] = useState(true);

  const boxMotion = {
    start: { scale: 0 },
    end: { scale: 1, transition: { type: 'spring' } },
    leaving: { opacity: 0, y: 10, scale: 0 },
  };

  const onToggleHandler = () => {
    setShow(prev => !prev);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {isShow && (
          <Box
            variants={boxMotion}
            initial='start'
            animate='end'
            exit='leaving'
          ></Box>
        )}
      </AnimatePresence>
      <Button onClick={onToggleHandler}>Toggle</Button>
    </Wrapper>
  );
};

export default ShowHide;
