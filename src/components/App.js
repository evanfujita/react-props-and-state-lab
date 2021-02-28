import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {

    const { type } = this.state.filters
    let url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${type}`
    
    fetch(url)
    .then(resp => resp.json())
    .then(petsData => {
      this.setState({
        pets: petsData
      })
    })
    
  }

  onAdoptPet = (id) => {
    const newPets = this.state.pets.map(pet => {
      if(id === pet.id){
        return pet = {
          ...pet,
         isAdopted: true
        }
      } else {
        return pet
      }
  })
    this.setState({
      pets: newPets
    })
  }

  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.handleChange} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} petData={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
