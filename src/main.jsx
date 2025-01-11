import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementsById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
// root.render(<App />);

// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// } else {
//   console.error('Root element not found');
// }
