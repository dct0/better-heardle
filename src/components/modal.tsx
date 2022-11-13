import type { ReactNode, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  visible: boolean;
  toggle: () => void;
  title?: string;
  children?: ReactNode;
  divRef: RefObject<HTMLDivElement>;
}

const Modal = ({ visible, toggle, title, children, divRef }: ModalProps) =>
  visible
    ? createPortal(
        <>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-screen h-screen z-30 bg-slate-500 opacity-50"
            onClick={toggle}
          />
          {/* Wrapper */}
          <div
            className="fixed top-0 left-0 w-full h-full z-40 overflow-x-hidden overflow-y-auto outline-none"
            tabIndex={-1}
          >
            {/* Modal */}

            <div
              className="border rounded-lg relative z-50 bg-white space-y-4 w-5/6 h-5/6 p-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
            "
              ref={divRef}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-3xl">{title}</span>
                <FaTimes
                  className="cursor-pointer text-red-500 m-2"
                  size="2rem"
                  onClick={toggle}
                />
              </div>
              {/* Separator */}
              <div className="w-full border border-b border-slate-300" />
              {/* Body */}
              <div className="">{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
