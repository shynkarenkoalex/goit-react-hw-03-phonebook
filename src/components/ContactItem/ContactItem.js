import React from 'react';
import './ContactItem.css';
import PropTypes from 'prop-types';

const ContactItem = ({nameItem, numberItem, onRemove}) => (    
    <li className='Contact-item'>
        <p className='Contact-text'>{nameItem}: {numberItem}</p>
        <section className='Contact-actions'>
            <button type='button' className='Contact-button' onClick={onRemove}>Удалить</button>
        </section>
    </li>
)

ContactItem.propTypes = {
    nameItem: PropTypes.string.isRequired,
    numberItem: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default ContactItem;