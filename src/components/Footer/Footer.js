import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="footer" style={{ backgroundColor: theme.secondary }}>
            <p style={{ color: theme.tertiary }}>
                Built by Kasim0616(github) · Inspired by an MIT-licensed open-source portfolio.
            </p>
        </div>
    );
}

export default Footer;
