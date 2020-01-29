import { RESET_STYLES, SWITCH_STYLES, SWITCH_NAVBAR_STYLES } from "../constants";

const initial = {
  backgroundColor: {
    from: "white",
    to: "white"
  },
  color: { 
    from: "rgba(0, 0, 0, 0.87)",
    to: "rgba(0, 0, 0, 0.87)"
  },
  button: {
    color: "#673ab7",
    hover_color: "white",
    hover_backgroundColor:  "#673ab7",
  },
  navbarBackgroundColor: {
    from: 'rgba(103,58,183, 0)',
    to: 'rgba(103,58,183, 0)'
  }
}

export default (state = initial, action) => {
  switch (action.type) {
    case RESET_STYLES:
      return initial
    case SWITCH_STYLES:
      return { ...action.payload };
    case SWITCH_NAVBAR_STYLES:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
