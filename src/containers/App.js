import React, { Component } from 'react'
import 'sanitize.css/sanitize.css'

import '../main.css'

import SearchInput from '../components/SearchInput'
import geoCode from '../utils/geocode'
import weather from '../utils/weather'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      address: undefined,
      weather: undefined
    }
  }

  handleSubmit = (e) => {
    geoCode(this.state.location, (err, results) => {
      if(err) {
        console.log(err)
      } else {
        this.setState({ address: results.address })
        console.log(results)
        weather(
          results.latitude,
          results.longitude,
          (err, weatherResults) => {
            if(err) {
              console.log(err)
            } else {
              console.log(weatherResults)
            }
          }
        )
      }
    })

    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value })
  }

  render() {
    return (
      <div>
        <SearchInput
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.location}
        />
        {this.state.address ? <div>{this.state.address}</div> : null}
      </div>
    )
  }
}

export default App
