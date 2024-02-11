import PropTypes from 'prop-types';
import './modal.css';

/**
 * Composant Modal affichant un titre, un texte et un bouton de fermeture.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} [props.title=""] - Le titre du modal.
 * @param {string} [props.text=""] - Le texte du modal.
 * @param {Function} props.closeModal - La fonction de fermeture du modal.
 * @returns {JSX.Element} Un élément JSX représentant le modal.
 */
const Modal = ({ title = "", text = "", closeModal }) => {

  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <div className="modal__title">{title}</div>
        <div className="modal__body">
          <p>{text}</p>
        </div>
        <div className="modal__footer">
          <button onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Modal;
