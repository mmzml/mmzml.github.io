// src/pages/HomePage/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <CollapsibleSection title="Introduction">
        <div className={styles.introBlock}>
          <p>
            I am a final-year student currently enrolled at the University of
            Toronto pursuing a Specialist in Computer Science and minors in
            Mathematics and Statistics. My current research interests span many
            topics in computer vision and machine learning. Feel free to check
            out the below information about me and also the{" "}
            <Link to="/research">Projects & Research</Link> tab for more details
            on my work (including publications)!
          </p>
          <div className={styles.interestGroups}>
            <div className={styles.interestGroup}>
              <span className={styles.interestLabel}>Computer Vision</span>
              <span className={styles.interestTag}>Image Segmentation</span>
              <span className={styles.interestTag}>3D Scene Understanding</span>
              <span className={styles.interestTag}>Healthcare Applications</span>
            </div>
            <div className={styles.interestGroup}>
              <span className={styles.interestLabel}>Machine Learning</span>
              <span className={styles.interestTag}>Generative Modeling</span>
              <span className={styles.interestTag}>Probabilistic Modeling</span>
              <span className={styles.interestTag}>Reinforcement Learning</span>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Experiences">
        <CollapsibleSection title="Research" compact>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>May 2025 - Present: Research Assistant for Professor Babak Taati</h3>
            <p className={styles.entryBody}>
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
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Sep 2025 - Feb 2026: Research Student at the{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.koziarskilab.com/">
                Koziarski Lab
              </a>
            </h3>
            <p className={styles.entryBody}>
              From September 2025 to February 2026, I worked as a research student at the Koziarski Lab, a joint
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
              , under the supervision of Dr. Michał Koziarski. My research focused on developing
              deep learning models for detecting cellular senescence, with the end goal of
              determining the efficacy of different senomorphic drugs. My responsibilities
              included data preprocessing, model development, and evaluation.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>May 2024 - Dec 2024: Hanabi project (CSC494/495)</h3>
            <p className={styles.entryBody}>
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
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>May 2023 - Aug 2023: IAI Lab (ROP)</h3>
            <p className={styles.entryBody}>
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
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Teaching" compact>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Jan 2026 - Present: Teaching Assistant for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://artsci.calendar.utoronto.ca/course/csc148h1"
              >
                CSC148
              </a>
            </h3>
            <p className={styles.entryBody}>
              Since January 2026, I am once again working as a TA for CSC148. My responsibilities include
              holding weekly office hours, providing assignment and coursework guidance, and
              grading & invigilating exams.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Sep 2025 - Dec 2025: Teaching Assistant for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://artsci.calendar.utoronto.ca/course/csc207h1"
              >
                CSC207
              </a>
            </h3>
            <p className={styles.entryBody}>
              From September to December 2025, I was a TA for CSC207: Software
              Design. My responsibilities included holding weekly office hours to
              assist students, serving as a midterm invigilator, and marking
              midterms & final exams.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Jan 2025 - Apr 2025: Teaching Assistant for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://artsci.calendar.utoronto.ca/course/csc148h1"
              >
                CSC148
              </a>
            </h3>
            <p className={styles.entryBody}>
              From January to April 2025, I was a TA for CSC148: Introduction to
              Computer Science. My responsibilities included leading two weekly
              two-hour lab sessions, holding office hours, serving as an exam invigilator, and grading.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Industry" compact>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Sep 2023 - Apr 2024: FnS Consulting Inc.</h3>
            <p className={styles.entryBody}>
              From September 2023 to April 2024, I worked at FnS Consulting Inc., a
              Vancouver-based software consulting firm, as a Software Developer
              Intern. I worked on their IRM project, designing and developing an end-to-end web application. For the
              front-end I used React, HTML/CSS, JavaScript, and TypeScript, while
              the back-end used C#. This experience introduced me to development of large-scale applications.
            </p>
          </div>
        </CollapsibleSection>
      </CollapsibleSection>

      <CollapsibleSection title="Education">
        <div className={styles.eduCard}>
          <div className={styles.eduCardHeader}>
            <span className={styles.eduInstitution}>University of Toronto</span>
            <span className={styles.eduYears}>2021 – present</span>
          </div>
          <div className={styles.eduDegree}>Honours Bachelor of Science</div>
          <div className={styles.eduMeta}>
            CGPA: 3.97 &middot;{" "}
            <a target="_blank" rel="noopener noreferrer" href="/transcript.pdf">
              Transcript
            </a>
          </div>
          <ul className={styles.eduDetails}>
            <li>Specialist in Computer Science (Focuses in Artificial Intelligence and Computer Vision)</li>
            <li>Minor in Mathematics</li>
            <li>Minor in Statistics</li>
          </ul>
        </div>
        <div className={styles.eduCard}>
          <div className={styles.eduCardHeader}>
            <span className={styles.eduInstitution}>The York School</span>
            <span className={styles.eduYears}>2018 – 2021</span>
          </div>
          <div className={styles.eduDegree}>International Baccalaureate &amp; Ontario Secondary School Diploma</div>
          <div className={styles.eduMeta}>IB Score: 41</div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Awards & Certifications">
        <div className={styles.awardsContainer}>
          <div className={styles.awardItem}>
            <span className={styles.awardYear}>2022–2024</span>
            <span className={styles.awardName}>
              <a
                href="https://artsci.calendar.utoronto.ca/academic-record#deans-list-scholar"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Toronto Dean's List Scholar
              </a>
            </span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardYear}>2024</span>
            <span className={styles.awardName}>
              <a
                href="https://awards.innis.utoronto.ca/award/innis-achievement/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Innis College Exceptional Achievement Award
              </a>
            </span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardYear}>2022–2023</span>
            <span className={styles.awardName}>
              <a
                href="https://awards.innis.utoronto.ca/award/later-life-learning/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Later Life Learning Scholarship
              </a>
            </span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardYear}>2021</span>
            <span className={styles.awardName}>
              <a
                href="https://future.utoronto.ca/finances/awards/university-of-toronto-scholars-program/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Toronto Scholars' Award
              </a>
            </span>
          </div>
          <div className={styles.awardItem}>
            <span className={styles.awardYear}>2021</span>
            <span className={styles.awardName}>
              <a
                href="https://en.wikipedia.org/wiki/Ontario_Scholar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ontario Scholar Award
              </a>
            </span>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default HomePage;
