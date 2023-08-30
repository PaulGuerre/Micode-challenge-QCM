import fs from "fs";
import path from "path";

export default function QuestionsExtractor() {
    const questions = JSON.parse(fs.readFileSync(path.join(process.cwd(), "questions.json"), "utf8"));
    
    return questions.map(question => {
        return {
            question: question.question,
            answers: question.answers,
            correctAnswer: question.correctAnswer
        }
    });
}

    