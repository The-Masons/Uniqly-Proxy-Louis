import { mount, render, shallow, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.shallow = shallow;
