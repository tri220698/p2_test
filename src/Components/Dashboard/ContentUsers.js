import React from 'react';
import avatarImg from '../../img/admin-ui.svg';

const ContentUsers = () => {
  return(
    <React.Fragment>
      <div className="content-dashboard">
        <div className="table-scroll">
          <table className="content-dashboard-table">
            <thead>
              <tr>
                <th>Order Ref</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Jhon Math</td>
                <td>24/12/2018</td>
                <td>pending</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="content-dashboard-profile">
          <div className="content-dashboard-profile-left">
            <div className="content-dashboard-profile-left__infor">
              <h1>John Doe</h1>
              <p>Los Angeles, USA</p>
            </div>
            <div className="content-dashboard-profile-left__avatar"><img src={avatarImg} alt="a" /></div>
          </div>
          <div className="content-dashboard-profile-right">
            <div className="content-dashboard-profile-right__top">
              <h2>Profile</h2>
              <p>The information can be edited</p>
            </div>
            <hr />
            <div className="content-dashboard-profile-right__content">
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >First Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Last Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Genre</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Email</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Phone Number</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Address</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Password</label>
                <div className="bar"></div>
              </div>
              <div className="input-container"><input type="#{type}" id="#{label}" required="required" /><label
                  >Confirm Password</label>
                <div className="bar"></div>
              </div>
            </div>
            <hr />
            <div className="content-dashboard-profile-right__bottom"><button>SAVE DETAILS</button></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContentUsers;