'use client';

import { FC, ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, useErrorBoundary } from 'react-error-boundary';

import { Button } from '@/components/ui/button';

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
      <h3>Something went wrong:</h3>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <Button onClick={resetBoundary}>Refresh</Button>
    </div>
  );
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
