import React, {useState} from 'react';
import avatarUser from '../../img/admin-ui.svg';
import { useTranslation } from 'react-i18next';
import { updateUser } from '../../database/db';

function hideModal() {
  document.querySelector('.modal-box').style.transform = 'scale(0)';
  document.querySelector('.modal-box').style.zIndex = 0;
  document.querySelector('.modal-box').style.opacity = 0;
}

const checkPhone = (phone) => {
  Boolean = true
  for (let index in phone) {
    let a = parseInt(phone[index])
    if (isNaN(a)) {
      Boolean = false;
      break;
    }
  }
  return Boolean
}

const ModalBox = (props) => {
  const { t } = useTranslation();
  const [user, setUser] = useState(props.user)
  const [confirm, setConfirm] = useState(props.user.password);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkPhone(user.phone)) {
      alert(t('register.warning.phone'))
    }
    else if (user.password !== confirm) {
      alert(t('register.warning.confirmPass'))
    }
    else {
      const update = await updateUser(user)
      sessionStorage.setItem('userData', JSON.stringify(user))
      alert(t('register.warning.success'))
    }
  }

  return (
    <React.Fragment>
      <div className="modal-box">
        <div className="modal-box__background" onClick={hideModal}></div>
        <div className="modal-box-content"><span className="modal-box-content__close" onClick={hideModal}>X</span>
            <div className="modal-box-content-form">
                <div className="modal-box-content-form-left">
                    <div className="modal-box-content-form-left__infor">
                        <h2>{user.name}</h2>
                        <p>{user.addrres}</p>
                    </div>
                    <div className="modal-box-content-form-left__avatar"><img src={avatarUser} alt="a" /></div>
                </div>
                <form action="" onSubmit={submitHandler} className="modal-box-content-form-right">
                    <div className="modal-box-content-form-right__top">
                        <h2>Profile</h2>
                        <p>The information can be edited</p>
                    </div>
                    <hr/>
                    <div className="modal-box-content-form-right__content">
                        <div className="input-container"><input type="text" required="required" value={user.name} name="name" onChange={handleChange}/><label >Name</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container"><input type="text" required="required" value={user.phone} name="phone" onChange={handleChange}/><label >Phone Number</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container"><input type="text" required="required" value={user.mail} name="mail" onChange={handleChange}/><label >Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container"><input type="text" required="required" value={user.addrres} name="addrres" onChange={handleChange}/><label >Address</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container"><input type="password" required="required" value={user.password} name="password" onChange={handleChange}/><label >Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container"><input type="password" required="required" value={confirm} name="confirm" onChange={(e) => setConfirm(e.target.value)}/><label >Confirm Password</label>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="modal-box-content-form-right__bottom"><input type="submit" onSubmit={submitHandler} value="SAVE DETAILS"></input></div>
                </form>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default ModalBox;