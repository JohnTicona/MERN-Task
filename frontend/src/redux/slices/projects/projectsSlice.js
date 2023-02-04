import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  alert: {},
  currentProject: {},
  loading: false
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload
      state.currentProject = {}
    },
    setProjects: (state, action) => {
      state.projects.push(action.payload)
    },
    setUpdateProject: (state, action) => {
      state.projects = state.projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      )
    },
    setDeleteProject: (state, action) => {
      state.projects = state.projects.filter((project) =>
        project._id !== action.payload
      )
    },
    setAlert: (state, action) => {
      state.alert = action.payload
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }

  }
})

export const {
  setProjects,
  getProjects,
  setAlert,
  setCurrentProject,
  setLoading,
  setUpdateProject,
  setDeleteProject
} = projectsSlice.actions
