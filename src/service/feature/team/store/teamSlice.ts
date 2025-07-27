import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTeamById } from '@service/feature/team/api/teamsServiceAPI';

export const fetchTeamDetails = createAsyncThunk('teams/fetchTeamDetails', async (teamId: string) => {
  const data = await getTeamById(teamId);
  return data;
});

const initialState = {
  teamDetails: null,
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.teamDetails = action.payload;
      })
      .addCase(fetchTeamDetails.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default teamSlice.reducer;