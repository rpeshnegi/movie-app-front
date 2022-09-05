import authSlice from './auth-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import axiosInstance from '../../../utils/axiosInstance'
import { AxiosResponse } from 'axios'

export const authActions = authSlice.actions

export const login = (username: FormDataEntryValue | null, password: FormDataEntryValue | null): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const res: AxiosResponse = await axiosInstance.post(`auth/login`, { username, password })
            dispatch(authActions.LOGIN_SUCCESS(res.data.access_token));
        } catch (error: any) {
            dispatch(authActions.LOGIN_ERROR(error));
        }
    }
}
