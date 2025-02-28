const CircleBackgroundAlt1 = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large circle - top right */}
      <div 
        className="absolute -top-60 -right-20 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
      
      {/* Medium circle - bottom left */}
      <div 
        className="absolute bottom-10 left-[10%] w-[20vw] h-[20vw] max-w-[150px] max-h-[150px] rounded-full bg-primary/10"
      />

      {/* Large circle - top left */}
      <div 
        className="absolute -top-0 -left-20 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
    </div>
  );
};

export default CircleBackgroundAlt1;
