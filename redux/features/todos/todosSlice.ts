// todosSlice.ts
import { createSlice, nanoid } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Item {
  id: string;
  text: string;
}

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

export const { addTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
export type TodosState = ReturnType<typeof todosReducer>;
