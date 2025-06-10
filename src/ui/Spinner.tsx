type SpinnerProps = {
  borderColor: string;
};
export const Spinner: React.FC<SpinnerProps> = ({ borderColor }) => {
  return (
    <div
      className={`w-8 h-8 border-4 border-t-transparent ${borderColor} rounded-full animate-spin mt-9`}
    ></div>
  );
};
