import React from 'react';
import { useAuthorization } from './context/AuthorizationContext';

type AuthorizationProps<T> = {
    forbiddenFallback?: React.ReactNode;
    children: React.ReactNode;
    policy: string; // TODO: try union
    policyArgs: T;
}

const AuthorizationContent = <T,>({
    policy,
    policyArgs,
    children,
    forbiddenFallback
}: AuthorizationProps<T>) => {
    const { policies } = useAuthorization<T>();
    const policyFn = policies[policy];

    const canAccess = policyFn ? policyFn(policyArgs) : false;
    return canAccess ? children : forbiddenFallback;
}

const Authorization = <T,>({
  policy,
  policyArgs,
  forbiddenFallback = null,
  children,
}: AuthorizationProps<T>) =>
    <AuthorizationContent
        policy={policy}
        policyArgs={policyArgs}
        forbiddenFallback={forbiddenFallback}
    >
        {children}
    </AuthorizationContent>

Authorization.defaultProps = {
    forbiddenFallback: null,
}

export default Authorization;