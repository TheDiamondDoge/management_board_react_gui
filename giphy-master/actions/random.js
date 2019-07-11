export const GET_RANDOM_GIPHY = "GET_RANDOM_GIPHY";
export const ON_SUCCESS = "ON_SUCCESS";
export const ON_ERROR = "ON_ERROR";

export const getRandomGiphy = () => (
    {
        type: GET_RANDOM_GIPHY,
        isLoading: true
    }
);

export const onSuccess = (giphy) => (
    {
        type: ON_SUCCESS,
        giphy: giphy,
        isLoading: false
    }
);

export const onError = () => (
    {
        type: ON_ERROR,
        isLoading: false,
    }
);