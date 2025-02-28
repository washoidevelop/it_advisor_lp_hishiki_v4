"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string, boolean, infer as zodInfer } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Coins, Clock, Shield } from "lucide-react";

const formSchema = object({
  contactName: string().min(1, "お名前を入力してください"),
  email: string().email("正しいメールアドレスを入力してください"),
  privacy: boolean()
    .refine(
      (val) => val === true,
      "プライバシーポリシーに同意する必要があります",
    ),
});

const DownloadForm = () => {
  const navigateWithUtm = useUtmNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<zodInfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      email: "",
      privacy: false,
    },
  });

  async function onSubmit(values: zodInfer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);

      // URLパラメータからutm_sourceを取得
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");

      // utm_sourceがgoogleの場合のみコンバージョントラッキングを実行
      if (utmSource === "google") {
        gtag_report_conversion();
      }

      // GASに送信するデータを準備
      const submitData = {
        contactName: values.contactName,
        email: values.email,
        service:
          utmSource === "google"
            ? "it_advisor_lp_higashi_v8_service_download_google"
            : utmSource === "x"
              ? "it_advisor_lp_higashi_v8_service_download_x"
              : "it_advisor_lp_higashi_v8_service_download",
      };

      // Google App Scriptにデータを送信
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwdYmcPtI7NsTfGH1amn3MQ5yfVbIBn-j39WllkM5WzVT6zepH7X1FB6KBJw8dpVjsSLQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
          mode: "no-cors",
        },
      );

      if (response) {
        // フォームの入力値をリセット
        form.reset();
        
        // 送信完了メッセージを表示
        toast.success("お申し込みありがとうございます。担当者より1営業日以内にご連絡いたします。");
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      const errorMessage =
        error instanceof Error ? error.message : "不明なエラーが発生しました";
      console.error("エラーの詳細:", errorMessage);
      toast.error(
        `送信に失敗しました。時間をおいて再度お試しください。(${errorMessage})`,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-12 md:py-32">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-16 font-['LINESeedJP']">
              <span className="block sm:inline mb-2">無料相談の</span>
              <span className="block sm:inline">お申し込み</span>
            </h2>
            <div className="flex flex-col w-fit mx-auto">
              <ul className="space-y-3 md:space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-bold">相談だけなら無料です！</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-bold">自動化は即日で終わります！</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-bold">効果がなくても返金保証です！</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 md:p-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="inline-flex gap-1 items-center">
                          お名前
                          <span className="bg-primary text-[10px] text-white px-1 py-1 rounded">
                            必須
                          </span>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例：山田 太郎"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="inline-flex gap-1 items-center">
                          メールアドレス
                          <span className="bg-primary text-[10px] text-white px-1 py-1 rounded">
                            必須
                          </span>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例：sample@washoi.co.jp"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          個人情報の取り扱いに同意する（
                          <button
                            className="text-primary underline cursor-pointer"
                            onClick={() => navigateWithUtm("/privacy")}
                          >
                            リンク
                          </button>
                          ）
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="text-center py-8">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="text-lg w-full md:w-auto min-w-[240px] h-[56px] md:h-[60px] rounded-full bg-primary text-white hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "送信中..." : "無料相談を申し込む"}
                  </Button>
                </div>
              </form>
            </Form>
            <p className="text-base md:text-lg leading-relaxed px-4 text-center mt-4">1営業日以内に担当者よりメールで折り返しご連絡いたします。</p>
            <p className="text-xs text-gray-500 mt-8">
              ※本フォームは、弊社サービスをご検討中の法人様を対象としております。誠に恐れ入りますが、個人のお客様や、個人の方からのお問い合わせにはご対応いたしかねますので、何卒ご了承ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
