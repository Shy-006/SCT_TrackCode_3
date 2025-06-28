const questions = [
    {
      id: 1,
      type: "single", // "multi" or "fill"
      question: "Which is a JavaScript framework?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: ["React"],
    },
    {
      id: 2,
      type: "multi",
      question: "Select frontend technologies:",
      options: ["Vue", "Node.js", "HTML", "MongoDB"],
      answer: ["Vue", "HTML"],
    },
    {
      id: 3,
      type: "fill",
      question: "_____ is known as the backbone of the web.",
      answer: "HTML",
    }
  ];
  export default questions;
  