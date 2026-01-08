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
      <h2>Sep 2025 - Present: Research Student at the{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.koziarskilab.com/">
          Koziarski Lab
        </a>
      </h2>
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
        include data preprocessing, model development, and evaluation. I am excited to 
        contribute to this important area of research and further develop my skills in 
        computer vision and biomedical applications.
      </p>
      <h2>
        May 2025 - Present: Research Assistant for Professor Babak Taati
      </h2>
      <p>
        From May to August 2025, I worked with Professor Babak Taati as an undergraduate 
        research assistant as a{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc494h1"
        >
          CSC495
        </a>{" "}
        student. My work involved investigating the impact of a synthetic dataset,{" "}
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
          rel="noopener no referrer"
        >
          research paper
        </a>{" "}
        based on our findings. I also worked on two other projects with Prof. Taati's research group, both
        of which resulted in publications. More details can be found in the{" "}
        <Link to="/research">Projects & Research</Link> page. I am currently continuing 
        my research with Prof. Taati as a Research Assistant on a volunteer basis.
      </p>
      <h2>
        Sep 2025 - Dec 2025: Teaching Assistant for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc207h1"
        >
          CSC207
        </a>
      </h2>
      <p>
        From September to December 2025, I was a TA for CSC207: Software
        Design. My responsibilites included holding weekly office hours to 
        assist students in their understanding of the material, while also 
        serving as a midterm invigilator, marking midterms & final exams.
        I also viewed and graded final project presentations.
      </p>
      <h2>
        Jan 2025 - Apr 2025: Teaching Assistant for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc148h1"
        >
          CSC148
        </a>
      </h2>
      <p>
        From January to April 2025, I was a TA for CSC148: Introduction to
        Computer Science. My responsibilites included leading two weekly
        two-hour lab sessions, while also holding office hours, serving as an
        exam invigilator, and marking midterms & final exams.
      </p>
      <h2>
        May 2024 - Dec 2024: Hanabi project (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc494h1"
        >
          CSC494/495
        </a>
        )
      </h2>
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
        . Moreover, we also started work on an intelligent game-playing agent.
        More details can be found in the{" "}
        <Link to="/research">Projects & Research</Link> page.
      </p>
      <h2>Sep 2023 - Apr 2024: FnS Consulting Inc.</h2>
      <p>
        From September 2023 to April 2024, I worked at FnS Consulting Inc., a
        Vancouver-based software consulting firm, as a Software Developer
        Intern. In this role, I worked on their IRM project, which involved
        designing and developing an end-to-end web application that served as an
        integrated risk management system for cybersecurity risks. For the
        front-end, I coded in React, HTML/CSS, JavaScript, and TypeScript, while
        I used C# for the back-end. This experience was my introduction to the
        development of large-scale applications with industry purposes.
      </p>
      <h2>May 2023 - Aug 2023: IAI Lab (ROP)</h2>
      <p>
        From May to August 2023, I worked at the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.josephjaywilliams.com/home"
        >
          Intelligent Adaptive Interventions Lab
        </a>{" "}
        as a part of the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.artsci.utoronto.ca/current/experiential-learning/research-opportunities/research-opportunities-program"
        >
          Research Opportunities Program
        </a>{" "}
        at the University of Toronto. At the lab, I assisted several graduate
        students with their research in human-computer interaction and
        education. My tasks ranged from programming (e.g. React, Python),
        literature reviews, and administrative work (e.g. note-taking during
        meetings, document organization).
      </p>
      <h2>Sep 2022 - Apr 2023: UofT MSA</h2>
      <p>
        From September 2022 to April 2023, I led the Department of Religious
        Education at the University of Toronto Muslim Students' Association. In
        this role, I organized educational programs, facilitated discussions on
        faith and personal growth, and worked to create an inclusive environment
        for a diverse student body. This experience deepened my skills in
        leadership, event planning, and community building.
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
            Later Life Learning Scholaship
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
