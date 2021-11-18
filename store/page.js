export const state = () => ({
  machineSelected: 'TruLaser 3030L',
})

export const mutations = {
  setMachineSelected(state, payload) {
    state.machineSelected = payload
  },
}
