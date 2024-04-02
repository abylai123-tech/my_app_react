    import { IUser } from "../../models/IUser";
    import { PayloadAction, createSlice } from "@reduxjs/toolkit";
    import { fetchUsers } from "./ActionCreators";

    interface UserState {
        users: IUser[];
        isLoading: boolean;
        error: string;
        count: number;
    }

    const initialState: UserState = {
        users: [],
        isLoading: false,
        error: '',
        count: 0
    }

    export const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';           
                state.users = action.payload;
           },
            [fetchUsers.pending.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
                state.isLoading = true; 
          },  
            [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload    
          },       
        },
        // extraReducers: {
        //     [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
        //       state.isLoading = false;
        //       state.error = "";
        //       state.users = action.payload;
        //     },
        //     [fetchUsers.pending.type]: (state: UserState) => {
        //       state.isLoading = true;
        //     },
        //     [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
        //       state.isLoading = false;
        //       state.error = action.payload;
        //     },
        //   },
    });
    
    
    export default userSlice.reducer;