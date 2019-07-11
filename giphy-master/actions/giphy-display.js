export const GIPHY_CLICKED = "GIPHY_CLICKED";
export const CLICKED_AWAY = "CLICKED_AWAY";

export const giphyClicked = (full) => {
    return {
        type: GIPHY_CLICKED,
        link: full
    }
};

export const clickedAway = () => ({
    type: CLICKED_AWAY
});