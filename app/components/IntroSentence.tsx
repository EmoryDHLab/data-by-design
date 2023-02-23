interface Props {
  letter: string;
  sentence: string;
}

export default function IntroSentence({ letter, sentence }: Props) {
  return (
    <>
      <p className="first-paragraph m-0 font-dubois">{letter}</p>
      <span className="font-dubois">{sentence}</span>
    </>
  );
}
