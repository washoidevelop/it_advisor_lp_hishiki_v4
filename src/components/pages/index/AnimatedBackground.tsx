interface CircleItem {
  iconSrc: string;
  iconAlt: string;
}

interface RowConfig {
  items: CircleItem[];
  direction: 'leftToRight' | 'rightToLeft';
}

const defaultItems: CircleItem[][] = [
  // 1行目
  [
    { iconSrc: '/images/AnimatedBackground1/1.png', iconAlt: 'Background image 1' },
    { iconSrc: '/images/AnimatedBackground1/2.png', iconAlt: 'Background image 2' },
    { iconSrc: '/images/AnimatedBackground1/3.png', iconAlt: 'Background image 3' },
  ],
  // 2行目
  [
    { iconSrc: '/images/AnimatedBackground2/5.png', iconAlt: 'Background image 5' },
    { iconSrc: '/images/AnimatedBackground2/6.png', iconAlt: 'Background image 6' },
    { iconSrc: '/images/AnimatedBackground2/7.png', iconAlt: 'Background image 7' },
    { iconSrc: '/images/AnimatedBackground2/8.png', iconAlt: 'Background image 8' },
    { iconSrc: '/images/AnimatedBackground2/9.png', iconAlt: 'Background image 9' },
    { iconSrc: '/images/AnimatedBackground2/10.png', iconAlt: 'Background image 10' },
    { iconSrc: '/images/AnimatedBackground2/11.png', iconAlt: 'Background image 11' },
  ],
  // 3行目
  [
    { iconSrc: '/images/AnimatedBackground3/13.png', iconAlt: 'Background image 13' },
    { iconSrc: '/images/AnimatedBackground3/14.png', iconAlt: 'Background image 14' },
    { iconSrc: '/images/AnimatedBackground3/15.png', iconAlt: 'Background image 15' },
    { iconSrc: '/images/AnimatedBackground3/16.png', iconAlt: 'Background image 16' },
  ],
];

const defaultRows: RowConfig[] = [
  { items: defaultItems[0], direction: 'leftToRight' },
  { items: defaultItems[1], direction: 'rightToLeft' },
  { items: defaultItems[2], direction: 'leftToRight' },
];

interface AnimatedBackgroundProps {
  rows?: RowConfig[];
}

const AnimatedRow = ({ items, direction }: RowConfig) => {
  const animationClass = direction === 'leftToRight' ? 'animate-slideLeft' : 'animate-slideRight';
  
  return (
    <div className="relative w-full overflow-hidden mt-6 sm:mt-0">
      <div className={`flex md:gap-8 ${animationClass}`}>
        {/* 10セット分のアイテムを表示 */}
        {[...Array(10)].map((_, setIndex) => (
          <div key={`set-${setIndex}`} className="flex md:gap-8">
            {items.map((item, i) => (
              <div key={`set-${setIndex}-${i}`} className="flex flex-col items-center w-28 h-24 md:w-28 md:h-24">
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  className="h-32 w-auto md:h-40 object-contain opacity-70"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedBackground = ({ rows = defaultRows }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center">
      {rows.map((row, index) => (
        <div key={`row-${index}`} className={`${index > 0 ? 'mt-8 md:mt-24' : ''} overflow-hidden`}>
          <AnimatedRow items={row.items} direction={row.direction} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
