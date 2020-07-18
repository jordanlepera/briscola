import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
// import sinon from 'sinon'
import { shallow, mount, configure } from 'enzyme'
import Main from '../Main'

configure({ adapter: new Adapter() })

describe('<Main />', () => {
  it('renders a single <p> tag', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('p')).toHaveLength(1)
  })

  it('renders translation', () => {
    const mounted = mount(<Main />)
    // console.log(mounted.debug());
    expect(mounted.contains(<h2>translation:title</h2>)).toBe(true)
  })
})
