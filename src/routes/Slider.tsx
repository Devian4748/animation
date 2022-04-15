import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Box = styled(motion.div)`
  position: fixed;
  top: 20%;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: rgba(185, 16, 16, 0.5);
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

const Slider = () => {
  const [currentBoxIdx, setCurrentBoxIdx] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const boxMotion = {
    start: (isBack: boolean) => ({
      scale: 0,
      opacity: 0,
      x: isBack ? -500 : 500,
    }),
    end: { scale: 1, opacity: 1, x: 0, transition: { duration: 1 } },
    leaving: (isBack: boolean) => ({
      opacity: 0,
      scale: 0,
      x: isBack ? 500 : -500,
      transition: { duration: 1 },
    }),
  };

  const onNextHandler = () => {
    setIsBack(false);
    setCurrentBoxIdx(prev => (prev === 10 ? 10 : prev + 1));
  };
  const onPrevHandler = () => {
    setIsBack(true);
    setCurrentBoxIdx(prev => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
        <Box
          custom={isBack}
          key={currentBoxIdx}
          variants={boxMotion}
          initial='start'
          animate='end'
          exit='leaving'
        >
          {currentBoxIdx}
        </Box>
      </AnimatePresence>
      <ButtonContainer>
        <Button onClick={onPrevHandler}>Prev</Button>
        <Button onClick={onNextHandler}>Next</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Slider;
