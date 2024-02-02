import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BotComment from "./components/CommentGenerator";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  return (
    <main className="encourage-me-bot">
      <div className="page-inner">
        <FontAwesomeIcon icon={faFaceSmileBeam} />
        <h1>Encourage Me Bot</h1>
        <BotComment />
      </div>
    </main>
  );
}
