import Button from "./Button";

export default function ApiError() {
  return (
    <div className="flex flex-col text-center gap-6 pt-10">
      <img
        src="/images/icon-error.svg"
        alt="error icon"
        className="mx-auto w-[42px] "
      />
      <p className="text-center text-neutral-0 text-preset-2  font-bold">
        Something went wrong
      </p>
      <p className="text-neutral-200 text-preset-5 font-medium max-w-xl mx-auto">
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <Button
        type="secondary"
        otherStyle={"flex mx-auto  gap-2.5 justify-center"}
      >
        <img src={`/images/icon-retry.svg`} alt={`retry icon`} />
        Try again
      </Button>
    </div>
  );
}
