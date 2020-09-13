export const setStateOnRequest = ({ defaultDataState, draft }): void => {
    draft.data = defaultDataState;
    draft.loading = true;
    draft.error = null;
};

export const setStateOnSuccess = ({ draft, action }): void => {
    draft.data = action.payload;
    draft.loading = false;
    draft.error = null;
};

export const setStateOnError = ({ defaultDataState, draft, action }): void => {
    draft.data = defaultDataState;
    draft.loading = false;
    draft.error = action.payload;
};

export const getInitialState = (dataDefaultState) => ({
    data: dataDefaultState,
    loading: false,
    error: null,
});

export const allInOne = ({ request, success, error, defaultDataState, draft, action }) => {
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

export const allInOneWithReset = ({
    request,
    success,
    error,
    reset,
    defaultDataState,
    draft,
    action,
}) => {
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
