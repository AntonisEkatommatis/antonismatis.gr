import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({
  requestLocale
}) => {
  // Αυτό συνήθως αντιστοιχεί στο τμήμα `[locale]`
  let locale = await requestLocale;
  
  // Βεβαιωθείτε ότι το εισερχόμενο locale είναι έγκυρο
  if (!locale || !['el', 'en'].includes(locale)) {
    locale = 'el'; // Προεπιλεγμένη γλώσσα
  }
  
  return {
    locale,
    messages: (await import(`../src/messages/${locale}/index.json`)).default
  };
}); 