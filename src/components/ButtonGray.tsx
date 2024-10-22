import Text from '@components/Text';

interface Props {
  className?: string;
  border?: string;
  onClick?: () => void;
}

const ButtonGray: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={`${props.border} inline-block w-full rounded-12 bg-gray-dark-4 px-32 py-16 hover:bg-gray-dark-5 sm:w-fit`}
      onClick={onClick}
    >
      <Text
        as="span"
        style="btn-l"
        className={`text-gray-dark-11 ${className}`}
      >
        {props.children}
      </Text>
    </button>
  );
};

export default ButtonGray;
