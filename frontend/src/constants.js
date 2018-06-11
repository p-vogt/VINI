export const USER_LEVEL = {
    NOT_LOGGED_IN: 0,
    ZWS: 1,
    TUEV: 2,
    STVA: 3,
    ASTVA: 4
}

export function getAuthorityString(authorityLevel) {
    switch (authorityLevel) {
        case USER_LEVEL.NOT_LOGGED_IN: return "Ausgeloggt"
        case USER_LEVEL.ZWS: return "ZWS"
        case USER_LEVEL.TUEV: return "TÜV"
        case USER_LEVEL.STVA: return "STVA"
        case USER_LEVEL.ASTVA: return "Admin STVA"
        default: return ""
    }
}

const HOME_PATH = "http://vini-ethereum.westeurope.cloudapp.azure.com/";
const API_PATH = HOME_PATH + "api/";
export const USER_LOGIN_PATH = API_PATH + "users/login";
export const RESET_PASSWORD_PATH = API_PATH + ""

export const CHANGE_PREOWNER_PATH = API_PATH + "car/preowner"
export const CHANGE_MILEAGE_PATH = API_PATH + "car/mileage"
export const ADD_TUEV_PATH = API_PATH + "car/tuev"
export const ADD_SERVICE_PATH = API_PATH + "car/service"
export const READ_CAR_PATH = API_PATH + "car"
export const READ_USER_PATH = API_PATH + "users"


