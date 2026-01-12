import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Achievement } from '../../components'

function Main() {
    return (
        <div>
            <Helmet>
                <title>My Portfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
