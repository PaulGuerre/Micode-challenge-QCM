import Qcm from './client/qcm';
import QuestionsExtractor from './utils/questionsExtractor'

export default function Home() {
  const questions = QuestionsExtractor();

  return (
    <main className='main'>
      <h1 className='main-title'>Testez votre niveau en IT !</h1>

      <Qcm questions={questions} />
    </main>
  )
}
