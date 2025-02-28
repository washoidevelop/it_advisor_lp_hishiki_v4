const CircleBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large circle - top left */}
      <div 
        className="absolute -top-20 -left-20 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
      
      {/* Medium circle - top right */}
      <div 
        className="absolute top-10 right-[10%] w-[20vw] h-[20vw] max-w-[150px] max-h-[150px] rounded-full bg-primary/10"
      />

      {/* Large circle - bottom right */}
      <div 
        className="absolute -bottom-40 -right-20 w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/10"
      />
    </div>
  );
};

export default CircleBackground;
