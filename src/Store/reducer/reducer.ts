const initialState = {
  list: [
    {
      name: "Production-Ready Microservices",
      cost: 800,
      id: 1,
      author: "Susan J. Fowler",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },
    {
      name: "Release It!",
      cost: 400,
      id: 2,
      author: "Michael T. Nygard",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg",
    },
  ],
  basket: [],
};
export default function reducer(
  state: { list: any; basket: any } = initialState,
  action: { type: any; value: any }
) {
  var obj: any = {};

  state.list.map((item: any) =>
    item.id === action.value ? (obj = item) : null
  );

  switch (action.type) {
    case "ADD":
      if (state.basket.indexOf(obj) === -1) {
        obj.counter = 1;
        return {
          list: [...state.list],
          basket: [...state.basket, obj],
        };
      } else {
        state.basket.map((item: any) =>
          item.id === action.value ? item.counter++ : null
        );
        return {
          list: [...state.list],
          basket: [...state.basket],
        };
      }

    case "REMOVE":
      return {
        list: [...state.list],
        basket: state.basket.filter((item: any) => {
          if (item.id === action.value) {
            item.counter--;
            if (item.counter === 0) {
              return null;
            }
          }
          return item;
        }),
      };

    case "DELETE":
      return {
        list: [...state.list],
        basket: state.basket.filter((item: any) => {
          if (item.id === action.value) {
            return null;
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
