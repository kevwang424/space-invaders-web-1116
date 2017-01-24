
class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew

    crew.forEach(function(member){
      member.currentShip = this
    }.bind(this))

    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    crew.length == 0 ? this.docked = true : this.docked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

  }
}
