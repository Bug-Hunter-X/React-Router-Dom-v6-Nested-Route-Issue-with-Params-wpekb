```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function User() {
  let { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
      <Routes>
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

function UserProfile() {
  return <div>User Profile</div>;
}

export default App;
```