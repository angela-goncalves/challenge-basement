export default function Linkbar() {
  const handleOnChange = (e: any) => {
    const inputBar = e.target.value;

    console.log(e.target.value);
    fetch("product/mock.json").then((data) => console.log(data));
  };

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
}
