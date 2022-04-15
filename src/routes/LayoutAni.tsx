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

const LeftBox = styled(Box)`
  position: fixed;
  top: 20%;
  left: 1%;
`;

const RightBox = styled(Box)`
  position: fixed;
  top: 20%;
  left: 48%;
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #761aef;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: rgba(185, 16, 16, 0.5);
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

const LayoutAni = () => {
  const [isRightTop, setIsRightTop] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const onRightTopHandler = () => {
    setIsRightTop(prev => !prev);
  };

  const onShowHandler = () => {
    setIsShow(prev => !prev);
  };

  const rightCircleVar = {
    start: { opacity: 0 },
    end: { opacity: 1, borderRadius: 0 },
  };
  const leftCircleVar = {
    start: { opacity: 0 },
    end: { opacity: 1, borderRadius: '50%' },
  };

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
        <Box
          key='box1'
          style={{
            justifyContent: isRightTop ? 'flex-start' : 'center',
            alignItems: isRightTop ? 'flex-start' : 'center',
          }}
        >
          <Circle layout />
        </Box>
        <LeftBox key='box2'>
          {isShow && (
            <Circle
              variants={leftCircleVar}
              initial='start'
              animate='end'
              layoutId='circle'
            />
          )}
        </LeftBox>
        <RightBox key='box3'>
          {!isShow && (
            <Circle
              variants={rightCircleVar}
              initial='start'
              animate='end'
              layoutId='circle'
            />
          )}
        </RightBox>
      </AnimatePresence>
      <ButtonContainer>
        <Button onClick={onRightTopHandler}>Right Top</Button>
        <Button onClick={onShowHandler}>Move Circle</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default LayoutAni;
