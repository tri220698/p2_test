import React, {useState, useEffect} from 'react';
import avatarUser from '../../img/admin-ui.svg';
import { useTranslation } from 'react-i18next';
import { updateUser, getCartsByUser } from '../../database/db';
import {getUserData} from '../../action/action'
import { useDispatch } from 'react-redux';
import { TotalMoney, formatter, formatDate } from '../mixin/mixin';
import Row from './Row';

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
  const [carts, setCarts] = useState([])
  const [confirm, setConfirm] = useState(props.user.password);
  const dispatch = useDispatch();
  let checkTab = true;

  useEffect(() => {
    const GetCarts = async () => {
      const allCarts = await getCartsByUser(user.username);
      setCarts(allCarts)
    }
    GetCarts();
  },[dispatch])

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
      dispatch(getUserData(user))
      sessionStorage.setItem('userData', JSON.stringify(user))
      alert(t('register.warning.success'))
    }
  }

  const switchTab = (bool) => {
    checkTab = bool;
    if(checkTab) {
      document.querySelector('.-form').style.display = "block";
      document.querySelector('.-table').style.display = "none";
      document.querySelector('.modal-box-content-form-left-block__tab:nth-child(1)').classList.add('-active');
      document.querySelector('.modal-box-content-form-left-block__tab:nth-child(2)').classList.remove('-active');
    }else {
      document.querySelector('.-form').style.display = "none";
      document.querySelector('.-table').style.display = "table";
      document.querySelector('.modal-box-content-form-left-block__tab:nth-child(1)').classList.remove('-active');
      document.querySelector('.modal-box-content-form-left-block__tab:nth-child(2)').classList.add('-active');
    }
  }

  return (
    <React.Fragment>
      <div className="modal-box">
        <div className="modal-box__background" onClick={hideModal}></div>
        <div className="modal-box-content"><span className="modal-box-content__close" onClick={hideModal}>X</span>
            <div className="modal-box-content-form">
                <div className="modal-box-content-form-left">
                  <div className="modal-box-content-form-left-block">
                    <div className="modal-box-content-form-left-block__infor">
                        <h2>{user.name}</h2>
                        <p>{user.addrres}</p>
                    </div>
                    <div className="modal-box-content-form-left-block__avatar"><img src={avatarUser} alt="a" /></div>
                  </div>
                  <div className="modal-box-content-form-left-block">
                    <p className="modal-box-content-form-left-block__tab -active" onClick={() => switchTab(true)}>{t('user.1')}</p>
                    <p className="modal-box-content-form-left-block__tab" onClick={() => switchTab(false)}>{t('user.3')}</p>
                  </div>
                </div>
                <table className="modal-box-content-form-right -table">
                  <thead>
                    <tr>
                      <th>{t('user.stt')}</th>
                      <th>{t('user.date')}</th>
                      <th>{t('user.total')}</th>
                      <th>{t('user.status')}</th>
                    </tr>
                    {
                      carts.map((e,i) => {
                        let date = new Date();
                        date.setTime(e.timeOrder);
                        return (
                          <Row element={e} date={formatDate(date)}></Row>
                        )
                      })
                    }
                  </thead>
                </table>
                <form action="" onSubmit={submitHandler} className="modal-box-content-form-right -form">
                    <div className="modal-box-content-form-right__top">
                        <h2>{t('user.1')}</h2>
                        <p>{t('user.2')}</p>
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