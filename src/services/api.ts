import axios from 'axios';

export const fetchDashboardData = async () => {
  const response = await axios.get('/dashboardData.json');
  console.log(response.data)
  return response.data;

};
