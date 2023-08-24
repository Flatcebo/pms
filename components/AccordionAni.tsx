import { useState } from "react";

interface AccordionAniProps {
  props: {
    title: string;
    text: string;
  };
}

export default function AccordionAni({ props }: AccordionAniProps) {
  const [open, setOpen] = useState(false);

  const { title, text } = props;

  let togglehandler = (e: React.FormEvent<HTMLInputElement>) => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <i></i>
      </div>
      <p className="">{text}</p>
    </div>
  );
}
