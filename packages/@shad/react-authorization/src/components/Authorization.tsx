import React from 'react';
import { AuthorizationContextType, useAuthorization } from '../context/AuthorizationContext';

type AuthorizationProps<KEYS extends string, ARGS> = {
    forbiddenFallback?: React.ReactNode;
    children: React.ReactNode;
    policy: keyof AuthorizationContextType<KEYS, ARGS>['policies'];
    policyArgs: ARGS;
}

const AuthorizationContent = <KEYS extends string, ARGS>({
    policy,
    policyArgs,
    children,
    forbiddenFallback
}: AuthorizationProps<KEYS,ARGS>) => {
    const { policies } = useAuthorization<KEYS, ARGS>();
    const policyFn = policies[policy];

    if (!policyFn) {
        throw new Error(`[@shad/react-authorization] The policy ${String(policy)} is not defined`);
    }

    return policyFn(policyArgs) ? children : forbiddenFallback;
}

const Authorization = <KEYS extends string, ARGS>({
  policy,
  policyArgs,
  forbiddenFallback = null,
  children,
}: AuthorizationProps<KEYS, ARGS>) =>
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