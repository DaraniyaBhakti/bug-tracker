//currying used

//SNA
const logger = param => store => next => action => {

    //paramaterixed middleware
    console.log("Logging",param);

    
    // console.log("store",store);
    // console.log("next",next);
    // console.log("action",action);
    next(action);
}

export default logger;
//curring
//N => 1