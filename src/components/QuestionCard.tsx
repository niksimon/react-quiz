import React from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {
  return (
    <div>
      <p className="">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, idx) => {
          let className = "answer";
          if (userAnswer && answer === userAnswer.answer) {
            className = "answer incorrect";
          }
          if (userAnswer && answer === userAnswer.correctAnswer) {
            className = "answer correct";
          }
          return (
            <div key={idx}>
              <button className={className} disabled={Boolean(userAnswer)} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
