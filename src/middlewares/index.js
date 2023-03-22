export const logger = (store) => (next) => (action) =>{
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'eddie'}, ...actionInfo.action.payload];
    console.log('featured', featured)
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
      };
    console.log('updated', updatedActionInfo)
    next(updatedActionInfo)
}