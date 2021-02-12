import { CHANGE_ACTIVE_MODAL, CHANGE_DATA_ELEMENT, CREATE_SHARES } from "../../constants"

const initialState = {
  dataTable: [
    {
      id: 1,
      name: 'Газпром',
      date: '2019-01-01',
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
    {
      id: 4,
      name: 'Газпром',
      date: '2019-01-10',
      cost: "10000"
    },
    {
      id: 5,
      name: 'Автоваз',
      date: '2019-10-07',
      cost: "10000"
    },

  ],
  isModalActive: false
}

export const content = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHARES:
      let dublicate = false
      const newDateTable = state.dataTable.map(element => {
        if ((element.date === action.date) && (element.name === action.name)) {
          dublicate = !dublicate
          return {
            ...element,
            cost: action.cost
          }

        }
        return element
      })

      return {
        ...state, dataTable: dublicate ? [...newDateTable] : [...newDateTable, {
          id: state.dataTable.length + 1,
          name: `${action.name}`,
          date: action.date,
          cost: +action.cost
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
    case CHANGE_DATA_ELEMENT: {
      const { id, name, date, cost } = action.element
      const newDateTable = state.dataTable.reduce((acc, rec) => {
        if ((rec.date === date) && (rec.name === name)) {
          return rec.id !== id ? [...acc] : [...acc, {
            ...rec,
            name,
            date,
            cost: +cost
          }]
        } else if (rec.id === id) {
          return [...acc, {
            id,
            name,
            date,
            cost: +cost
          }]
        }
        return [...acc, rec]

      }, [])
      return {
        ...state, dataTable: [...newDateTable].sort(function (a, b) {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }

          return 0;
        })
      }
    }
    case CHANGE_ACTIVE_MODAL:
      return { ...state, isModalActive: !state.isModalActive };

    default:
      return state
  }
}
