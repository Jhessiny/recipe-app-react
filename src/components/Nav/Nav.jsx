const Nav = (props) => {
  return (
    <header>
      <form action="" className="search-form" onSubmit={props.getSearch}>
        <input
          className="search-bar"
          type="text"
          value={props.search}
          onChange={props.changeSearch}
        />
        <button className="search-button" type="sumbit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Nav;
