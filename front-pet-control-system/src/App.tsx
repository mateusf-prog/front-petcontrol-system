import './global.css'
import { MainLayout } from './components/MainLayout';
import { LoginForm } from './components/LoginForm';

export default function App() {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  )
}
