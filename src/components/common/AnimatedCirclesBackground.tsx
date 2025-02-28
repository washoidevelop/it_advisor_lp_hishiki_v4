interface CircleItem {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

interface RowConfig {
  items: CircleItem[];
  direction: 'leftToRight' | 'rightToLeft';
}

const defaultItems: CircleItem[][] = [
  // 1行目
  [
    { iconSrc: '/images/image.svg', iconAlt: 'Document icon 1', text: '画像AI' },
    { iconSrc: '/images/translate.svg', iconAlt: 'Document icon 2', text: '翻訳AI' },
    { iconSrc: '/images/youtube-logo.svg', iconAlt: 'Document icon 3', text: '動画AI' },
    { iconSrc: '/images/envelope-simple.svg', iconAlt: 'Document icon 4', text: 'メールAI' },
    { iconSrc: '/images/file-doc.svg', iconAlt: 'Document icon 5', text: '議事録AI' },
  ],
  // 2行目
  [
    { iconSrc: '/images/graduation-cap.svg', iconAlt: 'Document icon 6', text: '文章校正AI' },
    { iconSrc: '/images/code.svg', iconAlt: 'Document icon 7', text: 'コードAI' },
    { iconSrc: '/images/megaphone.svg', iconAlt: 'Document icon 8', text: '広告AI' },
    { iconSrc: '/images/lightbulb.svg', iconAlt: 'Document icon 9', text: 'アイデアAI' },
    { iconSrc: '/images/student.svg', iconAlt: 'Document icon 10', text: 'リサーチAI' },
  ],
  // 3行目
  [
    { iconSrc: '/images/book-open-text.svg', iconAlt: 'Document icon 11', text: '報告書AI' },
    { iconSrc: '/images/chart-line.svg', iconAlt: 'Document icon 12', text: 'データ分析AI' },
    { iconSrc: '/images/microsoft-word-logo.svg', iconAlt: 'Document icon 13', text: 'ワードAI' },
    { iconSrc: '/images/microsoft-excel-logo.svg', iconAlt: 'Document icon 14', text: 'エクセルAI' },
    { iconSrc: '/images/microsoft-powerpoint-logo.svg', iconAlt: 'Document icon 15', text: 'パワポAI' },
  ],
];

const defaultRows: RowConfig[] = [
  { items: defaultItems[0], direction: 'leftToRight' },
  { items: defaultItems[1], direction: 'rightToLeft' },
  { items: defaultItems[2], direction: 'leftToRight' },
];

interface AnimatedCirclesBackgroundProps {
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
              <div key={`set-${setIndex}-${i}`} className="flex flex-col items-center w-20 h-24 md:w-24 md:h-24">
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  className="w-8 h-8 md:w-12 md:h-12 opacity-70"
                />
                <span className="text-xs text-primary/80 font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedCirclesBackground = ({ rows = defaultRows }: AnimatedCirclesBackgroundProps) => {
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

export default AnimatedCirclesBackground;
