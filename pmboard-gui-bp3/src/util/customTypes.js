import PropTypes from 'prop-types';

export const NavigationMenuItem = PropTypes.shape({
    id: PropTypes.string.isRequired,
    catButtonName: PropTypes.string.isRequired,
    subMenus: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    )
});