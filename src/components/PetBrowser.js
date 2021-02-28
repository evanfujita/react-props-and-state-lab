import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    {
     return this.props.petData.map(pet => {
        return <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet} pet={pet} /></div>
      })
    }
  }
}

export default PetBrowser
