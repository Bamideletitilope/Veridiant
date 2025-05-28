import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import WeatherDashboard from "./pages/WeatherDashboard";
import CityPage from "./pages/CityPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
{/*import VideoBackground from './components/cloudvideobackground';
*/}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //5 minutes
      gcTime: 10 * 60 * 1000, //10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        {/* Simply render the VideoBackground component without any props */}
      {/*<VideoBackground /> */}

        <div className="relative z-10 flex flex-col min-h-screen">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;