import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

export type OptionsType = {
  label: string;
  value: string;
  id: string;
};

export type DropdownProps = {
  options: OptionsType[];
  selectedValue: string;
  isRequired?: boolean;
  bottomText?: string;
  dropdownLabel?: string;
  onChange: ({ value, id }: { value: string; id: string }) => void;
};

const Dropdown = ({
  options,
  selectedValue,
  isRequired,
  onChange,
  bottomText,
  dropdownLabel,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = ({ value, id }: { value: string; id: string }) => {
    const selectedFormObject = {
      value,
      id,
    };

    onChange(selectedFormObject);

    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-[6px] ">
      <label
        className="my-[.5rem] text-[1.3rem] sm:text-[1.4rem] xl:my-[.7rem]"
        htmlFor="dropdown"
      >
        {dropdownLabel}
        {isRequired && <span className="text-yellow-dark-9">*</span>}
      </label>
      <div
        className={clsx(
          'relative cursor-pointer rounded-[6px] border-ui-mid-white bg-gray-dark-1 px-[1.1rem] py-[.7rem]',
          {
            'border focus:border-ui-medium-blue': isOpen,
            border: !isOpen,
          },
        )}
        onClick={handleIsOpen}
        tabIndex={1}
      >
        {isOpen || (
          <>
            <div className="flex items-center justify-between ">
              <span className="text-[1.3rem] md:text-[1.5rem] xl:text-[1.6rem]">
                {options.find((option) => option.value === selectedValue)
                  ?.label || '-'}
              </span>
              <MdArrowDropDown className="text-ui-mid-white" fontSize={24} />
            </div>
          </>
        )}

        {isOpen && (
          <ul className="rounded-md absolute left-0 right-0 top-0 z-10 mt-2 max-h-[250px] w-full  overflow-scroll bg-gray-dark-1 text-[1.3rem] md:text-[1.5rem]">
            {options.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer px-[1.4rem] py-[.5rem] hover:bg-gray-700"
                onClick={() =>
                  handleSelect({ value: option.value, id: option.id })
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {bottomText && (
        <span className="text-[1.2rem] font-medium text-ui-mid-white md:text-[1.3rem] xl:text-[1.4rem]">
          {bottomText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;