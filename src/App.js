import React, { Component } from 'react'
import NavbarComponents from './Components/NavbarComponents'
import MainComponents from './Components/CarouselComponents'
import JumbotonComponents from './Components/JumbotonComponents'
import FormComponents from './Components/FormComponents'
import ApiComponents from './API/ApiComponents'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponents />
        <MainComponents />
        <JumbotonComponents />
        <FormComponents />
        <ApiComponents />
      </div>
    )
  }
}
