export default function Button({ text }: { text: string }) {
  return (
    <div className="flex w-full pl-4 mx-auto mt-4">
      <a
        href="https://legitfit.com/authenticate/signup/FarrellFitness"
        className="flex px-6 py-2 ml-auto border-0 rounded bg-primary text-secondary hover:bg-primary-800 focus:outline-none"
      >
        {text}
      </a>
    </div>
  );
}
