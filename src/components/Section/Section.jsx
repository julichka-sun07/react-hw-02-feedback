import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={css.div}>
    <p className={css.titele}>{title}</p>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
