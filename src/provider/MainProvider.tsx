import type { ReactNode } from "react";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Provider store={store}>  // Redux store provider
      <QueryClientProvider client={queryClient}>  // React Query provider
        <AuthContextProvider>
          <StateContextProvider>
            <HelmetProvider>  // React Helmet Async provider for managing document head */}
      {children}
      {/* <Toaster position="top-right" reverseOrder={false} /> // React Hot Toast for notifications
            </HelmetProvider>
          </StateContextProvider>
        </AuthContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider> */}
    </>
  );
};

export default MainProvider;
