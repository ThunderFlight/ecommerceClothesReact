import { PayloadAction } from "@reduxjs/toolkit"

export default interface users {
    action:PayloadAction<string>
    state: object
}