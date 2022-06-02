import { useAtom } from "jotai";
import { filterAtom } from "../lib/atoms";

export default function InputFilter() {
  // useAtom hook to create a state of filterInput using filterAtom
  const [filter, filterSet] = useAtom(filterAtom);
  
  return (
    <form>
      <label>Enter Pokemon name:</label>
      <input
        className="input-box"
        value={filter}
        onChange={(event) => filterSet(event.target.value)}
      />
    </form>
  );
}