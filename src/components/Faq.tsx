import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4"> Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does BGNix work? Why is it free and privacy preserving?</AccordionTrigger>
          <AccordionContent>
            It uses the <a href="https://huggingface.co/docs/transformers/index" target="_blank" className="text-blue-500">Transformers.js</a> library to generate images.
            All images are generated on your browser, that means no images are sent to the server and no images are stored on the server.
            That means you can use it for free and it is privacy preserving.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why are some images not getting good results after background removal?</AccordionTrigger>
          <AccordionContent>
            Background removal is a very challenging task due to the complexity of backgrounds and similarity between foreground and background, which can lead to less than ideal results.
            Here are some tips to get better results:
            <br/>
            1. Use images with solid color or simple backgrounds
            <br/>
            2. Use images where there's high contrast between foreground and background
            <br/>
            3. Or try using more advanced background removal models, though these may require more computing power than your device has. In that case, you may need to use cloud services - you can try my other AI product <a href="https://www.comflowy.com" target="_blank" className="text-blue-500">Comflowy</a>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
