import * as actions from "../actions/postActions";

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { loading: false, hasErrors: false, posts: action.payload };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
