import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Button,
  DatePicker,
  DateRangePicker,
  YearPicker,
  MonthPicker,
  Upload,
  Select,
  RadioGroup,
  CheckboxGroup,
  Input,
  NumberPicker,
  Transfer,
  TimePicker,
  Rating,
  Provider
} from './components'
//import {Row,Col} from '@alifd/next/lib/grid'

class MyComponent extends Component {
  render() {
    return (
      <Provider>
        <div>
          <React.Suspense fallback={<div>loading....</div>}>
            <div>
              <Button>This is Button</Button>
            </div>
            <div>
              <Input />
            </div>
            <div>
              <NumberPicker />
            </div>
            <div>
              <DatePicker />
            </div>
            <div>
              <DateRangePicker />
            </div>
            <div>
              <YearPicker />
            </div>
            <div>
              <MonthPicker />
            </div>
            <div>
              <TimePicker />
            </div>
            <div>
              <Transfer />
            </div>
            <div>
              <Upload>
                <Button>upload file</Button>
              </Upload>
            </div>
            <div>
              <Select
                dataSource={[
                  { label: 'aaa', value: 'aaa' },
                  { label: 'bbb', value: 'bbb' }
                ]}
              />
            </div>
            <div>
              <CheckboxGroup
                dataSource={[
                  { label: 'aaa', value: 'aaa' },
                  { label: 'bbb', value: 'bbb' }
                ]}
              />
            </div>
            <div>
              <RadioGroup
                dataSource={[
                  { label: 'aaa', value: 'aaa' },
                  { label: 'bbb', value: 'bbb' }
                ]}
              />
            </div>
          </React.Suspense>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<MyComponent />, mountRoot)
