import {
  SET_USER,
  /*   SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI, */
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_POST,
  UNLIKE_POST,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: { handle: "" },
  likes: [],
  notifications: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            postID: action.payload.postId,
          },
        ],
      };
    case UNLIKE_POST:
      return {
        ...state,
        likes: state.likes.filter(
          (like: any) => like.postId === action.payload.postId
        ),
      };
    default:
      return state;
  }
}
