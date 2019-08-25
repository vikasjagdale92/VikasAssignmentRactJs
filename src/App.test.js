import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});

describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
});

describe('<Login />', () => {
      it('check login component exist', () => {
        const wrapper = mount(<Login/>);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('.un').prop('type')).toEqual('text');
        expect(wrapper.find('.pass').prop('type')).toEqual('password');
        expect(wrapper.find('button').prop('type')).toEqual('submit');
        expect(wrapper.find('h3').text()).toEqual('Login');
      });
});