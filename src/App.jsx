import './App.css'
import Header from './components/Header';
import SubHeader from './components/Sub-header';
import Home from './pages/home';
import Trips from './pages/Trips';
import Wishlists from './pages/Wishlists';
import PropertyDetails from './pages/PropertyDetails';
import Footer from './components/Footer';
import DropdownMenu from './components/Dropdown-menu';
import FilterModal from './components/Filter-modal';
import LoginModal from './components/Login-modal';
import { db, auth } from './services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
//import { initializeDatabase } from './data/data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useScroll } from 'framer-motion';

function App() {
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [bookingsData, setBookingsData] = useState([]);
  const [wishlistsData, setWishlistsData] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userWishlists, setUserWishlists] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterModal, setFilterModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  const { scrollY } = useScroll();
  
  // Initialize database
  // const handleInitializeDB = async () => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     await initializeDatabase();
  //     console.log('Database initialized successfully');
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // Fetch properties data from Firebase when the component mounts
  useEffect(() => {
      const fetchProperties = async () => {
          const querySnapshot = await getDocs(collection(db, 'properties'));
          const propertiesData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }));
          setProperties(propertiesData);
      }
      fetchProperties();
  }, []);

  // Initialize filteredProperties with the same value as properties
  useEffect(() => {
    if (properties.length > 0) {
        setFilteredProperties(properties);
    }
  }, [properties]);

  // Filter properties when the user selects a specific category
  useEffect(() => {
    const newFilteredProperties = properties.filter((property) => {
      return property.propertyType === selectedCategory;
    });
    setFilteredProperties(newFilteredProperties);
  },[selectedCategory]);
  
  const onCategoryChange = (value) => {
    const selectedCategory = value;
    console.log(selectedCategory);
    setSelectedCategory(selectedCategory);
  }

  // When a user logged in
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("user is logged in");
        
        // Get all user data
        const userQuerySnapshot = await getDocs(collection(db, 'users'));
        const usersData = userQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setUsersData(usersData);

        // Get all bookings data
        const bookingsQuerySnapshot = await getDocs(collection(db, 'bookings'));
        const bookingsData = bookingsQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
      }));
        setBookingsData(bookingsData);

        // Get all wishlists data
        const wishlistsQuerySnapshot = await getDocs(collection(db, 'wishlists'));
        const wishlistsData = wishlistsQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setWishlistsData(wishlistsData);
        
        // Get current login user data
        let user = auth.currentUser;
        let emailToFind = user.email;
        let getCurrentUser = usersData.find((data) => data.email === emailToFind);
        setCurrentUser(getCurrentUser);

        // Toggle user is logged in/out true
        setIsUserLogin(!isUserLogin);
      } else {
        console.log("user is logged out");
        // Toggle user is logged in/out false
        setIsUserLogin(isUserLogin);
      }
    }); 
  },[])

  // When currentUser data is set find other current user related data
  useEffect(() => {
      let idToFind = currentUser.id;

      bookingsData.map((data) => {
        data.guestId === idToFind && setUserBookings(data);
      })

      wishlistsData.map((data) => {
        data.id === idToFind && setUserWishlists(data);
      })

  },[currentUser, bookingsData, wishlistsData])

  // Toggle functions
  function toggleFilterModal() {
    setFilterModal(!filterModal);
  }

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  function toggleLoginModal(val) {
    setLoginModal(val);
  }
  
  return (
    <Router>
      <section className='sticky top-0 z-20 bg-white'>
        <Header 
          isUserLogin={isUserLogin}
          currentUser={currentUser}
          properties={properties}
          toggleDropdown={toggleDropdown}
          scrollY={scrollY}
        />
        {dropdown && <DropdownMenu 
                            isUserLogin={isUserLogin}
                            toggleLoginModal={toggleLoginModal}
                            toggleDropdown={toggleDropdown}
                           />
        }
        {loginModal ? <LoginModal 
                          email={email} 
                          setEmail={setEmail}
                          password={password} 
                          setPassword={setPassword}
                          toggleLoginModal={toggleLoginModal}
                          toggleDropdown={toggleDropdown}
                        /> : ""
        }
        {currentPath === "/trips" || currentPath === '/wishlists' || currentPath.match(/^\/property\d{1,3}$/) ? "" :
          <SubHeader 
            properties={properties} 
            onCategoryChange={onCategoryChange} 
            toggleFilterModal={toggleFilterModal} 
            scrollY={scrollY}
          />
        }
      </section>
      <main className="px-[3rem]">
        <Routes>
          <Route path="/" element={<Home 
                                    properties={filteredProperties} 
                                    filterModal={filterModal} 
                                    loginModal={loginModal}
                                    setCurrentPath={setCurrentPath}
                                  />}
          />
          <Route path="/:id" element={<PropertyDetails properties={properties}
                                                      setCurrentPath={setCurrentPath}
          />}
          />
          <Route path="/trips" element={<Trips
                                          properties={properties} 
                                          userBookings={userBookings}
                                          setCurrentPath={setCurrentPath}
                                                    />}
          />
          <Route path="/wishlists" element={<Wishlists
                                          properties={properties} 
                                          userWishlists={userWishlists}
                                          setCurrentPath={setCurrentPath}
                                                    />}
          />
          {/* <Home properties={filteredProperties} isFilterModalOpen={isFilterModalOpen} isLoginOpen={isLoginOpen} /> */}
          {/* <div>
            <button 
              onClick={handleInitializeDB}
              disabled={loading}
            >
              {loading ? 'Initializing...' : 'Initialize Database'}
            </button>
            {error && <div style={{color: 'red'}}>{error}</div>}
          </div> */}
        </Routes>
        {filterModal && <FilterModal 
                                  properties={properties}
                                  filteredProperties={filteredProperties}
                                  setFilteredProperties={setFilteredProperties}
                                  filterModal={filterModal} 
                                  toggleFilterModal={toggleFilterModal} 
                        />
        } 
      </main> 
      <Footer currentPath={currentPath}/>
    </Router>
  )
}

export default App;
