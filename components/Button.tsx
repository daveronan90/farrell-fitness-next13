export default function Button({ text }: { text: string }) {
  return (
    <div className="mx-auto mt-4 flex w-full pl-4">
      <a
        href="https://legitfit.com/authenticate/signup/FarrellFitness"
        className="ml-auto flex rounded border-0 bg-primary px-6 py-2 text-secondary hover:bg-primary-800 focus:outline-none"
      >
        {text}
      </a>
    </div>
  );
}
