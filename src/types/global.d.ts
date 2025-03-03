declare function gtag_report_conversion(url?: string): boolean;
declare function gtag_report_conversion_contact(url?: string): boolean;
declare function gtag_report_conversion_cline_contact(url?: string): boolean;

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  gtag_report_conversion?: (url?: string) => boolean;
  gtag_report_conversion_contact?: (url?: string) => boolean;
  gtag_report_conversion_cline_contact?: (url?: string) => boolean;
}

declare function gtag(...args: any[]): void;
