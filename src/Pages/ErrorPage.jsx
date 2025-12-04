import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  return <div>{error?.message || "An unknown error occurred"}</div>;
};

export default ErrorPage;
