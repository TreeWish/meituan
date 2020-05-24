export const state = () => ({
  menu: [],
  hotPlace: []
})

export const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPalce(state, val) {
    state.hotPlace = val
  }
}
