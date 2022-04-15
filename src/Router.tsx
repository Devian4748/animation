import { Route, Switch } from 'react-router-dom';
import HoverTab from './routes/HoverTab';
import LayoutAni from './routes/LayoutAni';
import Modal from './routes/Modal';
import RotateBox from './routes/RotateBox';
import Scroll from './routes/Scroll';
import ShowHide from './routes/ShowHide';
import Slider from './routes/Slider';
import SVG from './routes/SVG';
import Variants from './routes/Variants';

const Router = () => {
  return (
    <Switch>
      <Route path='/rotateBox'>
        <RotateBox />
      </Route>
      <Route path='/variants'>
        <Variants />
      </Route>
      <Route path='/hoverTab'>
        <HoverTab />
      </Route>
      <Route path='/drag'>
        <Variants />
      </Route>
      <Route path='/scroll'>
        <Scroll />
      </Route>
      <Route path='/svg'>
        <SVG />
      </Route>
      <Route path='/showHide'>
        <ShowHide />
      </Route>
      <Route path='/slider'>
        <Slider />
      </Route>
      <Route path='/layout'>
        <LayoutAni />
      </Route>
      <Route path='/modal'>
        <Modal />
      </Route>
    </Switch>
  );
};

export default Router;
