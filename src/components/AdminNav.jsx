import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear(); // Clear the session
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav className="navbar navbar-expand-lg bg-tertiary">
              <div className="container-fluid">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/016/743/105/non_2x/leaf-trash-map-pin-shape-concept-logo-design-icon-trash-logo-template-vector.jpg" 
                  alt="Logo" 
                  width="140" 
                  height="140" 
                  className="d-inline-block align-text-top"
                />
                
                <a href="/adminhome" className="btn btn-info">ADMIN DASHBOARD</a>
                
                <button className="btn btn-danger ms-2" onClick={handleLogout}>LOGOUT</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
