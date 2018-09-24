import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePets = (pets) => (
    pets.map((pet, index) => <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  )
  render() {
    return( <div>
    <Pet />
    {this.generatePets(this.props.pets)}
    </div>)
  }
}

export default PetBrowser
