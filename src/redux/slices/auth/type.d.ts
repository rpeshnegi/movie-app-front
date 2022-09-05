interface IAuthData {
    api_token: string
    country: string,
    country_code: string
    created_at: Date
    email: string
    id: number
    image: string
    info: string
    is_active: boolean
    mobile_no: string
    name: string
    phone_code: string
    phone_country: string
    roles: string[]
    thumb: string
    type: string
    updated_at: Date
}

interface AuthInitState {
    isAuthenticated: boolean
    isInitialized: any
    auth: IAuthData | null
    error: null
}
