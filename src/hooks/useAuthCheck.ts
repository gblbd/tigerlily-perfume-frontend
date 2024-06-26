/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useEffect, useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import Cookies from "js-cookie";
import { login } from "../redux/features/auth/authSlice";

interface IUserLoggedInPayload {
  isLoggedIn: boolean;
  user: string;
}

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    const tokenCookie = Cookies.get("token");

    if (userCookie && tokenCookie) {
      const parsedUserCookie: IUserLoggedInPayload = JSON.parse(
        decodeURIComponent(userCookie)
      );

      if (tokenCookie && parsedUserCookie.isLoggedIn) {
        const { isLoggedIn, user } = parsedUserCookie;
        // console.log(isLoggedIn, user);
        if (isLoggedIn && user) {
          dispatch(
            login({
              isLoggedIn: parsedUserCookie.isLoggedIn,
              user: parsedUserCookie.user,
              accessToken: tokenCookie,
              refreshToken: null,
            })
          );
        }
      }
    }

    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
}
