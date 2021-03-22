export const firstFilter = input => {
    if(input == "Mixer" ) {
        return this.props.mixers.map(mixer => mixer.name)
    }
}