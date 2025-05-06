// src/pages/ResearchPage/ResearchPage.js
import React from "react";

const ResearchPage = () => {
  return (
    <div>
      <h1>Hanabi</h1>
      <p>
        <a
          href="https://github.com/UofT-Hanabi-Lab/HanaSim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </p>
      <p>
        During the Summer and Fall semesters of 2024, I worked on a research
        project with two other students on the card game{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Hanabi_(card_game)"
        >
          Hanabi
        </a>
        . I took this project as course credit for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc494h1"
        >
          CSC494/495
        </a>
        , and we all worked under the supervision of Professors Alice Gao and
        Jonathan Calver. During the summer, we initially spent most of our time
        reviewing existing literature related to developing intelligent agents
        for the game. After realizing most of the current simulators were
        out-of-date or not easy to install and use, we decided to create our own
        simulator called HanaSim. In the Fall, we developed our own intelligent
        agent, which was based on an incrementally learning decision tree.
      </p>
      <p>
        Here is the poster that we presented at the U of T Summer Research
        Poster Showcase:
        <div className="center-container">
          {" "}
          <img
            src="/images/Hanabi Research Poster.png"
            alt="Hanabi research poster"
          />
        </div>
      </p>
      <hr />
      <h1>
        <a
          href="https://mmzml.github.io/PakPoll"
          target="_blank"
          rel="noopener noreferrer"
        >
          PakPoll
        </a>
      </h1>
      <p>
        <a
          href="https://github.com/mmzml/PakPoll"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </p>
      <p>
        Inspired by Project538 and{" "}
        <a
          href="https://338canada.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          338Canada
        </a>
        , I developed a website where users can input polling numbers and
        generate a simulated map based on those numbers. The website is
        currently quite simple with limited functionality, but I plan on
        developing it further, as time permits. Possible future paths could
        include adding clickable constituencies to view more details and adding
        a special poll-tracker to show what the current projections are (akin to
        the main functionalities of websites like 338Canada).
      </p>
      <p>
        Here is a screenshot of the website:
        <div className="center-container">
          {" "}
          <img src="/images/PakPoll.png" alt="PakPoll Screenshot" />
        </div>
      </p>
      <hr />
      <h1>Auto-Translate Chat App</h1>
      <p>
        <a
          href="https://github.com/CSC207-2022F-UofT/course-project-translate-chat-program"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </p>
      <p>
        As part of my{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc207h1"
        >
          CSC207: Software Design
        </a>{" "}
        project, I developed (along with a team of 7 people) a chatting app that
        could translate all received messages to the user's preferred language.
        This was my very first software project and also the first time I coded
        in the Java programming language. It taught me how to circumvent the
        challenges of working on such large-scale projects, but also how to reap
        its benefits.
      </p>
      <p>
        Here is a{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/presentation/d/18RFytZTgEIN3Tr_h_kx2dJ0lfDm6BD9UdPULiAetpXc/edit#slide=id.g1ac259d6c06_1_0"
        >
          short slide deck
        </a>{" "}
        outlining the features of the app, and also how we adhered to{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
        >
          Clean Architecture
        </a>
        , and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/SOLID"
        >
          SOLID
        </a>{" "}
        principles.
      </p>
      <hr />
      <h1>Atari Breakout (in assembly)</h1>
      <p>
        Note: The repository for this project is private (for academic honesty)
      </p>
      <p>
        I implemented{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Breakout_(video_game)"
        >
          Atari Breakout
        </a>
        , along with another group member, as a part of the final project in{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://artsci.calendar.utoronto.ca/course/csc258h1"
        >
          CSC258: Computer Organization
        </a>
        . All of the code is in assembly using the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/MIPS_architecture"
        >
          MIPS Architecture
        </a>
        . We added two augmentations to the game:
        <ul>
          <li>
            After breaking 15 bricks, the ball won't change directions when it
            collides with a brick, allowing the user to break multiple bricks in
            one go. This power-up stays for 6 seconds.
          </li>
          <li>
            There are two paddles on the screen, with the first being controlled
            by the "a" (left) and "d" (right) keys, and the second being
            controlled by the "j" (left) and "l" (right) keys.
          </li>
        </ul>
        A video of two games is shown below. <br />
        <div className="center-container">
          {" "}
          <video controls>
            <source src="/videos/Breakout demo.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </p>
    </div>
  );
};

export default ResearchPage;
