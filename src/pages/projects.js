import React from 'react'

import Project from '../components/project'
import Layout from '../components/layout'

const ProjectsPage = () => (
  <Layout>
    <div style={{ margin: `0 20px` }}>
      <small>
        &#9432; Click the project <b>name</b> to check them out.
      </small>
    </div>
    <Project
      animate="left"
      name="File Keepers"
      link="https://sb.filekeepers.com/"
      description="Built a UI Dashboard that help small businesses to keep track and send request 
        for storing/pick-up/retrieval/destruction of documents.
       "
      skills={['Angular 2', 'NodeJS', 'Pug', 'SaSS', 'TypeScript']}
      image=""
    />

    <Project
      animate="right"
      name="Ribbon"
      link="https://itunes.apple.com/us/app/ribbon/id572236506?mt=8"
      description="An iOS app that makes it easy to 'make plans and have fun'. I help build the new look
       in the app using storyboards, custom nibs, and programmatically. I also fixed existing bugs, optimized
       previous functionaly, and implemented new features."
      skills={['Swift', 'XCode', 'MVC', 'Cocoapods']}
      image=""
    />

    <Project
      animate="left"
      name="MexCocina Cafe"
      link="http://mexcocinacafe.com/"
      description="A responsive website for a family owned restaurant that serves authentic Mexican food."
      skills={['HTML', 'CSS', 'jQuery', 'WordPress']}
      image="https://i.imgur.com/VL6vhHX.jpg"
    />

    <Project
      animate="right"
      name="Queen Mary"
      link="https://queenmary.com/"
      description="Redesign The Queen Mary's website with a responsive and modern look. Built the CMS
                using, ProcessWire, an open source CMS framework."
      skills={['PHP', 'ProcessWire', 'HTML', 'CSS', 'jQuery']}
      image=""
    />

    <Project
      animate="left"
      name="Edelbrock"
      link="https://play.google.com/store/apps/details?id=com.edelbrock.etuner.android&hl=en_US"
      description="An android app that communicates to a proprietary ECU device via bluetooth. Implemented the UI to
                    show data and controls from/to the ECU."
      skills={['Java', 'Android Studio', 'MVVM', 'RxJava', 'QT']}
      image=""
    />
  </Layout>
)

export default ProjectsPage
