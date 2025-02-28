const CircleBackgroundAlt2 = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large circle - bottom center */}
      <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
      
      {/* Medium circle - top left */}
      <div 
        className="absolute top-10 left-[10%] w-[20vw] h-[20vw] max-w-[150px] max-h-[150px] rounded-full bg-primary/10"
      />

      {/* Large circle - top right */}
      <div 
        className="absolute -top-40 -right-20 w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
    </div>
  );
};

export default CircleBackgroundAlt2;
