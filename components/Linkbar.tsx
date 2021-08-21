import React, {FC} from "react";
interface LinkbarProps {
  handleOnChange: any;
}
const Linkbar: FC<LinkbarProps> = ({handleOnChange}) => {
  return (
    <form className="md:hidden bg-inputPlace flex justify-center p-3 w-full">
      <input
        className="bg-input rounded-xl h-9 w-full py-2 text-center text-textInput placeholder-placeholder"
        placeholder="basement.supply"
        type="text"
        onChange={handleOnChange}
      />
    </form>
  );
};

export default Linkbar;
