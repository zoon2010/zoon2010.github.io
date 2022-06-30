const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  web3: null,
  errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.rinkeby.account,
        smartContract: action.rinkeby.smartContract,
        web3: action.rinkeby.web3,
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.rinkeby,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.rinkeby.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
