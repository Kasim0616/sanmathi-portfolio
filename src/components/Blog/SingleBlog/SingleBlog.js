import React from 'react'
import Fade from 'react-reveal/Fade';

import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    const Wrapper = url ? 'a' : 'div';
    const wrapperProps = url
        ? { href: url, target: '_blank', rel: 'noreferrer' }
        : {};

    return (
        <Fade bottom>
            <Wrapper
                className="singleBlog"
                key={id}
                style={{backgroundColor: theme.primary400}}
                {...wrapperProps}
            >
                {image && (
                    <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                        <img src={image} alt={title} />
                    </div>
                )}
                <div className="singleBlog--body">
                    {date ? <p style={{color: theme.tertiary}}>{date}</p> : null}
                    <h3 style={{color: theme.secondary}}>{title}</h3>
                    <h6 style={{color: theme.secondary}}>{desc}</h6>
                </div>
            </Wrapper>
        </Fade>
    )
}

export default SingleBlog
