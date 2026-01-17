// src/pages/HomePage/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <p>
        I am a fourth-year student currently enrolled at the University of
        Toronto pursuing a Specialist in Computer Science and minors in
        Mathematics and Statistics. My current research interests span many
        topics in computer vision (e.g. image segmentation, 3D scene
        understanding, applications to healthcare) and machine learning (e.g. generative
        modeling, probabilistic modeling, reinforcement learning). Feel free to
        check out the below information about me and also the{" "}
        <Link to="/research">Projects & Research</Link> tab for more details on
        my work (including publications)!
      </p>

      <hr />

      <h1>Experiences</h1>

      <h2>Research</h2>

      <h3>Sep 2025 - Present: Research Student at the{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.koziarskilab.com/">
          Koziarski Lab
        </a>
      </h3>
      <p>
        Since September 2025, I am working as a research student at the Koziarski Lab, a joint 
        lab at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sickkids.ca/"
        >
          the Hospital for Sick Children
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vectorinstitute.ai/"
        >
          Vector Institute
        </a>
        , under the supervision of Dr. Michał Koziarski. My research focuses on developing 
        deep learning models for detecting cellular senescence, with the end goal of 
        determining the efficacy of different senomorphic drugs. My responsibilities 
        include data preprocessing, model development, and evaluation.
      </p>

      <h3>May 2025 - Present: Research Assistant for Professor Babak Taati</h3>
      <p>
        From May 2025 onward I worked with Professor Babak Taati as an undergraduate 
        research assistant (CSC495). My work involved investigating the impact of a synthetic dataset,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://borealisdata.ca/dataset.xhtml?persistentId=doi%3A10.5683%2FSP3%2FWCXMAP"
        >
          SynPAIN
        </a>
        , on the performance of a pain detection model for older adults with dementia. 
        This included data preprocessing, model training, and evaluation. I also 
        contributed to drafting and submitting a{" "}
        <a
          href="https://arxiv.org/abs/2507.19673"
          target="_blank"
          rel="noopener noreferrer"
        >
          research paper
        </a>{" "}
        based on our findings. I am currently continuing this research on a volunteer basis.
      </p>

      <h3>May 2024 - Dec 2024: Hanabi project (CSC494/495)</h3>
      <p>
        From May to December 2024, I worked with a team of three under the
        supervision of Professors Alice Gao and Jonathan Calver on a project
        related to the popular card game{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Hanabi_(card_game)"
        >
          Hanabi
        </a>
        . We developed an easily installable state-of-the-art game simulator
        that can be found{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/UofT-Hanabi-Lab/HanaSim"
        >
          here
        </a>
        . More details can be found in the{" "}
        <Link to="/research">Projects & Research</Link> page.
      </p>

      <h3>May 2023 - Aug 2023: IAI Lab (ROP)</h3>
      <p>
        From May to August 2023, I worked at the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.josephjaywilliams.com/home"
        >
          Intelligent Adaptive Interventions Lab
        </a>{" "}
        as part of the Research Opportunities Program. At the lab, I assisted several graduate
        students with their research in human-computer interaction and
        education. My tasks ranged from programming (e.g. React, Python),
        literature reviews, and administrative work.
      </p>

      <h2>Teaching</h2>

      <h3>Jan 2026 - Present: Teaching Assistant for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc148h1"
        >
          CSC148
        </a>
      </h3>
      <p>
        From January 2026 to present I TAed CSC148 again. My responsibilities include 
        holding weekly office hours, providing assignment and coursework guidance, and 
        grading & invigilating exams.
      </p>

      <h3>Sep 2025 - Dec 2025: Teaching Assistant for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc207h1"
        >
          CSC207
        </a>
      </h3>
      <p>
        From September to December 2025, I was a TA for CSC207: Software
        Design. My responsibilities included holding weekly office hours to 
        assist students, serving as a midterm invigilator, and marking 
        midterms & final exams.
      </p>

      <h3>Jan 2025 - Apr 2025: Teaching Assistant for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc148h1"
        >
          CSC148
        </a>
      </h3>
      <p>
        From January to April 2025, I was a TA for CSC148: Introduction to
        Computer Science. My responsibilities included leading two weekly
        two-hour lab sessions, holding office hours, serving as an exam invigilator, and grading.
      </p>

      <h2>Industry</h2>

      <h3>Sep 2023 - Apr 2024: FnS Consulting Inc.</h3>
      <p>
        From September 2023 to April 2024, I worked at FnS Consulting Inc., a
        Vancouver-based software consulting firm, as a Software Developer
        Intern. I worked on their IRM project, designing and developing an end-to-end web application. For the
        front-end I used React, HTML/CSS, JavaScript, and TypeScript, while
        the back-end used C#. This experience introduced me to development of large-scale applications.
      </p>

      <hr />

      <h1>Education</h1>
      <ul>
        <li>
          University of Toronto (2021-): Honours Bachelor of Science
          <br />
          CGPA: 3.97 (
          <a target="_blank" rel="noopener noreferrer" href="/transcript.pdf">
            Transcript
          </a>
          )
          <ul>
            <li>
              Specialist in Computer Science (Focuses in Artificial Intelligence and Computer Vision)
            </li>
            <li>Minor in Mathematics</li>
            <li>Minor in Statistics</li>
          </ul>
        </li>
        <li>
          The York School: International Baccalaureate & Ontario Secondary
          School Diploma
          <br />
          IB Score: 41
        </li>
      </ul>

      <hr />

      <h1>Awards & Certifications</h1>
      <ul>
        <li>
          2022, 2023 & 2024:{" "}
          <a
            href="https://artsci.calendar.utoronto.ca/academic-record#deans-list-scholar"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Toronto Dean's List Scholar
          </a>
        </li>
        <li>
          2024:{" "}
          <a
            href="https://awards.innis.utoronto.ca/award/innis-achievement/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Innis College Exceptional Achievement Award
          </a>
        </li>
        <li>
          2022 & 2023:{" "}
          <a
            href="https://awards.innis.utoronto.ca/award/later-life-learning/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Later Life Learning Scholarship
          </a>
        </li>
        <li>
          2021:{" "}
          <a
            href="https://future.utoronto.ca/finances/awards/university-of-toronto-scholars-program/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Toronto Scholars' Award
          </a>
        </li>
        <li>
          2021:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Ontario_Scholar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ontario Scholar Award
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
