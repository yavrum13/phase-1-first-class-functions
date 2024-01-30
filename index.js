//writing code here
function callbackFunction(argument){
    return argument;
}

function receivesAFunction(callback){
    return callback();
}
receivesAFunction(callbackFunction);

function returnsANamedFunction(){
    function namedFunction(){
        return callbackFunction;
    }
    return namedFunction();
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am just a sneaky little function');
    }
}
returnsAnAnonymousFunction()();