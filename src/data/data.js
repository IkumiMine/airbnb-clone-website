import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase';

try {
  db;
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Add error checking to all database operations
export const createUser = async (userId) => {
  try {
    console.log('Creating user with ID:', userId); // Debug log
    await setDoc(doc(db, 'users', userId), {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '+1234567890',
      profileImageUrl: 'https://example.com/profile.jpg',
      isHost: false,
      createdAt: new Date(),
      notifications: {
        notification1: {
          message: 'Welcome to Airbnb!',
          type: 'welcome',
          read: false,
          createdAt: new Date()
        }
      }
    });
    console.log('User created successfully'); // Debug log
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Arrays for generating random data
const cities = ['Miami', 'New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Seattle', 'Boston', 'Austin'];
const propertyTypes = ['house', 'apartment', 'villa', 'condo', 'cabin', 'loft'];
const roomTypes = ['entire_place', 'private_room', 'shared_room'];
const amenities = ['wifi', 'pool', 'parking', 'kitchen', 'gym', 'air_conditioning', 'heating', 'washer', 'dryer', 'tv', 'elevator'];
const titles = ['Luxury', 'Cozy', 'Modern', 'Charming', 'Elegant', 'Stunning', 'Beautiful', 'Spacious'];
const types = ['Beach House', 'Mountain Cabin', 'City Apartment', 'Lake House', 'Downtown Loft', 'Garden Villa'];

// Helper function to generate random data
const generateRandomProperty = (index) => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
  const title = `${titles[Math.floor(Math.random() * titles.length)]} ${types[Math.floor(Math.random() * types.length)]}`;
  const basePrice = Math.floor(Math.random() * (500 - 100) + 100);
  const bedrooms = Math.floor(Math.random() * 5) + 1;
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);

  // Generate random amenities (3-7 items)
  const randomAmenities = [...amenities]
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 4) + 3);

  return {
    hostId: `user${Math.floor(Math.random() * 1000)}`,
    title,
    description: `Beautiful ${propertyType} with amazing views and modern amenities`,
    propertyType,
    roomType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
    location: {
      address: `${Math.floor(Math.random() * 999) + 1} ${Math.random().toString(36).substring(7)} Street`,
      city,
      state: 'State',
      country: 'USA',
      zipCode: Math.floor(Math.random() * 90000) + 10000,
      coordinates: {
        latitude: (Math.random() * (49 - 25) + 25).toFixed(4),
        longitude: (Math.random() * (-70 - -125) + -125).toFixed(4)
      }
    },
    price: {
      basePrice,
      cleaningFee: Math.floor(basePrice * 0.15),
      serviceFee: Math.floor(basePrice * 0.12)
    },
    details: {
      bedrooms,
      bathrooms: Math.floor(bedrooms * 0.7) + 1,
      maxGuests: bedrooms * 2
    },
    amenities: randomAmenities,
    images: [
      {
        // Using different random images for each property
        url: `https://picsum.photos/300`,
        isPrimary: true
      },
      {
        url: `https://picsum.photos/300`,
        isPrimary: false
      },
      {
        url: `https://picsum.photos/300`,
        isPrimary: false
      }
    ],
    rating: Number(rating),
    reviewCount: Math.floor(Math.random() * 50) + 5,
    createdAt: new Date(),
    isAvailable: Math.random() > 0.2 // 80% chance of being available
  };
};

// Function to create 32 properties
export const createProperties = async () => {
  if (!db) throw new Error('Firebase is not initialized');
  
  try {
    console.log('Starting to create properties...');
    
    for (let i = 0; i < 32; i++) {
      const propertyId = `property${i + 1}`;
      const propertyData = generateRandomProperty(i);
      
      await setDoc(doc(db, 'properties', propertyId), propertyData);
      console.log(`Created property ${i + 1} of 32`);
    }
    
    console.log('Successfully created all 32 properties');
  } catch (error) {
    console.error('Error creating properties:', error);
    throw error;
  }
};

// Optional: Create a single property (keep your original function)
export const createProperty = async (propertyId) => {
  if (!db) throw new Error('Firebase is not initialized');
  const propertyData = generateRandomProperty(0);
  await setDoc(doc(db, 'properties', propertyId), propertyData);
};

// Bookings Collection
export const createBooking = async (bookingId) => {
  if (!db) throw new Error('Firebase is not initialized');
  await setDoc(doc(db, 'bookings', bookingId), {
    propertyId: 'property123',
    guestId: 'user456',
    hostId: 'user123',
    checkInDate: new Date('2024-06-01'),
    checkOutDate: new Date('2024-06-07'),
    totalPrice: 1380,
    status: 'pending',
    createdAt: new Date(),
    guestCount: 4,
    specialRequests: 'Late check-in requested'
  });
};

// Reviews Collection
export const createReview = async (reviewId) => {
  if (!db) throw new Error('Firebase is not initialized');
  await setDoc(doc(db, 'reviews', reviewId), {
    propertyId: 'property123',
    bookingId: 'booking123',
    reviewerId: 'user456',
    rating: 5,
    comment: 'Amazing stay! The house was perfect and the host was very helpful.',
    createdAt: new Date()
  });
};

// Messages Collection
export const createMessage = async (chatId, messageId) => {
  if (!db) throw new Error('Firebase is not initialized');
  await setDoc(doc(db, 'messages', chatId, 'messages', messageId), {
    senderId: 'user456',
    receiverId: 'user123',
    content: 'Hi, is this property available for the summer?',
    createdAt: new Date(),
    read: false,
    bookingId: 'booking123'
  });
};

// Wishlists Collection
export const createWishlist = async (userId, listId) => {
  if (!db) throw new Error('Firebase is not initialized');
  await setDoc(doc(db, 'wishlists', userId), {
    [listId]: {
      name: 'Summer Vacation Ideas',
      properties: {
        property123: {
          addedAt: new Date()
        }
      }
    }
  });
};

// Availability Collection
export const createAvailability = async (propertyId) => {
  if (!db) throw new Error('Firebase is not initialized');
  await setDoc(doc(db, 'availability', propertyId), {
    dates: {
      '2024-06-01': {
        isBooked: false,
        price: 150
      },
      '2024-06-02': {
        isBooked: false,
        price: 150
      },
      '2024-06-03': {
        isBooked: false,
        price: 180  // weekend price
      }
    }
  });
};

// Example of how to handle errors when creating documents
export const createDocumentWithErrorHandling = async (collection, id, data) => {
  if (!db) throw new Error('Firebase is not initialized');
  try {
    await setDoc(doc(db, collection, id), data);
    console.log(`Successfully created document in ${collection}`);
  } catch (error) {
    console.error(`Error creating document in ${collection}:`, error);
    throw error;
  }
};

// Example usage of all setDoc operations
export const initializeDatabase = async () => {
  try {
    console.log('Starting database initialization...'); // Debug log
    
    // Test Firebase connection
    // const testDoc = doc(db, 'test', 'test');
    // await setDoc(testDoc, { test: true });
    // console.log('Firebase connection successful'); // Debug log

    //await createUser('user123');
    await createProperties();
    //await createBooking('booking123');
    //await createReview('review123');
    //await createMessage('user123_user456', 'message123');
    //await createWishlist('user456', 'list123');
    //await createAvailability('property123');
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error in database initialization:', error.message);
    throw error;
  }
};

// export const createRelatedDocuments = async () => {
//   if (!db) throw new Error('Firebase is not initialized');
//   const batch = writeBatch(db);
  
//   //Add multiple documents in one atomic operation
//   batch.set(doc(db, 'users', 'user123'), { /* user data */ });
//   batch.set(doc(db, 'properties', 'property123'), { /* property data */ });
  
//   await batch.commit();
// };