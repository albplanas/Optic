import * as actionTypes from './actions';

const initialState = {
    open_menu:true,
    login:false,
    door:"door1",
    sources:[{
        fn:"haz", 
        prop:{
            x_origen:'1',
            y_origen:'1',
            slope:'1',
            sence:'+)',
            gen:0
             },                 //[x_focus,y_focus,slope,sence]
        id:1
    }],
    devices:[{
        fn:"mirror", 
        prop:{
            x_origen:'5',
            y_origen:'4',
            slope:'0',
            radius:"inf",
            longitud:"10",
            sence:'-)'
             },  //[x_center,y_center,slope,radius,longitud,sence]
        id:2
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
            case actionTypes.MAINMENU:
            return {
                ...state,
                open_menu: state.open_menu===false?true:false 
            } 

            case actionTypes.SELECTMENU:
            return {
                ...state,
                    door: action.door
            }

            case actionTypes.ADDFUNCTION:
            var p={ x_origen:action.properties[0],y_origen:action.properties[1], slope:action.properties[2],radius:action.properties[4], longitud:action.properties[4], sence:action.properties[3]}
            var q={ x_origen:action.properties[0],y_origen:action.properties[1], slope:action.properties[2],sence:action.properties[3],gen:0}

            return action.fn==="haz"?{
                                    ...state,
                                    sources :state.sources.concat({ fn:action.fn, prop:q, id:action.id})
                                }:{
                                    ...state,
                                    devices :state.devices.concat({ fn:action.fn, prop:p, id:action.id})
                                }

    }
    return state;
};

export default reducer;