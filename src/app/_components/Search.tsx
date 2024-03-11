import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <section className="w-full pl-0 lg:pl-[50px] lg:items-center lg:flex">
      <div>
        <Input
          className="outline-none h-[40px] bg-[url('/ic_search_grey@3x.webp')] bg-[1.25rem_center] bg-no-repeat bg-[length:14px] pl-14 focus:shadow-none bg-[var(--bg-input)] focus:outline-none lg:w-[356px] border-none rounded-3xl h-10"
          type="text"
          placeholder="Search"
        />
        <div id="react-autowhatever-search-input" className=""></div>
      </div>
    </section>
  );
};

export default Search;
