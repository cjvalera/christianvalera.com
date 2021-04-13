import React from "react";

import Project from "../components/project";
import Layout from "../components/layout";

const ProjectsPage = () => (
  <Layout>
    <div style={{ margin: `0 20px` }}>
      <small>
        &#9432; Click the project <b>name</b> to check them out.
      </small>
    </div>

    <Project
      animate="right"
      name="MiniMed Mobile US"
      link="https://apps.apple.com/us/app/minimed-mobile-us/id1533456796"
      description="
      Worked on a class II medical app for receiving data from insulin pump and connected GST device using CoreBluetooth. Design and implemented a framework for secure communication 
      with a cloud server to retrieve cryptographic keys.
      "
      skills={["Swift", "Objective-C", "CoreBluetooth", "Cocoapods", "Carthage", "MVC", "Factory Pattern"]}
      image=""
    />

    <Project
      animate="left"
      name="Wag!"
      link="https://apps.apple.com/us/app/wag-dog-walkers-sitters/id940734609"
      description="
      Worked along side Wag! team to update various UI elements for the Wag! app to support new iPhones. Refactored legacy UI code to conform to Apple new design guidelines.
      "
      skills={["Swift", "XCode", "Human Interface Guidelines "]}
      image=""
    />

    <Project
      animate="right"
      name="Bronco Express: Bus Routes"
      link="https://github.com/cjvalera/Bronco-Express"
      description="
      Interfaces with a deprecated CPP Bronco Bus Express JSON-based API to access bus schedules and estimated arrivals.
      "
      skills={["Swift", "Codable", "URLSession", "JSON"]}
      image=""
    />

    <Project
      animate="left"
      name="Ribbon"
      link="https://itunes.apple.com/us/app/ribbon/id572236506?mt=8"
      description="
      An iOS app that makes it easy to 'make plans and have fun'. I help build the new lookin the app using storyboards, custom nibs, and programmatically. I also fixed existing bugs, optimized
      previous functionaly, and implemented new features.
       "
      skills={["Swift", "UIKit", "MVC", "Cocoapods"]}
      image=""
    />

    <Project
      animate="right"
      name="E-Tuner 4"
      link="https://play.google.com/store/apps/details?id=com.edelbrock.etuner.android&hl=en_US"
      description="
      An android app that communicates to a proprietary ECU device via bluetooth. Implemented the UI to show data and controls from/to the ECU.
      "
      skills={["Java", "Android Studio", "MVVM", "RxJava", "QT"]}
      image=""
    />


    <Project
      animate="left"
      name="Queen Mary"
      link="https://queenmary.com/"
      description="
      Redesign The Queen Mary's website with a responsive and modern look. Built the CMS using, ProcessWire, an open source CMS framework.
      "
      skills={["PHP", "ProcessWire", "HTML", "CSS", "jQuery"]}
      image=""
    />

    <Project
      animate="right"
      name="FileKeepers"
      link="https://sb.filekeepers.com/"
      description="
      Built a UI Dashboard that help small businesses to keep track and send request  for storing/pick-up/retrieval/destruction of documents. Intergrate Stripe's API to process transactions.
       "
      skills={["Angular 2", "NodeJS", "Pug", "SaSS", "TypeScript"]}
      image=""
    />



  </Layout>
);

export default ProjectsPage;
