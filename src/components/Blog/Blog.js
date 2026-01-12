import React,{ useContext} from 'react';

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';


function Blog() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="references" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>Leadership & Activities</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div> 

                    </div>
                </div>
            )}

        </>
    )
}

export default Blog
