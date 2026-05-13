import React, { useEffect } from "react";

interface ExpandProps {
  title: string;
  children: React.ReactNode;
}

const Expand = (props: ExpandProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [iconClass, setIconClass] = React.useState<string>("");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      setIconClass("bi bi-box-arrow-in-up");
    } else {
      setIconClass("bi bi-box-arrow-in-down");
    }
  }, [expanded]);

  return (
    <div>
      <h2>
        {props.title}
        <span className={iconClass} onClick={toggleExpanded}></span>
      </h2>
      <div>{expanded && props.children}</div>
    </div>
  );
};

export default Expand;
