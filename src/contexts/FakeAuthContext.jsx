import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuthed: false };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthed: true };
    case "logout":
      return { ...state, user: "", isAuthed: false };
    default:
      throw new Error("unknown action");
  }
}

const FAKE_USER = {
  name: "Aorui",
  email: "aorui@example.com",
  password: "123456",
  avatar: "https://i.pravatar.cc/100?img=20",
};

function AuthProvider({ children }) {
  const [{ user, isAuthed }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthed }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside of the AuthProvider.");
  return context;
}

export { AuthProvider, useAuth };
