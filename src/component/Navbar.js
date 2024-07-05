import './Navbar.css';


const Navbar = ({ fetchUsers }) => {
  return (
    <div className='Navbar'>
      <nav className='navbar'>
        <article className='navart'>
          <section className='navsec1'>
            <h1>SC</h1>
          </section>
          <section className='navsec2'>
          <button onClick={fetchUsers}>Get Users</button>

          </section>
          
        </article>
      </nav>

    </div>
  );
};

export default Navbar;
