import { CHANGE_ACTIVE_MODAL, CHANGE_DATA_ELEMENT, CREATE_SHARES } from "../../constants"

export const changeModalActive = () => ({ type: CHANGE_ACTIVE_MODAL })
export const changeDataElement = (element) => ({ type: CHANGE_DATA_ELEMENT, element })
export const createShares = ({ name, date, cost }) => ({ type: CREATE_SHARES, name, date, cost })
