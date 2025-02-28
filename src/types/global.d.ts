declare function gtag_report_conversion(url?: string): boolean;

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare function gtag(...args: any[]): void;
