interface SetStateOnRequestProps {
    defaultDataState: {};
    draft: {
        data: {};
        loading: boolean;
        error?: {} | null;
    };
}

export const setStateOnRequest = ({ defaultDataState, draft }: SetStateOnRequestProps): void => {
    draft.data = defaultDataState;
    draft.loading = true;
    draft.error = null;
};

interface SetStateOnSuccessProps {
    action: {
        payload: any;
    };
    draft: {
        data: {};
        loading: boolean;
        error?: {} | null;
    };
}

export const setStateOnSuccess = ({ draft, action }: SetStateOnSuccessProps): void => {
    draft.data = action.payload;
    draft.loading = false;
    draft.error = null;
};

interface SetStateOnErrorProps {
    defaultDataState: {};
    action: {
        payload: {};
    };
    draft: {
        data: {};
        loading: boolean;
        error?: {} | null;
    };
}

export const setStateOnError = ({
    defaultDataState,
    draft,
    action,
}: SetStateOnErrorProps): void => {
    draft.data = defaultDataState;
    draft.loading = false;
    draft.error = action.payload;
};

export const getInitialState = (dataDefaultState: {}) => ({
    data: dataDefaultState,
    loading: false,
    error: null,
});

interface AllInOneProps {
    request: string;
    success: string;
    error: string;
    defaultDataState: {};
    action: {
        type: string;
        payload: {};
    };
    draft: {
        data: {};
        loading: boolean;
        error?: {} | null;
    };
}

export const allInOne = ({
    request,
    success,
    error,
    defaultDataState,
    draft,
    action,
}: AllInOneProps) => {
    switch (action.type) {
        case request:
            setStateOnRequest({ defaultDataState, draft });
            break;
        case success:
            setStateOnSuccess({ draft, action });
            break;
        case error:
            setStateOnError({ defaultDataState, draft, action });
            break;
        default:
            break;
    }
};

interface AllInOneWithResetProps {
    request: string;
    success: string;
    error: string;
    reset: string;
    defaultDataState: {};
    action: {
        type: string;
        payload: {};
    };
    draft: {
        data: {};
        loading: boolean;
        error?: {} | null;
    };
}

export const allInOneWithReset = ({
    request,
    success,
    error,
    reset,
    defaultDataState,
    draft,
    action,
}: AllInOneWithResetProps) => {
    switch (action.type) {
        case request:
            setStateOnRequest({ defaultDataState, draft });
            break;
        case success:
            setStateOnSuccess({ draft, action });
            break;
        case error:
            setStateOnError({ defaultDataState, draft, action });
            break;
        case reset:
            return getInitialState(defaultDataState);
        default:
            break;
    }
};
