type POLICIES_ARGS = {
    user: {
        id: string;
        name: string;
    },
    other: {
        foo: string;
        bar: string;
    }
}


const POLICIES = {
    'policy:view': (args: POLICIES_ARGS) => {
        return args.user.id === '123';
    },
    'policy:edit': (args: POLICIES_ARGS) => {
        return args.user.id === '1234';
    }
}

export type AVAILABLE_POLICIES = keyof typeof POLICIES;
export {
    POLICIES,
};