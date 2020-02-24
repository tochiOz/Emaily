import axios from 'axios';
import { FETCH_USER } from './type';

const fetchUser = () => {
	axios.get('/api/current/user');
};
