import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import communityService from './communityService'

const initialState = {
  communities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new community
export const createCommunity = createAsyncThunk(
  'communities/create',
  async (communityData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await communityService.createCommunity(communityData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user communities
export const getCommunities = createAsyncThunk(
  'communities/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await communityService.getCommunities(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Update user community
export const updateCommunity = createAsyncThunk(
  'communities/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await communityService.updateCommunity(id, token)
    } catch (error) {
      const message = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user community
export const deleteCommunity = createAsyncThunk(
  'communities/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await communityService.deleteCommunity(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCommunity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCommunity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.communities.push(action.payload)
      })
      .addCase(createCommunity.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCommunities.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.communities = action.payload
      })
      .addCase(getCommunities.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCommunity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCommunity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.communities = state.communities.filter(
          (community) => community._id !== action.payload.id
        )
      })
      .addCase(deleteCommunity.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = communitySlice.actions
export default communitySlice.reducer