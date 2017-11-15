export default function reducer(state={
	events: {},
	fetching: false,
	fetched: false,
	error:null,
    eventSelected : false,
    eventDetail : null
	}, action){

	switch (action.type) {
		case "FETCH_EVENTS":
		{
			return {...state, fetching: true}
			break;
		}
		case "FETCH_EVENTS_FULFILLED":
		{
			return {...state, fetching:false, fetched: true, events: action.payload}
			break;
		}

		case "FETCH_EVENTS_REJECTED":
		{
			return {...state, fetching:false,  error: action.payload}
			break;
		}

        case "FETCH_ONGOING_EVENTS":
        {	
            return Object.assign({}, state, {events: action.payload})
            break;
        }

        case "FETCH_CULTURAL_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

        case "FETCH_SPORTS_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

        case "FETCH_TECHNICAL_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

		case "CREATE_NEW_EVENT":
		{
			return Object.assign({}, state, {logged_in: action.payload.event, message: action.payload.message})
			alert("Event Added Successfully");
			break;
		}
        case "SELECTED_EVENT_IN_LIST":
        {
			alert("In reducers");
            console.log("eventDetail in reducers=" + JSON.stringify(action.payload));
            return Object.assign({},state,{eventDetail : action.payload })
            break;
        }
	}

	return state;
}