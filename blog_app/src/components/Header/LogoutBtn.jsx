import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/store'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        authService.logout()
       .then(() => {
            dispatch(logout())
        })
    }
    
    return(
        <>
            <button>LogOut</button>
        </>
    )
}

export default LogoutBtn;