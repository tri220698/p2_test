import React from 'react'
import { useTranslation } from 'react-i18next';


const UserForm = (props) => {

  const {user,submitHandler,handleChange,setConfirm,confirm} = props
  const { t } = useTranslation();


  return (
    <React.Fragment>
      <form action="" onSubmit={submitHandler} className="modal-box-content-form-right -form">
        <div className="modal-box-content-form-right__top">
          <h2>{t('user.1')}</h2>
          <p>{t('user.2')}</p>
        </div>
        <hr />
        <div className="modal-box-content-form-right__content">
          <div className="input-container"><input type="text" required="required" value={user.name} name="name" onChange={handleChange} /><label >Name</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.phone} name="phone" onChange={handleChange} /><label >Phone Number</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.mail} name="mail" onChange={handleChange} /><label >Email</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.addrres} name="addrres" onChange={handleChange} /><label >Address</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="password" required="required" value={user.password} name="password" onChange={handleChange} /><label >Password</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="password" required="required" value={confirm} name="confirm" onChange={(e) => setConfirm(e.target.value)} /><label >Confirm Password</label>
            <div className="bar"></div>
          </div>
        </div>
        <hr />
        <div className="modal-box-content-form-right__bottom"><input type="submit" onSubmit={submitHandler} value="SAVE DETAILS"></input></div>
      </form>
    </React.Fragment>
  )

}

export default UserForm