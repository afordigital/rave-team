import { ui, type SupportedLang } from "./ui";

export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as SupportedLang;
  return "en";
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: keyof typeof ui.en): string | string[] {
    return ui[lang][key] ?? ui.en[key];
  };
}
