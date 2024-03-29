const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type){
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.payload],
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.payload
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map((topic) => {
                    if (topic._id === action.payload._id) {
                        return action.payload
                    }else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.payload._id)
            }
        case "CLEAR_TOPICS":
            return { topics: []}
        default:
            return state

    }
}

export default topicReducer