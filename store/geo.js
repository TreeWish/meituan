export const state = () => ({position: {}})

export const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
}
