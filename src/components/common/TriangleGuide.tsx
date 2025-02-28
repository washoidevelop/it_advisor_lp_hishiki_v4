interface TriangleGuideProps {
  width?: number;
  height?: number;
}

const TriangleGuide = ({ 
  width = 100, 
  height = 50 
}: TriangleGuideProps) => {
  return (
    <div 
      className="relative"
      style={{ 
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(29, 113, 162, 0.3))'
        }}
      />
    </div>
  );
};

export default TriangleGuide;
