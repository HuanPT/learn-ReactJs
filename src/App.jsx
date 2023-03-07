import { useState } from "react";
import Accordion from "./Component/Accordion/Accordion";
import Modal from "./Component/Modal/Modal";
import Button from "./Component/Button/Button";
import Tab from "./Component/Tabs/Tab";
import Toast from "./Component/Toast/Toast";
import OffCanvas from "./Component/Offcanvas/OffCanvas";

function App() {
  const [open, setOpen] = useState(false);
  const [openShow, setShow] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);

  const items = [
    {
      title: "Home",
      content: "Home content",
    },
    {
      title: "Profile",
      content: "Profile content",
    },
    {
      title: "Contact",
      content: "Contact content",
    },
  ];

  return (
    <div className="App" style={{ marginBottom: 60 }}>
      <div style={{ marginBottom: 30 }}>
        <h1>OffCanvas</h1>
        <OffCanvas
          openCanvas={openCanvas}
          onClose={() => setOpenCanvas(false)}
        />
        <Button onClick={() => setOpenCanvas(!openCanvas)}>
          {"Toggle left Canvas"}
        </Button>
      </div>
      <Accordion items={items} />
      <div>
        <h1>TABS</h1>
        <Tab items={items} />
      </div>
      {/* {open && <Modal onClose={() => setOpen(!open)} />} */}
      <div>
        <Modal open={open} onClose={() => setOpen(!open)} />
        <Button onClick={() => setOpen(!open)}>{"Launch Demo Modal"}</Button>
      </div>

      <div>
        <h1>Toast</h1>
        <Toast openShow={openShow} onClose={() => setShow(!openShow)} />
        <Button onClick={() => setShow(!openShow)}>
          {"Show Toast Message"}
        </Button>
      </div>
    </div>
  );
}

export default App;
