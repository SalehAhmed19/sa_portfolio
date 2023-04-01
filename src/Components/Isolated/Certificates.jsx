import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Fade } from "react-reveal";
import certificate from "../../assets/certificate.jpeg";

const Certificates = () => {
  const icons = [
    { _id: 1, icon: <FaReact /> },
    { _id: 2, icon: <FaNodeJs /> },
    { _id: 3, icon: <SiExpress /> },
    { _id: 4, icon: <SiMongodb /> },
  ];
  const [layout, setLayout] = React.useState(undefined);
  return (
    <div className="my-20">
      <h3 className="font-bold text-2xl">Certificates</h3>
      <div className="flex w-[170px] mb-5">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <Fade up>
        <div>
          <button
            className="w-full"
            onClick={() => {
              setLayout("center");
            }}
          >
            <div className="border-2 border-[#444444] flex flex-col lg:flex-row rounded-2xl">
              <div className="lg:w-40 bg-[#444444] rounded-l-2xl py-10 p-5">
                <h3 className="font-bold text-center text-[#888888]">
                  MERN Stack
                </h3>
                <div className="flex justify-center">
                  {icons.map((icon) => (
                    <h3
                      key={icon._id}
                      className="font-bold text-[#888888] text-2xl mx-1"
                    >
                      {icon.icon}
                    </h3>
                  ))}
                </div>
              </div>
              <div className="p-10 flex items-center">
                <div>
                  <h3 className="font-bold text-left">
                    Complete Web Development with Jhankar Mahabub
                  </h3>
                  <p className="text-sm text-[#8B8B8B] text-left">
                    Programming Hero
                  </p>
                  <p className="text-xs text-[#8B8B8B] text-left">
                    <span>Student ID: </span>WEB5-1454
                  </p>
                </div>
              </div>
            </div>
          </button>
          <Modal open={!!layout} onClose={() => setLayout(undefined)}>
            <ModalDialog
              aria-labelledby="layout-modal-title"
              aria-describedby="layout-modal-description"
              layout={layout}
            >
              <ModalClose />
              <img src={certificate} alt="" />
            </ModalDialog>
          </Modal>
        </div>
      </Fade>
    </div>
  );
};

export default Certificates;
