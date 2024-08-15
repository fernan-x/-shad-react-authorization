'use client';

import React from 'react';
import { Authorization } from '@shad/react-authorization';

const Component = () => {
    const policyArgs = { user: { id: '123', name: 'Fabien' }, other: { foo: 'bar', bar: 'baz' } };
    const policyArgs2 = { user: { id: '1', name: 'Fabien' }, other: { foo: 'bar', bar: 'baz' } };
    return <div>
        Component
        <Authorization policy="policy:view" policyArgs={policyArgs}>
            <div>I can see the policy:view</div>
        </Authorization>
        <Authorization policy="policy:view" policyArgs={policyArgs2}>
            <div>I can't see the policy:view</div>
        </Authorization>
    </div>;
};

export default Component;