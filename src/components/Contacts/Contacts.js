import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiAtSign } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.05)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contact</h1>
                <div className='contacts-body contacts-body--single'>
                    <div className='contacts-details'>
                        {contactsData.email && (
                            <a
                                href={`mailto:${contactsData.email}`}
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FiAtSign />
                                </div>
                                <p style={{ color: theme.tertiary }}>
                                    {contactsData.email}
                                </p>
                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </div>
                                <p style={{ color: theme.tertiary }}>
                                    LinkedIn
                                </p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
