function Navbar() {
    return ( 
    <>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <h3 className="text-light pe-5">Student Details</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
        <a class="nav-link active text-light" href="/adding/">Add student</a>
      </div>
    </div>
  </div>
</nav>
    </> 
    );
}

export default Navbar;