import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthed) navigate("/");
    },
    [isAuthed, navigate]
  );
  return isAuthed ? children : null;
}

export default ProtectedRoute;
