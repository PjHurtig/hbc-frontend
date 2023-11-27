import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import GearListCreateForm from "./pages/gearlists/GearListCreateForm";
import GearListPage from "./pages/gearlists/GearListPage";
import GearListEditForm from "./pages/gearlists/GearListEditForm";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventPage from "./pages/events/EventPage";
import EventEditForm from "./pages/events/EventEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>

          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />

          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />

          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          
          <Route 
            exact 
            path="/signin" 
            render={() => <SignInForm />} 
          />
          
          <Route 
            exact 
            path="/signup" 
            render={() => <SignUpForm />} 
          />
          
          <Route 
            exact 
            path="/posts/create" 
            render={() => <PostCreateForm />} 
          />
          
          <Route 
            exact
            path="/posts/:id" 
            render={() => <PostPage />} 
          />
          
          <Route 
            exact 
            path="/posts/:id/edit" 
            render={() => <PostEditForm />} 
          />
          
          <Route 
            exact 
            path="/profiles/:id" 
            render={() => <ProfilePage />} 
          />
          
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />

          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />

          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          <Route 
            exact 
            path="/gearlists/create" 
            render={() => <GearListCreateForm />} 
          />

          <Route 
            exact 
            path="/gearlists/:id" 
            render={() => <GearListPage />} 
          />

          <Route 
            exact 
            path="/gearlists/:id/edit" 
            render={() => <GearListEditForm />} 
          />

          <Route 
            exact 
            path="/events/create" 
            render={() => <EventCreateForm />} 
          />
          
          <Route 
            exact 
            path="/events/:id" 
            render={() => <EventPage />} 
          />

          <Route 
            exact 
            path="/events/:id/edit" 
            render={() => <EventEditForm />} 
          />

          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;