import { POLICIES } from "@shad/react-authorization";

// Define your policies arguments
type POLICIES_ARGS = {
    user: {
        id: string;
        name: string;
        role: 'admin' | 'user';
    },
    note: {
        id: string;
        title: string;
        owner: string;
    }
}

const AVAILABLE_POLICIES = {
    ACCESS_DASHBOARD: 'access:dashboard:',
    ACCESS_ADMIN_PANEL: 'access:admin_panel',
    NOTE_VIEW: 'note:view',
    NOTE_EDIT: 'note:edit',
    NOTE_DELETE: 'note:delete',
} as const;

// Define your policies
const NOTE_POLICIES = {
    [AVAILABLE_POLICIES.NOTE_VIEW]: (args: POLICIES_ARGS) => {
        return args.user ? true : false;
    },
    [AVAILABLE_POLICIES.NOTE_EDIT]: (args: POLICIES_ARGS) => {
        return args.user?.role === 'admin' || args.user?.id === args.note?.owner;
    },
    [AVAILABLE_POLICIES.NOTE_DELETE]: (args: POLICIES_ARGS) => {
        return args.user?.role === 'admin' || args.user?.id === args.note?.owner;
    }
};

const ACCESS_POLICIES = {
    [AVAILABLE_POLICIES.ACCESS_DASHBOARD]: (args: POLICIES_ARGS) => {
        return args.user ? true : false;
    },
    [AVAILABLE_POLICIES.ACCESS_ADMIN_PANEL]: (args: POLICIES_ARGS) => {
        return args.user?.role === 'admin';
    }
};

// Create the global policies type
const APP_POLICIES: POLICIES<typeof AVAILABLE_POLICIES[keyof typeof AVAILABLE_POLICIES], POLICIES_ARGS> = {
    ...NOTE_POLICIES,
    ...ACCESS_POLICIES,
};

export { AVAILABLE_POLICIES };
export default APP_POLICIES;