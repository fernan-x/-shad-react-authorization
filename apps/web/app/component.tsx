'use client';

import React from 'react';
import { Authorization } from '@shad/react-authorization';
import { AVAILABLE_POLICIES } from './policies';

const Component = () => {
    const policyArgs = { user: { id: '123', name: 'Fabien' }, other: { foo: 'bar', bar: 'baz' } };
    return <div>
        <h1>Debug policies</h1>
        {JSON.stringify(policyArgs)}
        <Authorization
            policy={AVAILABLE_POLICIES.ACCESS_DASHBOARD}
            policyArgs={policyArgs}
            forbiddenFallback={<div>❌ {AVAILABLE_POLICIES.ACCESS_DASHBOARD}</div>}
        >
            <div>✅ {AVAILABLE_POLICIES.ACCESS_DASHBOARD}</div>
        </Authorization>
        <Authorization
            policy={AVAILABLE_POLICIES.ACCESS_ADMIN_PANEL}
            policyArgs={policyArgs}
            forbiddenFallback={<div>❌ {AVAILABLE_POLICIES.ACCESS_ADMIN_PANEL}</div>}
        >
            <div>✅ {AVAILABLE_POLICIES.ACCESS_ADMIN_PANEL}</div>
        </Authorization>
    </div>;
};

export default Component;