interface LaurierTitleProps {
  text: string;
  subheading: string;
}

const LaurierTitle = ({ text, subheading }: LaurierTitleProps) => {
  return (
    <div className="flex items-center justify-center gap-1 md:gap-4 py-8">
      <img
        src="/images/laurier_left.png"
        alt=""
        className="w-6 md:w-6 h-auto"
      />
      <div className="text-center">
        <h3 className="text-xs md:text-base font-medium text-black">{subheading}</h3>
        <h2 className="text-xl md:text-3xl font-bold text-black">{text}</h2>
      </div>
      <img
        src="/images/laurier_right.png"
        alt=""
        className="w-6 md:w-6 h-auto"
      />
    </div>
  );
};

export default LaurierTitle;
