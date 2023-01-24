import { createSlice } from '@reduxjs/toolkit';

// Cambiamos userNameSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "John Doe",
    reducers: {
        pokedexName: (state,action) => {
          const inputValue = action.payload;
          return inputValue;

        }
    }
})

export const { pokedexName } = userNameSlice.actions;

export default userNameSlice.reducer;