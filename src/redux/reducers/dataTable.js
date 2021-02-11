const CREATE_SHARES = 'CREATE_SHARES'
const CHANGE_DATA_ELEMENT = 'CHANGE_DATA_ELEMENT'
const CHANGE_ACTIVE_MODAL = 'CHANGE_ACTIVE_MODAL'
const initialState = {
  dataTable: [
    {
      id: 1,
      name: 'Газпром',
      date: '2019-01-09',
      cost: "2000"
    },
    {
      id: 2,
      name: 'Автоваз',
      date: '2019-01-01',
      cost: "2500"
    },
    {
      id: 3,
      name: 'Сбербанк',
      date: '2019-01-05',
      cost: "10000"
    },

  ],
  isModalActive: false
}

export const content = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHARES:

      return {
        ...state, dataTable: [...state.dataTable, {
          id: state.dataTable.length + 1,
          name: action.name,
          date: action.date,
          cost: action.cost
        }].sort(function (a, b) {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }

          return 0;
        })
      }
    case CHANGE_DATA_ELEMENT:
      const { id, name, date, cost } = action.element
      return {
        ...state, dataTable: state.dataTable.map(element => element.id === id ? {
          id,
          name,
          date,
          cost
        } : element)
      }
    case CHANGE_ACTIVE_MODAL:
      return { ...state, isModalActive: !state.isModalActive };

    default:
      return state
  }
}
export const changeModalActive = () => ({ type: CHANGE_ACTIVE_MODAL })
export const changeDataElement = (element) => ({ type: CHANGE_DATA_ELEMENT, element })
export const createShares = ({ name, date, cost }) => ({ type: CREATE_SHARES, name, date, cost })
