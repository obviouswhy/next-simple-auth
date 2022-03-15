import { useEffect } from "react";
import useAuth from "../providers/AuthProvider";
import { useRouter } from "next/router";

export default function useProtectedRoute(WrappedComponent) {
  return function RouteWrapper(props) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (!isLoading && !user) {
        router.replace("/");
      }
    }, [user, isLoading, router]);

    if (!user) {
      return <div />;
    }
    return <WrappedComponent {...props} />;
  };
}
