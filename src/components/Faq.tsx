import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

export const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">{t('faqTitle')}</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('faqQuestion1')}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{
              __html: t('faqAnswer1').replace(
                '<a>',
                '<a href="https://huggingface.co/docs/transformers/index" target="_blank" class="text-blue-500">'
              )
            }} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('faqQuestion2')}</AccordionTrigger>
          <AccordionContent>
            {t('faqAnswer2')}
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>{t('faqTips.tip1')}</li>
              <li>{t('faqTips.tip2')}</li>
              <li>
                <div dangerouslySetInnerHTML={{
                  __html: t('faqTips.tip3').replace(
                    '<a>',
                    '<a href="https://www.comflowy.com" target="_blank" class="text-blue-500">'
                  )
                }} />
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('faqQuestion3')}</AccordionTrigger>
          <AccordionContent>
            {t('faqAnswer3')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t('faqQuestion4')}</AccordionTrigger>
          <AccordionContent>
            {t('faqAnswer4')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t('faqQuestion5')}</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>{t('faqAnswer5.step1')}</li>
              <li>{t('faqAnswer5.step2')}</li>
              <li>{t('faqAnswer5.step3')}</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>{t('faqQuestion6')}</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>{t('faqAnswer6.answer1')}</li>
              <li>{t('faqAnswer6.answer2')}</li>
              <li>{t('faqAnswer6.answer3')}</li>
              <li>{t('faqAnswer6.answer4')}</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
