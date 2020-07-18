import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Spinner from '../Spinner'

configure({ adapter: new Adapter() })

describe('<Spinner />', () => {
  it('renders text spinner', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper.contains(<div>loading...</div>)).toBe(true)
  })
})
