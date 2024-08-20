import {useState,useEffect} from 'react'

export default function GetData() {
        const [users, setUsers] = useState([]);
        const [showData, setShowData] = useState(false);
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
            setShowData(true);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        const toggleDataVisibility = () => {
          setShowData(!showData);
        };
      
        return (
          <div className="container mt-5">
            <button className="btn btn-outline-primary" onClick={showData ? toggleDataVisibility : fetchData} >
              {showData ? 'Hide Data' : 'Show Data'}
            </button>
            {showData && (
              <ul>
                {users.map(user => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            )}
          </div>
        );
      };
   
    //Ameera Sobhy Aly    
