import React from 'react';
import { Authorization } from '@shad/react-authorization';

const Component = () => {
    const policyArgs = { user: { id: '123', name: 'Fabien' }, other: { foo: 'bar', bar: 'baz' } };
    return <div>
        Component
        <Authorization policy="policy:view" policyArgs={policyArgs}>
            <div>Policy:view</div>
        </Authorization>
    </div>;
};

export default Component;