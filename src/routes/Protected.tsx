import { To, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { useQuery } from "react-query";
import { useGetProfile } from "../features/endpoints/service/auth";
import { setUser } from "../features/slices/auth";

type AuthRouteProps = {
  Page: JSX.Element;
  path: To;
};

const Protected = ({ Page, path }: AuthRouteProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["school"],
    queryFn: useGetProfile,
    refetchOnWindowFocus: true,
    retry: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate(path);
      } else {
        dispatch(setUser(user));
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return;
  }
  return Page;
};
export default Protected;
