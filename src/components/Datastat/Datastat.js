import PropTypes from 'prop-types';
import getBgColor from '../../special_function/getBgColor';
import s from './Datastat.module.css';

export default function Datastat({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: getBgColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Datastat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
