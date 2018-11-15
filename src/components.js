import React from 'react'
const spread = (promise, name) => {
  return promise.then(res => ({
    default: res[name]
  }))
}

export const Row = React.lazy(() =>
  spread(import('@alifd/next/lib/grid'), 'Row')
)

export const Col = React.lazy(() =>
  spread(import('@alifd/next/lib/grid'), 'Col')
)

export const { Provider, Consumer } = React.createContext()

const wrapper = component => props => (
  <Consumer>
    {value => (
      <Row>
        <Col>{React.createElement(component, props)}</Col>
      </Row>
    )}
  </Consumer>
)

export const Input = wrapper(React.lazy(() => import('@alifd/next/lib/input')))

export const NumberPicker = wrapper(
  React.lazy(() => import('@alifd/next/lib/number-picker'))
)

export const DatePicker = wrapper(
  React.lazy(() => import('@alifd/next/lib/date-picker'))
)

export const YearPicker = wrapper(
  React.lazy(() => spread(import('@alifd/next/lib/date-picker'), 'YearPicker'))
)

export const MonthPicker = wrapper(
  React.lazy(() => spread(import('@alifd/next/lib/date-picker'), 'MonthPicker'))
)

export const TimePicker = wrapper(
  React.lazy(() => import('@alifd/next/lib/time-picker'))
)

export const DateRangePicker = wrapper(
  React.lazy(() => spread(import('@alifd/next/lib/date-picker'), 'RangePicker'))
)

export const Switch = wrapper(
  React.lazy(() => import('@alifd/next/lib/switch'))
)

export const RadioGroup = wrapper(
  React.lazy(() => spread(import('@alifd/next/lib/radio'), 'Group'))
)

export const CheckboxGroup = wrapper(
  React.lazy(() => spread(import('@alifd/next/lib/checkbox'), 'Group'))
)

export const Transfer = wrapper(
  React.lazy(() => import('@alifd/next/lib/transfer'))
)

export const Rating = wrapper(
  React.lazy(() => import('@alifd/next/lib/rating'))
)

export const Upload = wrapper(
  React.lazy(() => import('@alifd/next/lib/upload'))
)

export const Button = wrapper(
  React.lazy(() => import('@alifd/next/lib/button'))
)

export const Select = wrapper(
  React.lazy(() => import('@alifd/next/lib/select'))
)
