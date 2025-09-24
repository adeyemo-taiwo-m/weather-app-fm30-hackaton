export default function Loader({ size = 4 }) {
  return (
    <img
      src="/images/icon-loading.svg"
      alt="search icon"
      className={`loader-spin w-${size}`}
    />
  );
}
