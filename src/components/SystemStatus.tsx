import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const SystemStatus = () => {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg shadow-md border-collapse border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-white-800">
        System Status
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="system-a"
          className="bg-gray-50 border-collapse mb-2"
        >
          <AccordionTrigger className="text-sm font-normal text-cloud-muted py-2 px-4  bg-cloud-background shadow-sm hover:bg-cloud-primary transition-all">
            System A
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <p>Status: Operational</p>
            <p>Last checked: 5 minutes ago</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="system-b"
          className="bg-gray-50 border-collapse mb-2"
        >
          <AccordionTrigger className="text-sm font-normal text-cloud-muted py-2 px-4  bg-cloud-background shadow-sm hover:bg-cloud-primary transition-all">
            System B
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <p>Status: Operational</p>
            <p>Last checked: 5 minutes ago</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="system-c"
          className="bg-gray-50 border-collapse mb-2"
        >
          <AccordionTrigger className="text-sm font-normal text-cloud-muted py-2 px-4  bg-cloud-background shadow-sm hover:bg-cloud-primary  transition-all">
            System C
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <p>Status: Operational</p>
            <p>Last checked: 5 minutes ago</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SystemStatus;
